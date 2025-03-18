export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  type: "text" | "file";
  fileName?: string;
}

export interface User {
  id: string;
  name: string;
  subtitle: string;
  avatar: string;
  messages: Message[];
}

export const users: User[] = [
  {
    id: "1",
    name: "Justin Alex",
    subtitle: "Hello Breezeway Coaching",
    avatar: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: "1",
        senderId: "1",
        receiverId: "me",
        content: "Hello Breezeway Coaching",
        timestamp: new Date("2024-01-22T10:00:00"),
        type: "text",
      },
      {
        id: "2",
        senderId: "me",
        receiverId: "1",
        content: "Hi Justin! How can I help you today?",
        timestamp: new Date("2024-01-22T10:01:00"),
        type: "text",
      },
    ],
  },
  {
    id: "2",
    name: "Vipul  Yadav",
    subtitle: "I wanted to book an appointment",
    avatar: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: "3",
        senderId: "2",
        receiverId: "me",
        content: "I wanted to book an appointment",
        timestamp: new Date("2024-01-22T09:30:00"),
        type: "text",
      },
    ],
  },
  {
    id: "3",
    name: "Sagar",
    subtitle: "Can I get some discounts?",
    avatar: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: "4",
        senderId: "3",
        receiverId: "me",
        content: "Can I get some discounts?",
        timestamp: new Date("2024-01-22T09:00:00"),
        type: "text",
      },
    ],
  },
];
