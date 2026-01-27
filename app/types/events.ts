export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  details: string;
  duration: {
    start: string;
    end: string;
  };
  mode: "online" | "offline" | "mixed";
  onlineLink?: string;
}

export interface EventData {
  year: string;
  title: string;
  description: string;
  date: string;
  image: string;
  details: string;
}
