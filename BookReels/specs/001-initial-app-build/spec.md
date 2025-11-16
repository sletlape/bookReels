# Specification: Initial App Build for BookReels

## 1. Overview

This document specifies the functional requirements for the initial build of the BookReels mobile application. The app will provide a platform for users to read books in a "reel" format, engage with content, and track their progress.

## 2. User Stories

### User Story 1: User Authentication

**As a new user, I want to be able to create an account and log in, so that I can access the app's features and save my progress.**

- **[US1.1] Welcome Screen:**
  - The app shall display a visually appealing welcome screen.
  - The screen will feature the app logo and name ("BookReels" or similar).
  - It must provide clear options to "Log In" or "Create Account".

- **[US1.2] User Registration:**
  - Users shall be able to register using an email and password.
  - The registration form will require a username, email, and password.
  - Basic input validation will be performed on the client-side.

- **[US1.3] User Login:**
  - Registered users shall be able to log in with their email and password.
  - Upon successful login, the user shall be redirected to the Home screen.

### User Story 2: Home Screen & Reading Experience

**As a logged-in user, I want to see my reading progress and continue reading from where I left off, so that I can easily stay engaged with my books.**

- **[US2.1] Home Screen Display:**
  - The Home screen will display the user's current reading streak (e.g., "15 days").
  - It will also show the title of the last book the user was reading.
  - The main content area will display the last read section/paragraph of that book.

- **[US2.2] Reel-Style Navigation:**
  - Users can swipe up to navigate to the next section/paragraph of the book.
  - Users can swipe down to navigate to the previous section.
  - The transitions must be smooth and responsive.

- **[US2.3] Interaction Bar:**
  - Each section "reel" will have an interaction bar with icons for:
    - Liking the section.
    - Commenting on the section.
    - Bookmarking the section.

### User Story 3: Commenting on a Section

**As a logged-in user, I want to comment on a book section and reply to others' comments, so that I can engage in discussions about the content.**

- **[US3.1] View Comments:**
  - Tapping the comment icon will open a partial screen overlay from the bottom.
  - This overlay will display a list of existing comments for that section.

- **[US3.2] Full-Screen Comments:**
  - Swiping up on the partial overlay will expand it to a full-screen view.
  - The full-screen view will allow for easier reading and interaction with a large number of comments.

- **[US3.3] Add a Comment:**
  - Users can add their own comments to the section.
  - Users can also reply to existing comments, creating threaded discussions.

### User Story 4: Library Management

**As a logged-in user, I want to see all the books I have access to and my progress in each, so that I can easily choose what to read.**

- **[US4.1] Library Display:**
  - The Library screen will display a grid or list of book covers.
  - Each book entry will show the book's title, author, and the user's reading progress (e.g., as a percentage).

- **[US4.2] Book Selection:**
  - Tapping on a book will navigate the user to the reading interface for that book, starting from their last read position.

### User Story 5: User Profile

**As a logged-in user, I want to view my profile to see my achievements and overall progress, so that I can feel a sense of accomplishment.**

- **[US5.1] Profile Information:**
  - The Profile screen will display the user's avatar and username.
  - It will prominently feature the user's reading streak and overall progress percentage.

- **[US5.2] Badges/Achievements:**
  - A section of the profile will be dedicated to displaying badges earned by the user (e.g., "Early Bird," "Consistent Reader").
  - These badges will be visually represented as icons.

## 3. Data Requirements

- **Books:** Each book will have a title, author, cover image URL, and a list of sections (paragraphs).
- **Users:** Each user will have a username, email, avatar URL, reading streak, and progress data.
- **Comments:** Each comment will be linked to a book section and a user, and can have replies.
- **Mock Data:** All data for the initial build will be sourced from local JSON files to simulate API calls.
