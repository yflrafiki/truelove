export interface NavLink {
  href: string;
  label: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  type: 'service' | 'ministry' | 'special';
}

export interface Sermon {
  id: number;
  title: string;
  preacher: string;
  series: string;
  date: string;
  videoUrl: string;
  audioUrl: string;
  thumbnail: string;
}

export interface Ministry {
  id: number;
  name: string;
  description: string;
  leader: string;
  meetingTime: string;
  image: string;
}

export interface Leader {
  id: number;
  name: string;
  title: string;
  bio: string;
  photo: string;
}
