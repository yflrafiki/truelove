import { Clock, Youtube, MapPin } from 'lucide-react';
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

  const servicesByDay: { [key: string]: typeof serviceTimes } = serviceTimes.reduce((acc, service) => {
    if (!acc[service.day]) {
      acc[service.day] = [];
    }
    acc[service.day].push(service);
    return acc;
  }, {} as { [key: string]: typeof serviceTimes });

  return (
    <div className="bg-background">
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Join Us for a Service</h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              We welcome you to join our services, experience heartfelt worship, and hear a life-changing message.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <h2 className="font-headline text-4xl font-bold text-foreground">Our Weekly Schedule</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(servicesByDay).map(([day, services]) => (
                <Card key={day} className="bg-card shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">{day}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                        <div>
                          <p className="font-semibold text-lg text-foreground">{service.time}</p>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
             <Card className="shadow-xl bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-3xl flex items-center gap-3">
                  <Youtube className="h-8 w-8 text-red-600" />
                  Online Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Can't make it in person? Join our live stream every Sunday at 8:00 AM on our YouTube channel.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
             <Card className="shadow-xl bg-card">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl flex items-center gap-3">
                       <MapPin className="h-8 w-8 text-primary" />
                        Our Location
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground mb-6">Ashiyie</p>
                    <div className="h-80 w-full overflow-hidden rounded-lg">
                        {apiKey ? (
                        <Map apiKey={apiKey} />
                        ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted rounded-lg">
                            <p className="text-muted-foreground">Could not load map. API key is missing.</p>
                        </div>
                        )}
                    </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
