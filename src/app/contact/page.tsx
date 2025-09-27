import { Phone, MapPin, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Map from '@/components/map';
import { getMapsApiKey } from '@/app/actions';
import ContactForm from '@/components/contact-form';

export default async function ContactPage() {
  const apiKey = await getMapsApiKey();
  return (
    <div className="bg-background">
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Get in Touch</h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              We'd love to hear from you. Whether you have a question, a prayer request, or just want to say hello, please don't hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
           <div>
            <h2 className="font-headline text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
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
            </div>
            <div className="mt-12 h-80 w-full overflow-hidden rounded-lg shadow-xl">
                 {apiKey ? (
                    <Map apiKey={apiKey} />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted rounded-lg">
                        <p className="text-muted-foreground">Could not load map. API key is missing.</p>
                    </div>
                )}
            </div>
           </div>
          <Card className="w-full shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-3xl flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary"/>
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
