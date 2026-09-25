import * as React from 'react';
export default function Image(props: any) { const { src, alt, fill, priority, placeholder, blurDataURL, quality, sizes, loader, unoptimized, ...rest } = props; return React.createElement('img', { src: typeof src === 'string' ? src : src?.src, alt, ...rest }); }
