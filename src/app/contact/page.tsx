import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          We&apos;d love to hear from you. Whether you have a question, a prayer request, or just want to say hello, please don&apos;t hesitate to reach out.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
          <div className="flex items-start gap-4">
            <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Our Address</h3>
              <p className="text-muted-foreground">123 Grace Avenue, Faith City, 12345</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <a href="mailto:contact@sanctuaryhub.org" className="text-muted-foreground hover:text-primary">contact@sanctuaryhub.org</a>
            </div>
          </div>
           <div className="flex items-start gap-4">
            <Phone className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <a href="tel:123-456-7890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
            </div>
          </div>
        </div>

        <div>
            <h2 className="font-headline text-3xl font-bold mb-8">Send Us a Message</h2>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
