import React from 'react';
import { render } from '@testing-library/react-native';
import BookReelList from './BookReelList';
import books from '../../constants/books.json';

describe('BookReelList', () => {
  it('renders a list of book sections', () => {
    const sections = books[0].sections;
    const { getByText } = render(<BookReelList sections={sections} />);

    // Check that each section's content is rendered
    sections.forEach(section => {
      expect(getByText(section.content)).toBeTruthy();
    });
  });
});
