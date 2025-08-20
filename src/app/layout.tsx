// /src/app/layout.tsx

import './globals.css';
import Navbar from '@/components/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* Main page content pushed down to avoid overlap */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
