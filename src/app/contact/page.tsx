import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We&apos;d love to hear from you. Whether you have a question, a prayer request, or just want to say hello, please don&apos;t hesitate to reach out.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-lg shadow-xl">
            <CardHeader>
              <CardTitle className="text-center font-headline text-3xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Our Address</h3>
                  <p className="text-muted-foreground">Ashiyie</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <a href="tel:123-456-7890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
