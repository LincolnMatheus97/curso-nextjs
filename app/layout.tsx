// @ts-ignore: allow importing global CSS without module declarations
import './ui/global.css'
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialised`}>
        {children}
      </body>
    </html>
  );
}
