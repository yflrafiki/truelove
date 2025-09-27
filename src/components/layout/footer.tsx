import Link from 'next/link';
import { Facebook, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/icons/logo';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-10 w-10 text-primary" />
              <span className="font-headline text-2xl font-bold">True love Assemblies of God</span>
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              A community of faith, hope, and love. Join us as we grow together.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <address className="mt-4 not-italic text-muted-foreground space-y-2">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="h-5 w-5 text-primary"/>
                <p>Ashiyie</p>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="h-5 w-5 text-primary"/>
                <a href="tel:123-456-7890" className="hover:text-primary">(123) 456-7890</a>
              </div>
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
