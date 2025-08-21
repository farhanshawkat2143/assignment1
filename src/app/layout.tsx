// app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = { title: 'LTU Assignment' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: '1rem', minHeight: '72vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
