import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { featuredEvents } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
            Welcome to True love Assemblies of God
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            A place of faith, hope, and community.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/about">Learn More <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Mission</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            To foster a vibrant, inclusive community dedicated to spiritual growth, compassionate service, and spreading love and understanding in the world.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Upcoming Events</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join us for worship, fellowship, and community outreach.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => {
              const eventImage = PlaceHolderImages.find(p => p.id === event.image);
              return (
                <Card key={event.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader className="p-0">
                    {eventImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={eventImage.imageUrl}
                          alt={event.title}
                          data-ai-hint={eventImage.imageHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {event.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                     <Button asChild variant="link" className="mt-4 px-0">
                        <Link href="/events">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
           <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
