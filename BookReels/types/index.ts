export interface Section {
  id: string;
  content: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  sections: Section[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  streak: number;
  progress: {
    bookId: string;
    lastSectionId: string;
    percentage: number;
  }[];
}

export interface Comment {
  id: string;
  sectionId: string;
  userId: string;
  content: string;
  parentId?: string; // For threaded replies
}
