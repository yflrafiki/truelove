import { Clock, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Map from '@/components/map';
import { getMapsApiKey } from '@/app/actions';

const serviceTimes = [
  { day: 'Sunday', time: '8:00 AM - 11:00 AM', description: 'Main Service' },
  { day: 'Sunday', time: '11:00 AM - 11:30 AM', description: 'Sunday School' },
  { day: 'Wednesday', time: '9:00 AM - 11:00 AM', description: 'Victory Hour' },
  { day: 'Wednesday', time: '6:30 PM - 8:00 PM', description: 'Bible Studies' },
  { day: 'Friday', time: '6:30 PM - 8:00 PM', description: 'Prayer Time' },
];

export default async function ServicesPage() {
  const apiKey = await getMapsApiKey();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">Join Us for a Service</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We welcome you to join our services, experience heartfelt worship, and hear a life-changing message.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Service Times</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {serviceTimes.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mr-4">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{service.day} - {service.time}</p>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Online Service</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mr-4">
                    <Youtube className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Join our Live Stream</p>
                    <p className="text-muted-foreground">
                        Can&apos;t make it in person? Join our live stream every Sunday at 11:00 AM on our YouTube channel.
                    </p>
                  </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[400px] md:h-full w-full overflow-hidden rounded-lg shadow-lg">
            {apiKey ? (
              <Map apiKey={apiKey} />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <p className="text-muted-foreground">Could not load map. API key is missing.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
