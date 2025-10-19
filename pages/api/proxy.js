export default async function handler(req, res) {
  const { url: imageUrl } = req.query;

  console.log('Proxy request:', imageUrl);

  if (!imageUrl) {
    return res.status(400).send('Missing url parameter');
  }

  const allowedDomains = [
    'delivery.shngm.id',
    'fture.ngomik.org',
    'kiryuu02.com',
    'cdn3.imgkomik.xyz',
    '08.shinigami.asia',
  ];

  try {
    const url = new URL(imageUrl);
    console.log('Hostname:', url.hostname);
    
    if (!allowedDomains.includes(url.hostname)) {
      return res.status(403).send(`Domain not allowed: ${url.hostname}`);
    }
  } catch (error) {
    console.error('URL parse error:', error);
    return res.status(400).send('Invalid URL');
  }

  try {
    console.log('Fetching image from:', imageUrl);
    
    const response = await fetch(imageUrl, {
      headers: {
        'Referer': 'https://delivery.shngm.id/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
      },
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      return res.status(response.status).send(`Image not found: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('Content-Type') || 'image/jpeg';
    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    return res.send(buffer);
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).send(`Error: ${error.message}`);
  }
        }
