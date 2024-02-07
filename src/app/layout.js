import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sneakers Adda - v1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
     <body className={inter.className}>
  
  <header className="bg-blue-400 text-black text-3xl font-extrabold py-10 flex justify-center items-center shadow-sm tracking-widest">
  <Link href='/' className='hover:bg-green-300'>  S N E A K E R S <span className="mx-4 "></span> A D D A
  </Link>
  </header>
  
  {children}
</body>

    </html>
  );
}
