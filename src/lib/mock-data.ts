import type { Event, Sermon, Ministry, Leader } from './types';
import { subDays, addDays } from 'date-fns';

export const events: Event[] = [
  {
    id: 1,
    title: 'Sunday Worship Service',
    date: new Date().toISOString(),
    location: 'Main Sanctuary',
    description: 'Join us for our weekly worship service with music and a powerful message.',
    image: 'event1',
    type: 'service',
  },
  {
    id: 2,
    title: 'Community Food Drive',
    date: addDays(new Date(), 5).toISOString(),
    location: 'Church Parking Lot',
    description: 'Help us support local families in need by donating non-perishable food items.',
    image: 'event2',
    type: 'ministry',
  },
  {
    id: 3,
    title: 'Youth Group Movie Night',
    date: addDays(new Date(), 12).toISOString(),
    location: 'Youth Hall',
    description: 'A fun night for our youth group with a movie, popcorn, and games.',
    image: 'event3',
    type: 'ministry',
  },
  {
    id: 4,
    title: 'Easter Celebration',
    date: addDays(new Date(), 25).toISOString(),
    location: 'Main Sanctuary',
    description: 'Celebrate the resurrection of Jesus with special music and a message of hope.',
    image: 'event1',
    type: 'special',
  },
];

export const featuredEvents = events.slice(0, 3);

export const sermons: Sermon[] = [
  {
    id: 1,
    title: 'The Power of Forgiveness',
    preacher: 'Pastor John Doe',
    series: 'Foundations of Faith',
    date: new Date().toISOString(),
    videoUrl: '#',
    audioUrl: '#',
    thumbnail: 'sermon1',
  },
  {
    id: 2,
    title: 'Living with Purpose',
    preacher: 'Pastor John Doe',
    series: 'Foundations of Faith',
    date: subDays(new Date(), 7).toISOString(),
    videoUrl: '#',
    audioUrl: '#',
    thumbnail: 'sermon2',
  },
  {
    id: 3,
    title: 'Love Your Neighbor',
    preacher: 'Pastor Jane Smith',
    series: 'Guest Speakers',
    date: subDays(new Date(), 14).toISOString(),
    videoUrl: '#',
    audioUrl: '#',
    thumbnail: 'sermon3',
  },
  {
    id: 4,
    title: 'Finding Peace in Chaos',
    preacher: 'Pastor John Doe',
    series: 'Life Application',
    date: subDays(new Date(), 21).toISOString(),
    videoUrl: '#',
    audioUrl: '#',
    thumbnail: 'sermon1',
  },
    {
    id: 5,
    title: 'A Faith That Moves Mountains',
    preacher: 'Pastor John Doe',
    series: 'Foundations of Faith',
    date: subDays(new Date(), 28).toISOString(),
    videoUrl: '#',
    audioUrl: '#',
    thumbnail: 'sermon2',
  },
];

export const ministries: Ministry[] = [
  {
    id: 1,
    name: 'Youth Ministry',
    description: 'Engaging our teens with the gospel through fun activities, worship, and small group discussions.',
    leader: 'Michael Chen',
    meetingTime: 'Fridays at 7:00 PM',
    image: 'ministry_youth',
  },
  {
    id: 3,
    name: 'Music & Worship Arts',
    description: 'Leading the congregation in worship through music, song, and creative expression.',
    leader: 'Emily White',
    meetingTime: 'Thursdays at 6:30 PM',
    image: 'ministry_music',
  },
  {
    id: 4,
    name: 'Children\'s Ministry',
    description: 'Providing a safe and fun environment for children to learn about Jesus on their level.',
    leader: 'Sarah Brown',
    meetingTime: 'During Sunday Service',
    image: 'ministry_children',
  },
];

export const leaders: Leader[] = [
  {
    id: 1,
    name: 'Pastor John Doe',
    title: 'Senior Pastor',
    bio: 'Pastor John has been leading Sanctuary Hub for over 15 years, with a passion for teaching the Word of God and helping people grow in their faith. He and his wife, Mary, have three children.',
    photo: 'leader1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Associate Pastor & Outreach Director',
    bio: 'Jane oversees our community outreach programs and often speaks on Sundays. She is dedicated to putting faith into action and serving the needs of our city.',
    photo: 'leader2',
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Associate Pastor',
    bio: 'Michael has a heart for the next generation. He creates a dynamic and welcoming environment for teenagers to connect with God and with each other.',
    photo: 'leader3',
  },
  {
    id: 4,
    name: 'Emily White',
    title: 'Music Director',
    bio: 'Emily leads our talented worship team. Her goal is to create an atmosphere where the congregation can connect with God through music and praise.',
    photo: 'leader4',
  },
];
