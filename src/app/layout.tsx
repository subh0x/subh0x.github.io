import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { NavMenu } from '@/components/nav-menu';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Subhrajit's Portfolio",
  description: "Subhrajit Guchait's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        instrumentSerif.variable,
        'font-sans',
        inter.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-170 mx-auto flex flex-col items-start pt-5 print:hidden">
            <NavMenu />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
