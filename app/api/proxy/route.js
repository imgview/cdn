// app/api/proxy/route.js

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  // Validasi hanya domain yang diizinkan
  const allowedDomains = [
    'delivery.shngm.id',
    'fture.ngomik.org',
    'kiryuu02.com',
  ];

  try {
    const url = new URL(imageUrl);
    if (!allowedDomains.includes(url.hostname)) {
      return new Response('Domain not allowed', { status: 403 });
    }
  } catch {
    return new Response('Invalid URL', { status: 400 });
  }

  try {
    // Fetch gambar dengan headers yang proper
    const response = await fetch(imageUrl, {
      headers: {
        'Referer': 'https://shngm.id/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      },
    });

    if (!response.ok) {
      return new Response('Image not found', { status: 404 });
    }

    // Return gambar dengan cache headers
    return new Response(response.body, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response('Error fetching image', { status: 500 });
  }
}
