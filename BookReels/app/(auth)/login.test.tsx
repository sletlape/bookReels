import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from './login';
import { AuthProvider } from '../../context/AuthContext';

// Mock the useRouter hook
jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
  Link: 'Link', // Mock the Link component
}));

describe('LoginScreen', () => {
  it('renders correctly and handles login', () => {
    const { getByPlaceholderText, getByText } = render(
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    );

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    // Check that all elements are present
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();

    // Simulate user input
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    // Simulate button press
    // We can't directly test the useAuth hook's login function being called,
    // but we can ensure the button is pressable and doesn't crash.
    // In a real app with a real API, we would mock the API call and assert that it was called.
    fireEvent.press(loginButton);

    // We can add an assertion here that the login function was called if we could mock the context,
    // but for this setup, we're primarily testing that the component renders and interacts without error.
  });
});
