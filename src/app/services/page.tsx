import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Map from '@/components/map';
import { getMapsApiKey } from '@/app/actions';

const serviceTimes = [
  { day: 'Sunday', time: '8:00 AM - 12:00 PM', description: 'Main Service (Sunday School: 11:00 AM - 11:30 AM)' },
  { day: 'Wednesday', time: '9:00 AM - 11:00 AM', description: 'Victory Hour' },
  { day: 'Wednesday', time: '6:30 PM - 8:00 PM', description: 'Bible Studies' },
  { day: 'Friday', time: '6:30 PM - 8:00 PM', description: 'Prayer Time' },
];

export default async function ServicesPage() {
  const apiKey = await getMapsApiKey();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Join Us for a Service</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          We welcome you to join our services, experience heartfelt worship, and hear a life-changing message.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Service Times</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {serviceTimes.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Clock className="mr-4 mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{service.day} - {service.time}</p>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t pt-6">
                <h3 className="font-headline text-2xl">Online Service</h3>
                <p className="mt-2 text-muted-foreground">
                    Can&apos;t make it in person? Join our live stream every Sunday at 11:00 AM on our YouTube channel.
                </p>
            </div>
          </CardContent>
        </Card>

        <div className="h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
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
  );
}
