export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  console.log('Proxy request:', imageUrl);

  if (!imageUrl) {
    return new Response('Missing url parameter', { status: 400 });
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
      return new Response(`Domain not allowed: ${url.hostname}`, { status: 403 });
    }
  } catch (error) {
    console.error('URL parse error:', error);
    return new Response('Invalid URL', { status: 400 });
  }

  try {
    console.log('Fetching image...');
    
    const response = await fetch(imageUrl, {
      headers: {
        'Referer': 'https://delivery.shngm.id/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      return new Response(`Image not found: ${response.status}`, { 
        status: response.status 
      });
    }

    return new Response(response.body, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Fetch error:', error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
