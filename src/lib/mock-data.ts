import type { Sermon, Ministry, Leader } from './types';
import { subDays, addDays, set } from 'date-fns';

// Helper to get the next Friday
const getNextFriday = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1, ..., Friday is 5
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
  const nextFriday = addDays(today, daysUntilFriday === 0 ? 7 : daysUntilFriday); // If today is Friday, get next Friday
  return set(nextFriday, { hours: 1, minutes: 0, seconds: 0, milliseconds: 0 });
};

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
    leader: 'Mr.Evans',
    meetingTime: 'Fridays at 7:00 PM',
    image: '/youth.jpeg',
  },
  {
    id: 3,
    name: 'Music & Worship Arts',
    description: 'Leading the congregation in worship through music, song, and creative expression.',
    leader: 'Mr.Emmanuel',
    meetingTime: 'Thursdays at 6:30 PM',
    image: '/youth.jpeg',
  },
  {
    id: 4,
    name: "Children's Ministry",
    description: 'Providing a safe and fun environment for children to learn about Jesus on their level.',
    leader: 'Sarah Brown',
    meetingTime: 'During Sunday Service',
    image: '/child.jpeg',
  },
  {
    id: 5,
    name: "Women's Ministry",
    description: 'Connecting women of all ages to grow in their faith and build lasting friendships.',
    leader: 'Jane Smith',
    meetingTime: 'First Saturday of each month',
    image: '/youth.jpeg',
  },
  {
    id: 6,
    name: "Men's Ministry",
    description: 'Challenging men to be leaders in their families, church, and community.',
    leader: 'John Doe',
    meetingTime: 'Second Saturday of each month',
    image: '/youth.jpeg',
  },
  {
    id: 7,
    name: 'Sunday School',
    description: 'In-depth bible study for all ages to deepen understanding of the Word.',
    leader: 'Sarah Brown',
    meetingTime: 'Sundays at 9:00 AM',
    image: '/youth.jpeg',
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
