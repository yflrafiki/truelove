import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { leaders } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building, Users } from 'lucide-react';

export default function AboutPage() {
  const historyImage = PlaceHolderImages.find(p => p.id === 'about-history');

  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">About True love Assemblies of God</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Learn about our story, our values, and the people who lead our community.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {historyImage && (
              <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={historyImage.imageUrl}
                  alt={historyImage.description}
                  data-ai-hint={historyImage.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="prose prose-lg max-w-none text-muted-foreground">
                <div className="flex items-center gap-4">
                    <Building className="h-10 w-10 text-primary"/>
                    <h2 className="font-headline text-3xl font-bold text-foreground">Our History</h2>
                </div>
                <p>
                    Founded in 1958, True love Assemblies of God began as a small prayer group meeting in a community hall. With a heart for the city and a passion for the Gospel, our founders envisioned a place where people from all walks of life could find a spiritual home. Through decades of growth and change, our core mission has remained the same: to be a beacon of hope and a center for compassionate service.
                </p>
                <p>
                    Today, we are a vibrant, multi-generational church that continues to build on this legacy of faith and community.
                </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
                <Users className="h-10 w-10 text-primary"/>
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Leadership</h2>
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Meet the dedicated team that guides our church family.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => {
              const leaderImage = PlaceHolderImages.find((p) => p.id === leader.photo);
              return (
                <Card key={leader.id} className="transform text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardHeader className="p-0">
                    {leaderImage && (
                      <div className="relative mx-auto h-40 w-full overflow-hidden rounded-t-lg">
                        <Image
                          src={leaderImage.imageUrl}
                          alt={leader.name}
                          data-ai-hint={leaderImage.imageHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{leader.name}</CardTitle>
                    <p className="text-sm font-medium text-primary">{leader.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{leader.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
