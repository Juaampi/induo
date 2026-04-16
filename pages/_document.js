import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="description" content="IN DUO - Indumentaria deportiva personalizada para clubes, equipos y eventos" />
        <meta name="theme-color" content="#E53935" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
