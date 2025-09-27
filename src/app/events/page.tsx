'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { events as allEvents } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format, parseISO } from 'date-fns';
import { Calendar, MapPin, ArrowRight, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type EventType = 'all' | 'service' | 'ministry' | 'special';

export default function EventsPage() {
  const [filter, setFilter] = useState<EventType>('all');

  const filteredEvents = useMemo(() => {
    if (filter === 'all') return allEvents;
    return allEvents.filter((event) => event.type === filter);
  }, [filter]);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">Church Events</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            There's always something happening at Sanctuary Hub. Find an event and get connected.
          </p>
        </div>

        <Tabs defaultValue="all" onValueChange={(value) => setFilter(value as EventType)} className="mt-12">
          <TabsList className="mx-auto flex w-full max-w-lg flex-wrap justify-center">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="service" className="flex-1">Services</TabsTrigger>
            <TabsTrigger value="ministry" className="flex-1">Ministries</TabsTrigger>
            <TabsTrigger value="special" className="flex-1">Special</TabsTrigger>
          </TabsList>
          <TabsContent value={filter}>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => {
                const eventImage = PlaceHolderImages.find((p) => p.id === event.image);
                return (
                  <Card key={event.id} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {eventImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={eventImage.imageUrl}
                          alt={event.title}
                          data-ai-hint={eventImage.imageHint}
                          fill
                          className="object-cover"
                        />
                        <Badge variant="secondary" className="absolute top-3 right-3 capitalize">
                          <Tag className="mr-2 h-4 w-4" />
                          {event.type}
                        </Badge>
                      </div>
                    )}
                    <CardContent className="flex-grow p-6">
                      <h3 className="font-headline text-xl font-bold">{event.title}</h3>
                      <p className="mt-2 text-muted-foreground line-clamp-3">
                        {event.description}
                      </p>
                       <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span>{format(parseISO(event.date), 'MMMM d, yyyy, p')}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
             {filteredEvents.length === 0 && (
              <div className="mt-16 text-center text-muted-foreground">
                <p>No events found for this category. Please check back soon!</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
