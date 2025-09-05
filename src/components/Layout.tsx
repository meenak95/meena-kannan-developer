import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Code2, User, Briefcase, Mail, Menu, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Code2 },
  { title: "About", url: createPageUrl("About"), icon: User },
  { title: "Projects", url: createPageUrl("Projects"), icon: Briefcase },
  { title: "Contact", url: createPageUrl("Contact"), icon: Mail },
];

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/meenak95" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/meena-kannan-mk/" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                DevPortfolio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 group ${
                    location.pathname === item.url ? 'bg-white/10 text-cyan-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900/95 backdrop-blur-md border-slate-700">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 group"
                    >
                      <item.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-lg font-medium">{item.title}</span>
                    </Link>
                  ))}
                  <div className="flex space-x-4 pt-6 border-t border-slate-700">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <social.icon className="w-6 h-6 text-gray-400 hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/50 backdrop-blur-md border-t border-slate-700/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full-Stack Java Developer
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Building robust enterprise applications with modern Java technologies and innovative solutions.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Full-Stack Portfolio. Crafted with passion and Java.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
