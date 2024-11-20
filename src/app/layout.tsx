import { ReactNode } from 'react';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ortiz Piano Tuning',
  description: 'Professional piano tuning and repair services.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <div>
          <header className="flex justify-between items-center p-5">
            <h1 className="text-2xl font-serif font-bold text-accent">
              Ortiz Piano Tuning
            </h1>
            <nav className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="../about">About</Link>
              <Link href="../contact">Contact</Link>
              <Link href="../services">Services</Link>
              <Link href="../schedule">Schedule</Link>
            </nav>
          </header>
          <main className="flex flex-col items-center p-10">
            {children}
          </main>
          <footer className="p-5 text-center border-t border-subtle">
            <p className="text-secondary">© 2024 Ortiz Piano Tuning</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

