import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Church, Handshake, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Our Core Values</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Guiding our community in faith, service, and fellowship.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                <Card className="text-center border-0 bg-transparent shadow-none">
                    <CardContent className="p-6">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                            <Church className="h-8 w-8 text-primary"/>
                        </div>
                        <h3 className="font-headline text-2xl font-bold">Faith</h3>
                        <p className="mt-2 text-muted-foreground">Centered on the teachings of Jesus Christ and the truth of the Gospel.</p>
                    </CardContent>
                </Card>
                <Card className="text-center border-0 bg-transparent shadow-none">
                    <CardContent className="p-6">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                            <Heart className="h-8 w-8 text-primary"/>
                        </div>
                        <h3 className="font-headline text-2xl font-bold">Love</h3>
                        <p className="mt-2 text-muted-foreground">Fostering a welcoming community where everyone is valued and supported.</p>
                    </CardContent>
                </Card>
                <Card className="text-center border-0 bg-transparent shadow-none">
                    <CardContent className="p-6">
                         <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                            <Handshake className="h-8 w-8 text-primary"/>
                        </div>
                        <h3 className="font-headline text-2xl font-bold">Service</h3>
                        <p className="mt-2 text-muted-foreground">Serving our neighbors and sharing our blessings with the wider community.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
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
                <Card key={event.id} className="group flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {eventImage && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={eventImage.imageUrl}
                          alt={event.title}
                          data-ai-hint={eventImage.imageHint}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="font-headline text-xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2 flex-grow">
                      {event.description}
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                     <Button asChild variant="link" className="px-0 mt-4 self-start">
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
