import Link from 'next/link';
import { Facebook } from 'lucide-react';
import Logo from '@/components/icons/logo';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-10 w-10 text-primary" />
              <span className="font-headline text-2xl font-bold">True love Assemblies of God</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              A community of faith, hope, and love.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="md:justify-self-center">
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                 <li key={link.href}>
                   <Link href={link.href} className="text-muted-foreground hover:text-primary">
                     {link.label}
                   </Link>
                 </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <address className="mt-4 not-italic text-muted-foreground space-y-2">
              <p>123 Grace Avenue, Faith City, 12345</p>
              <p>Email: <a href="mailto:contact@sanctuaryhub.org" className="hover:text-primary">contact@sanctuaryhub.org</a></p>
              <p>Phone: <a href="tel:123-456-7890" className="hover:text-primary">(123) 456-7890</a></p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} True love Assemblies of God. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
