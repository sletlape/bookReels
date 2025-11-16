# BookReels Project Constitution

## 1. Core Mission

To create an intuitive, engaging, and user-friendly mobile application named "BookReels." The app will blend the immersive experience of reading with the interactive, community-driven features of modern social media, allowing users to read book sections as "reels," comment, and engage in discussions.

## 2. Guiding Principles

- **User-Centric Design:** The user experience is paramount. Every feature and interaction should be designed to be intuitive, responsive, and seamless, adhering closely to the provided UI mockups.
- **Scalability and Maintainability:** The codebase will be structured to support future growth, including the transition from mock data to a live API and the addition of new features. Code should be clean, modular, and well-documented.
- **Spec-Driven Development:** We will adhere strictly to the `spec-kit` methodology. All development will be guided by detailed, pre-defined specifications to ensure predictable outcomes and alignment with the project vision.

## 3. Technology Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS for React Native)
- **Routing:** Expo Router
- **Data (Initial):** Mock data will be stored in structured JSON files to simulate API responses.

## 4. UI/UX Standards

- **Visual Consistency:** The application will implement the dark-mode aesthetic shown in the mockups. All components, screens, and interactions must align with this visual identity.
- **Core Interactions:**
    - **Reel Navigation:** The primary reading interface will use a vertical swipe gesture (swipe up for the next section, swipe down for the previous), which must be smooth and performant.
    - **Commenting:** The commenting interface will be initiated via a partial screen overlay that can be expanded to a full screen, providing a non-disruptive user flow.

## 5. Coding and Quality Standards

- **Component-Based Architecture:** The UI will be built using reusable, functional components with React Hooks.
- **Type Safety:** TypeScript will be used to enforce type safety and reduce runtime errors.
- **Testing:** A test-driven development (TDD) approach is preferred. Unit tests will be written for key components and business logic to ensure reliability.
- **Version Control:** All code changes will be managed through Git, with clear and descriptive commit messages.

## 6. Governance

This constitution is the foundational document for the BookReels project. All subsequent specifications (`spec.md`), plans (`plan.md`), and implementations must adhere to the principles outlined here. Any proposed deviation must be discussed and explicitly approved.
