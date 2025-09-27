import Link from 'next/link';
import { Facebook, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/icons/logo';

export default function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center gap-3">
                <Logo className="h-12 w-12 text-primary" />
                <span className="font-headline text-2xl font-bold">True love Assemblies of God</span>
              </Link>
              <p className="mt-4 max-w-xs text-muted-foreground">
                A community of faith, hope, and love. Join us as we grow together.
              </p>
          </div>
          
          <div className="md:justify-self-center">
            <h3 className="font-headline text-xl font-bold">Contact Us</h3>
            <div className="mt-4 space-y-3">
              <address className="flex items-center justify-center md:justify-start gap-3 not-italic text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary"/>
                  <p>Ashiyie</p>
              </address>
              <div className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary"/>
                  <a href="tel:123-456-7890" className="hover:text-primary">(123) 456-7890</a>
              </div>
            </div>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-headline text-xl font-bold">Follow Us</h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} True love Assemblies of God. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
