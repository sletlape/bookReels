# Actionable Tasks for BookReels Implementation

This document breaks down the development of the BookReels application into a series of sequential and parallelizable tasks, derived from the `plan.md`.

---

### **Phase 1: Project Initialization & Foundation**

*   **[T1.1]** Initialize a new Expo (SDK 51) project using the "Tabs" template.
*   **[T1.2]** Install and configure NativeWind for Tailwind CSS support.
*   **[T1.3]** Create the `constants` directory.
*   **[T1.4]** Create the mock data files: `books.json`, `users.json`, and `comments.json`.
*   **[T1.5]** Create a `types` directory and define all necessary TypeScript interfaces (`Book`, `User`, `Comment`, `Section`).

---

### **Phase 2: Authentication Flow (User Story 1)**

*   **[T2.1]** Create the `context/AuthContext.tsx` file to manage user authentication state.
*   **[T2.2]** Implement the root layout (`app/_layout.tsx`) to use the `AuthContext` and manage the redirect logic between auth and app screens.
*   **[T2.3]** Create the authentication layout `app/(auth)/_layout.tsx` to define the stack navigator for login and register screens.
*   **[T2.4]** Build the UI for the `app/(auth)/login.tsx` screen.
*   **[T2.5]** Build the UI for the `app/(auth)/register.tsx` screen.
*   **[T2.6]** Create reusable components for the auth flow in `components/auth/` (e.g., `StyledTextInput`, `AuthButton`).
*   **[T2.7]** Write a unit test for the `AuthContext` to verify login/logout logic.

---

### **Phase 3: Main Application Shell (Tabs)**

*   **[T3.1]** Create the main tab layout in `app/(tabs)/_layout.tsx`.
*   **[T3.2]** Configure the three main tabs: Home, Library, and Profile, with appropriate icons.
*   **[T3.3]** Ensure navigation between the tabs is functional.

---

### **Phase 4: Home Screen & Reading Experience (User Story 2)**

*   **[T4.1]** Build the main UI layout for the `app/(tabs)/home.tsx` screen.
*   **[T4.2]** Create the `BookReelList` component in `components/home/` to manage the vertical swiping list.
*   **[T4.3]** Create the `BookReelItem` component to display a single section of a book, including the interaction bar.
*   **[T4.4]** Implement the logic to fetch and display book sections from the mock data.
*   **[T4.5]** [P] Implement the "like" and "bookmark" button functionality (state change only).

---

### **Phase 5: Commenting System (User Story 3)**

*   **[T5.1]** Create the `CommentOverlay` component in `components/home/`.
*   **[T5.2]** Implement the component as a partial overlay that appears when the comment icon is tapped.
*   **[T5.3]** Implement the logic to expand the overlay to a full-screen view on swipe.
*   **[T5.4]** Display comments from the mock data, including threaded replies.
*   **[T5.5]** Add functionality to post a new comment.

---

### **Phase 6: Library Screen (User Story 4)**

*   **[T6.1]** Build the UI for the `app/(tabs)/library.tsx` screen.
*   **[T6.2]** Create the `BookCard` component in `components/library/` to display book information and progress.
*   **[T6.3]** Fetch and display the list of all books from the mock data.
*   **[T6.4]** Implement the navigation from a `BookCard` to the home/reading screen for that specific book.

---

### **Phase 7: Profile Screen (User Story 5)**

*   **[T7.1]** Build the UI for the `app/(tabs)/profile.tsx` screen, displaying user avatar, name, streak, and progress.
*   **[T7.2]** Create the `Badge` component in `components/shared/`.
*   **[T7.3]** Fetch and display the user's earned badges from the mock data.

---

### **Phase 8: Finalization & Testing**

*   **[T8.1]** Review the entire application for UI consistency and adherence to the mockups.
*   **[T8.2]** Add any remaining unit tests for critical business logic.
*   **[T8.3]** Perform a final end-to-end test of all user stories.
