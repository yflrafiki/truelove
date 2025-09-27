import { Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question, a prayer request, or just want to say hello, please don't hesitate to reach out.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-lg shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-center font-headline text-3xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Our Address</h3>
                  <p className="text-muted-foreground mt-1">Ashiyie</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <a href="tel:123-456-7890" className="text-muted-foreground hover:text-primary mt-1 block">(123) 456-7890</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
