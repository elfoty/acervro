import React, { useState } from 'react';

interface ImagemComFallbackProps {
  src?: string;
  alt?: string;
  fallbackSrc: string;
  style?: React.CSSProperties;
}

export function ImagemComFallback({ src, alt, fallbackSrc, style }: ImagemComFallbackProps) {
  const [erro, setErro] = useState(false);

  // Se src for vazio ou undefined, já usa fallback direto
  const srcValido = !erro && src ? src : fallbackSrc;

  return (
    <img
      src={srcValido}
      alt={alt}
      onError={() => setErro(true)}
      style={style}
      loading="lazy"
    />
  );
}
