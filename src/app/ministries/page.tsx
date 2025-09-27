import Image from 'next/image';
import { ministries } from '@/lib/mock-data';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
import { User, Clock, Handshake, Church } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MinistriesPage() {
  return (
    <div className="bg-background">
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
             <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Handshake className="h-10 w-10 text-primary"/>
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Our Ministries</h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              Find your place to connect, grow, and serve. There's a ministry for everyone at True love Assemblies of God.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 space-y-24">
          {ministries.map((ministry, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <section key={ministry.id} className="grid items-center gap-12 md:grid-cols-2">
                <div className={cn("relative h-[450px] w-full overflow-hidden rounded-lg shadow-2xl", isReversed && "md:order-last")}>
                    <Image
                    src={ministry.image}
                    alt={ministry.name}
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <Church className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="font-headline text-4xl font-bold text-foreground">{ministry.name}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">{ministry.description}</p>
                    <div className="space-y-4 rounded-lg border bg-secondary/50 p-6">
                        <div className="flex items-center text-foreground">
                            <User className="mr-4 h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold">Leader</p>
                                <p className="text-muted-foreground">{ministry.leader}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-foreground">
                            <Clock className="mr-4 h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold">Meeting Time</p>
                                <p className="text-muted-foreground">{ministry.meetingTime}</p>
                            </div>
                        </div>
                  </div>
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
}
