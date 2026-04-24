import Link from 'next/link';

export function AHBHeader() {
  return (
    <header className='sticky top-0 z-50 border-b backdrop-blur' style={{ backgroundColor: '#0a1a14ee', borderColor: '#2a3a30' }}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm' style={{ backgroundColor: '#34d399', color: '#0a1a14' }}>AHB</div>
            <div>
              <div className='text-sm font-bold tracking-tight' style={{ color: '#f0fdf4' }}>At Home Biohacking</div>
              <div className='text-xs' style={{ color: '#a7f3d0' }}>Research-backed wellness reviews</div>
            </div>
          </Link>
          <nav className='hidden md:flex items-center gap-6 text-sm font-medium' style={{ color: '#a7f3d0' }}>
            <Link href='/cold-plunge' className='hover:text-white transition-colors'>Cold Plunge</Link>
            <Link href='/infrared-sauna' className='hover:text-white transition-colors'>Infrared Sauna</Link>
            <Link href='/pemf' className='hover:text-white transition-colors'>PEMF</Link>
            <Link href='/red-light-therapy' className='hover:text-white transition-colors'>Red Light</Link>
            <Link href='/vibration-plate' className='hover:text-white transition-colors'>Vibration</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
