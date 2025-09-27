'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sermons as allSermons } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format, parseISO } from 'date-fns';
import { PlayCircle, Mic } from 'lucide-react';

export default function SermonsPage() {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const sortedSermons = useMemo(() => {
    return [...allSermons].sort((a, b) => {
      const dateA = parseISO(a.date).getTime();
      const dateB = parseISO(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [sortOrder]);

  const preachers = useMemo(() => [...new Set(allSermons.map(s => s.preacher))], []);
  const series = useMemo(() => [...new Set(allSermons.map(s => s.series))], []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Sermon Archive</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Watch, listen, and be encouraged by messages from our past services.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <h2 className="text-2xl font-headline font-bold">All Sermons</h2>
        <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <Select value={sortOrder} onValueChange={(value: 'newest' | 'oldest') => setSortOrder(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sortedSermons.map((sermon) => {
          const sermonImage = PlaceHolderImages.find((p) => p.id === sermon.thumbnail);
          return (
            <Card key={sermon.id} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
              {sermonImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={sermonImage.imageUrl}
                    alt={sermon.title}
                    data-ai-hint={sermonImage.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary">{sermon.series}</p>
                <h3 className="mt-2 font-headline text-xl font-bold">{sermon.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {sermon.preacher} &bull; {format(parseISO(sermon.date), 'MMMM d, yyyy')}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button asChild variant="outline" className="flex-1">
                    <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="mr-2" /> Watch
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={sermon.audioUrl} target="_blank" rel="noopener noreferrer">
                      <Mic className="mr-2" /> Listen
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
