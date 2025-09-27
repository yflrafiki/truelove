import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ministries } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { User, Clock } from 'lucide-react';

export default function MinistriesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Our Ministries</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Find your place to connect, grow, and serve. There's a ministry for everyone at Sanctuary Hub.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {ministries.map((ministry) => {
          const ministryImage = PlaceHolderImages.find((p) => p.id === ministry.image);
          return (
            <Card key={ministry.id} className="overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-60 w-full">
                {ministryImage && (
                  <Image
                    src={ministryImage.imageUrl}
                    alt={ministry.name}
                    data-ai-hint={ministryImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-0 left-0 p-6">
                    <CardTitle className="font-headline text-3xl text-white">{ministry.name}</CardTitle>
                 </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">{ministry.description}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-primary" />
                    <span><strong>Leader:</strong> {ministry.leader}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span><strong>Meets:</strong> {ministry.meetingTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
