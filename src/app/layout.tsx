import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Bot, Sun, Plus, LogIn, User as UserIcon } from 'lucide-react';
import NavLink from '@/components/NavLink';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Model Comparison',
  description: 'Compare responses from different AI models on various topics and debates.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme='light'>
          {/* Navbar */}
          <nav className="fixed top-0 left-0 right-0 bg-deutzia-white border-b border-pallid-blue z-50">
            <div className="max-w-content mx-auto px-6 h-18">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center space-x-8">
                  <a href="/" className="text-[#2792FD] hover:text-[#1D3557] transition-colors">
                    <Bot className="w-8 h-8" />
                  </a>
                  <div className="hidden md:flex items-center space-x-6">
                    <NavLink icon={<Bot className="w-4 h-4" />} text="Debates" href="/debates" />
                    <NavLink icon={<Bot className="w-4 h-4" />} text="About" href="/about" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Start a Debate CTA */}
                  <a
                    href="/debates/new"
                    className="hidden md:flex items-center space-x-2 text-[18px] font-medium transition-colors relative text-[#1D3557] hover:text-[#2792FD] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-[#2792FD] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Start a Debate</span>
                  </a>

                  {/* Auth Buttons - Show these when user is NOT logged in */}
                  <a
                    href="/login"
                    className="flex items-center space-x-2 text-[18px] font-medium transition-colors relative text-[#1D3557] hover:text-[#2792FD] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-[#2792FD] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Log in</span>
                  </a>

                  {/* Theme Toggle */}
                <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          {children}

          {/* Footer */}
          <footer className="border-t border-[#AAD8FF] py-6 mt-16">
            <div className="max-w-content mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center text-small text-[#4A6FA5]">
                <div>© 2025 AI Model Comparison. All rights reserved.</div>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  <a href="/terms" className="hover:text-[#1D3557] transition-colors">Terms</a>
                  <a href="/privacy" className="hover:text-[#1D3557] transition-colors">Privacy</a>
                  <span>Powered by Next.js</span>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}