# Technical Implementation Plan: BookReels

## 1. Overview

This document outlines the technical approach for building the BookReels application, based on the functional requirements in `spec.md` and the principles in `constitution.md`.

## 2. Project Structure

The project will follow a standard Expo Router and component-based structure:

```
BookReels/
├── app/
│   ├── (auth)/
│   │   ├── _layout.tsx      # Stack layout for auth screens
│   │   ├── login.tsx        # Login screen
│   │   └── register.tsx     # Registration screen
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab layout for main app
│   │   ├── home.tsx         # Home screen (reels)
│   │   ├── library.tsx      # Library screen
│   │   └── profile.tsx      # Profile screen
│   ├── _layout.tsx          # Root layout
│   └── index.tsx            # Entry point (handles auth redirect)
├── components/
│   ├── auth/              # Components for auth screens (e.g., StyledTextInput)
│   ├── home/              # Components for home screen (e.g., BookReelItem, CommentOverlay)
│   ├── library/           # Components for library (e.g., BookCard)
│   └── shared/            # Common components (e.g., Button, Badge)
├── constants/
│   ├── books.json         # Mock data for books and sections
│   ├── users.json         # Mock data for user profiles
│   └── comments.json      # Mock data for comments
├── context/
│   └── AuthContext.tsx    # React Context for managing auth state
└── ... (config files)
```

## 3. Technology Stack & Configuration

- **Expo (SDK 51):** The project will be initialized using `npx create-expo-app` with the "Tabs" template to provide a baseline navigation structure.
- **TypeScript:** Strict mode will be enabled in `tsconfig.json` to enforce strong typing.
- **Expo Router:** File-based routing will be used to manage navigation between screens. Layout routes (`_layout.tsx`) will define the navigation structure (stacks and tabs).
- **NativeWind:** Tailwind CSS classes will be used for all styling. The `tailwind.config.js` file will be configured to scan all necessary source files.

## 4. Component Breakdown

### Authentication (`/components/auth`)
- `StyledTextInput`: A reusable text input component with consistent styling.
- `AuthButton`: A primary button for login/registration forms.

### Home Screen (`/components/home`)
- `BookReelList`: A FlatList or similar component to render the vertical reel of book sections.
- `BookReelItem`: A component to display a single book section with its interaction bar.
- `CommentOverlay`: A bottom sheet component to display comments, expandable to full screen.

### Library (`/components/library`)
- `BookCard`: A component to display a book's cover, title, author, and progress.

### Shared (`/components/shared`)
- `Badge`: A component to display user achievements on the profile screen.

## 5. Data Models (TypeScript Interfaces)

The following interfaces will be defined to ensure type-safe handling of our mock data:

```typescript
// in a new types/index.ts file

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
```

## 6. State Management

- **Authentication State:** A React Context (`AuthContext`) will be implemented to manage the user's authentication status (logged in/out) and provide this state to the rest of the application. The root layout (`app/_layout.tsx`) will use this context to determine whether to show the auth screens or the main app tabs.
- **Local State:** Component-level state will be managed using `useState` and `useReducer` hooks for UI interactions.

## 7. Implementation Order

1.  **Project Setup:** Initialize the Expo project and install dependencies (NativeWind, etc.).
2.  **Mock Data & Types:** Create the `.json` files and define the TypeScript interfaces.
3.  **Authentication Flow:** Build the `(auth)` screens and the `AuthContext`.
4.  **Tab Navigation:** Set up the `(tabs)` layout and placeholder screens.
5.  **Home Screen:** Implement the core "reel" reading experience.
6.  **Library Screen:** Build the book list display.
7.  **Profile Screen:** Implement the user profile view.
8.  **Testing:** Add unit tests for critical components and logic.
