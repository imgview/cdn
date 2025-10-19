import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vercel Image Transform Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ maxWidth: '1200px', margin: '50px auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>
          🚀 Vercel Image Optimization Test
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
          Testing external image transformation
        </p>

        {/* Test 1: fture.ngomik.org */}
        <div style={{ margin: '40px 0', padding: '20px', border: '2px solid #ddd', borderRadius: '10px' }}>
          <h2>1. fture.ngomik.org (Should Work ✅)</h2>
          <Image
            src="https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg"
            alt="Test from ngomik"
            width={600}
            height={400}
            style={{ borderRadius: '8px' }}
          />
          <p style={{ marginTop: '10px', color: '#666' }}>
            <code>width=600, height=400, auto WebP</code>
          </p>
        </div>

        {/* Test 2: delivery.shngm.id */}
        <div style={{ margin: '40px 0', padding: '20px', border: '2px solid #ddd', borderRadius: '10px' }}>
          <h2>2. delivery.shngm.id (Might Fail ❌)</h2>
          <Image
            src="https://delivery.shngm.id/chapter/manga_c3a291e6-d0d8-4db2-9bcd-19c1c317514c/chapter_d972dfa0-6e23-46ff-9664-a4a68c30673c/1-b58578.jpg"
            alt="Test from shngm"
            width={600}
            height={800}
            style={{ borderRadius: '8px' }}
          />
          <p style={{ marginTop: '10px', color: '#666' }}>
            <code>width=600, height=800</code>
          </p>
        </div>

        {/* Different Sizes */}
        <div style={{ margin: '40px 0', padding: '20px', border: '2px solid #ddd', borderRadius: '10px' }}>
          <h2>3. Different Sizes (Responsive)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            
            <div>
              <h3>200px</h3>
              <Image
                src="https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg"
                alt="200px"
                width={200}
                height={200}
                style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
              />
            </div>

            <div>
              <h3>300px</h3>
              <Image
                src="https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg"
                alt="300px"
                width={300}
                height={300}
                style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
              />
            </div>

            <div>
              <h3>400px</h3>
              <Image
                src="https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg"
                alt="400px"
                width={400}
                height={400}
                style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Quality Test */}
        <div style={{ margin: '40px 0', padding: '20px', border: '2px solid #ddd', borderRadius: '10px' }}>
          <h2>4. Quality Variations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            
            <div>
              <h3>Quality 50</h3>
              <Image
                src="https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg"
                alt="q50"
                width={300}
                height={200}
                quality={50}
                style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
              />
              <p style={{ fontSize: '0.9em', color: '#666' }}>Compressed</p>
            </div>

            <div>
              <h3>Quality 75 (Default)</h3>
              <Image
                src="https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg"
                alt="q75"
                width={300}
                height={200}
                quality={75}
                style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
              />
              <p style={{ fontSize: '0.9em', color: '#666' }}>Balanced</p>
            </div>

            <div>
              <h3>Quality 90</h3>
              <Image
                src="https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg"
                alt="q90"
                width={300}
                height={200}
                quality={90}
                style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
              />
              <p style={{ fontSize: '0.9em', color: '#666' }}>High Quality</p>
            </div>
          </div>
        </div>

        {/* Manual API Usage */}
        <div style={{ margin: '40px 0', padding: '20px', border: '2px solid #e8f5e9', borderRadius: '10px', background: '#f1f8f4' }}>
          <h2 style={{ color: '#2e7d32' }}>✅ Cara Pakai API Langsung (Tanpa Next.js Component)</h2>
          
          <h3>Format URL:</h3>
          <div style={{ background: '#2d3748', color: '#68d391', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9em', overflow: 'auto' }}>
            https://your-site.vercel.app/_next/image?url=IMAGE_URL&w=WIDTH&q=QUALITY
          </div>

          <h3 style={{ marginTop: '20px' }}>Contoh:</h3>
          <div style={{ background: '#2d3748', color: '#68d391', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em', overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            https://your-site.vercel.app/_next/image?url=https://fture.ngomik.org/.../image.jpg&w=600&q=75
          </div>

          <h3 style={{ marginTop: '20px' }}>Test Manual:</h3>
          <img 
            src="/_next/image?url=https://fture.ngomik.org/50553a30e22b4a15a04ca828f83b81c8:f-images/2024/09/namgung-crop-e1725551818687.jpg&w=400&q=70"
            alt="Manual API test"
            style={{ maxWidth: '400px', borderRadius: '8px', marginTop: '10px' }}
          />
          <p style={{ marginTop: '10px', color: '#666' }}>
            ↑ Gambar ini loaded via API langsung (bukan component)
          </p>
        </div>

      </div>
    </>
  )
}
