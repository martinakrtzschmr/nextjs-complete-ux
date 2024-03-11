import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Modal from './components/modals/modal';
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
        <Modal title='Login' isOpen />
        <Navbar />
        {children}
        </body>
    </html>
  );
}
