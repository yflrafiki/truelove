import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ministries } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { User, Clock } from 'lucide-react';

export default function MinistriesPage() {
  return (
    <div className="bg-background">
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Our Ministries</h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              Find your place to connect, grow, and serve. There's a ministry for everyone at Sanctuary Hub.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => {
            const ministryImage = PlaceHolderImages.find((p) => p.id === ministry.image);
            return (
              <Card key={ministry.id} className="group overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl bg-card">
                <div className="relative h-64 w-full overflow-hidden">
                  {ministryImage && (
                    <Image
                      src={ministryImage.imageUrl}
                      alt={ministry.name}
                      data-ai-hint={ministryImage.imageHint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                   <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="font-headline text-3xl font-bold text-white drop-shadow-md">{ministry.name}</h3>
                   </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{ministry.description}</p>
                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <User className="mr-3 h-5 w-5 text-primary" />
                      <span><strong>Leader:</strong> {ministry.leader}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-3 h-5 w-5 text-primary" />
                      <span><strong>Meets:</strong> {ministry.meetingTime}</span>
                    </div>
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
