'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sermons as allSermons } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format, parseISO } from 'date-fns';
import { PlayCircle, Mic, User, Calendar, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function SermonsPage() {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const sortedSermons = useMemo(() => {
    return [...allSermons].sort((a, b) => {
      const dateA = parseISO(a.date).getTime();
      const dateB = parseISO(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [sortOrder]);

  return (
    <div className="bg-background">
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Sermon Archive</h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              Watch, listen, and be encouraged by messages from our past services.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <h2 className="text-2xl font-headline font-bold">All Sermons ({sortedSermons.length})</h2>
          <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
              <Select value={sortOrder} onValueChange={(value: 'newest' | 'oldest') => setSortOrder(value)}>
                <SelectTrigger className="w-[180px] bg-card">
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
              <Card key={sermon.id} className="group flex flex-col overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl bg-card">
                {sermonImage && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={sermonImage.imageUrl}
                      alt={sermon.title}
                      data-ai-hint={sermonImage.imageHint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                )}
                <CardContent className="flex flex-grow flex-col p-6">
                  <Badge variant="secondary" className="w-fit self-start">
                      <BookOpen className="mr-2 h-4 w-4" />
                      {sermon.series}
                  </Badge>
                  <h3 className="mt-4 font-headline text-xl font-bold">{sermon.title}</h3>
                  <div className="mt-4 flex-grow space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <User className="mr-2 h-4 w-4 text-primary" />
                        <span>{sermon.preacher}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        <span>{format(parseISO(sermon.date), 'MMMM d, yyyy')}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Button asChild className="flex-1">
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
    </div>
  );
}
