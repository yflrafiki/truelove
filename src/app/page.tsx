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
      <section className="relative h-[85vh] w-full text-white">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-start justify-end p-8 md:p-16">
          <div className="max-w-3xl">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight md:text-7xl leading-tight drop-shadow-lg">
              Welcome to True love Assemblies of God
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-100 drop-shadow-md">
              A vibrant community dedicated to faith, hope, and love. Join us to experience uplifting worship and transformative teaching.
            </p>
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link href="/about">Learn More <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 shadow-lg">
                <Link href="/services">Service Times</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <p className="font-semibold text-primary">Our Core Values</p>
                <h2 className="font-headline text-4xl font-bold md:text-5xl mt-2">Guiding Our Community</h2>
                <p className="mx-auto mt-4 text-lg text-muted-foreground">
                    These principles are the bedrock of our church, shaping everything we do in faith, service, and fellowship.
                </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
                <Card className="text-center bg-card p-8 border-t-4 border-primary shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                        <Church className="h-10 w-10 text-primary"/>
                    </div>
                    <h3 className="font-headline text-2xl font-bold">Faith</h3>
                    <p className="mt-2 text-muted-foreground">Centered on the teachings of Jesus Christ and the truth of the Gospel.</p>
                </Card>
                <Card className="text-center bg-card p-8 border-t-4 border-primary shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                        <Heart className="h-10 w-10 text-primary"/>
                    </div>
                    <h3 className="font-headline text-2xl font-bold">Love</h3>
                    <p className="mt-2 text-muted-foreground">Fostering a welcoming community where everyone is valued and supported.</p>
                </Card>
                <Card className="text-center bg-card p-8 border-t-4 border-primary shadow-xl hover:shadow-2xl transition-shadow duration-300">
                     <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                        <Handshake className="h-10 w-10 text-primary"/>
                    </div>
                    <h3 className="font-headline text-2xl font-bold">Service</h3>
                    <p className="mt-2 text-muted-foreground">Serving our neighbors and sharing our blessings with the wider community.</p>
                </Card>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-semibold text-primary">Get Connected</p>
            <h2 className="font-headline text-4xl font-bold md:text-5xl mt-2">Upcoming Events</h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              Join us for worship, fellowship, and community outreach. There's always something happening at Sanctuary Hub.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => {
              const eventImage = PlaceHolderImages.find(p => p.id === event.image);
              return (
                <Card key={event.id} className="group flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card">
                    {eventImage && (
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={eventImage.imageUrl}
                          alt={event.title}
                          data-ai-hint={eventImage.imageHint}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="font-headline text-xl font-bold">{event.title}</h3>
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
                    <p className="mt-4 text-muted-foreground line-clamp-2 flex-grow">
                      {event.description}
                    </p>
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
           <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
