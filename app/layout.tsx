import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb UX',
  description: 'Airbnb User Experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <RegisterModal title='Login' isOpen />
        <Navbar />
        {children}
        </body>
    </html>
  );
}
