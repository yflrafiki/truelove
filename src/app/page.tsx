import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Church } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { featuredEvents } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] w-full text-white">
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight md:text-7xl leading-tight">
            Welcome to True love Assemblies of God
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-slate-200">
            A vibrant community dedicated to faith, hope, and love. Join us to experience uplifting worship and transformative teaching.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">Learn More <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/services">Service Times</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="text-center shadow-lg border-none p-8 md:p-12 bg-card">
              <div className="flex justify-center mb-4">
                <Church className="h-12 w-12 text-primary"/>
              </div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Mission</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                To foster a vibrant, inclusive community dedicated to spiritual growth, compassionate service, and spreading love and understanding in the world.
              </p>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
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
                <Card key={event.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground line-clamp-2">
                      {event.description}
                    </CardDescription>
                    <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardContent className="p-6 pt-0">
                     <Button asChild variant="link" className="px-0">
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
