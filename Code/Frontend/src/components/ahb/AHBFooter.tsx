import Link from 'next/link';

export function AHBFooter() {
  return (
    <footer className='border-t py-12 mt-20' style={{ backgroundColor: '#0a1a14', borderColor: '#2a3a30' }}>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <div className='w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs' style={{ backgroundColor: '#34d399', color: '#0a1a14' }}>AHB</div>
              <div className='text-sm font-bold' style={{ color: '#f0fdf4' }}>At Home Biohacking</div>
            </div>
            <p className='text-xs leading-relaxed' style={{ color: '#a7f3d0' }}>Honest, research-backed reviews of home biohacking wellness products. We cite peer-reviewed studies so you can verify what actually works.</p>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wider mb-3' style={{ color: '#34d399' }}>Categories</h4>
            <ul className='space-y-2 text-sm' style={{ color: '#a7f3d0' }}>
              <li><Link href='/cold-plunge' className='hover:text-white'>Cold Plunge</Link></li>
              <li><Link href='/infrared-sauna' className='hover:text-white'>Infrared Sauna</Link></li>
              <li><Link href='/pemf' className='hover:text-white'>PEMF Therapy</Link></li>
              <li><Link href='/red-light-therapy' className='hover:text-white'>Red Light Therapy</Link></li>
              <li><Link href='/vibration-plate' className='hover:text-white'>Vibration Plate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wider mb-3' style={{ color: '#34d399' }}>Company</h4>
            <ul className='space-y-2 text-sm' style={{ color: '#a7f3d0' }}>
              <li><Link href='/learn/about' className='hover:text-white'>About</Link></li>
              <li><Link href='/learn/contact' className='hover:text-white'>Contact</Link></li>
              <li><Link href='/learn/affiliate-disclosure' className='hover:text-white'>Affiliate Disclosure</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wider mb-3' style={{ color: '#34d399' }}>Legal</h4>
            <ul className='space-y-2 text-sm' style={{ color: '#a7f3d0' }}>
              <li><Link href='/learn/privacy' className='hover:text-white'>Privacy Policy</Link></li>
              <li><Link href='/learn/terms' className='hover:text-white'>Terms</Link></li>
              <li><Link href='/learn/medical-disclaimer' className='hover:text-white'>Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className='pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs' style={{ borderColor: '#2a3a30', color: '#6ee7b7' }}>
          <div>© 2026 AtHomeBiohacking.com — All rights reserved.</div>
          <div className='text-center md:text-right'>Content is for informational purposes only. Not medical advice.</div>
        </div>
      </div>
    </footer>
  );
}
