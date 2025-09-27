'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { events as allEvents } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format, parseISO } from 'date-fns';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

type EventType = 'all' | 'service' | 'ministry' | 'special';

export default function EventsPage() {
  const [filter, setFilter] = useState<EventType>('all');

  const filteredEvents = useMemo(() => {
    if (filter === 'all') return allEvents;
    return allEvents.filter((event) => event.type === filter);
  }, [filter]);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Church Events</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          There's always something happening at Sanctuary Hub. Find an event and get connected.
        </p>
      </div>

      <Tabs defaultValue="all" onValueChange={(value) => setFilter(value as EventType)} className="mt-12">
        <TabsList className="mx-auto flex w-full max-w-md">
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
                <Card key={event.id} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
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
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground line-clamp-2">
                      {event.description}
                    </CardDescription>
                     <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{format(parseISO(event.date), 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="link" className="mt-4 px-0">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
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
  );
}
