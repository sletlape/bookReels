import React from 'react';
import { render } from '@testing-library/react-native';
import LibraryScreen from './library';
import books from '../../constants/books.json';

// Mock the useRouter hook
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('LibraryScreen', () => {
  it('renders a list of books', () => {
    const { getByText } = render(<LibraryScreen />);

    // Check that the title is rendered
    expect(getByText('Your Library')).toBeTruthy();

    // Check that each book from our mock data is rendered
    books.forEach(book => {
      expect(getByText(book.title)).toBeTruthy();
      expect(getByText(book.author)).toBeTruthy();
    });
  });
});
