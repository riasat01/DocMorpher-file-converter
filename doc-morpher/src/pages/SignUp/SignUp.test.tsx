// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { createMockInstance } from '@shopify/jest-dom-mocks';
// import useAuth from '../../custom-hooks/use-auth/useAuth';
// import useAxiosPublic from '../../custom-hooks/use-axios-public/useAxiosPublic';
// import SignUp from './SignUp';

// jest.mock('../../custom-hooks/use-auth/useAuth');
// jest.mock('../../custom-hooks/use-axios-public/useAxiosPublic');

// describe('SignUp component', () => {
//   test('renders the sign-up form', () => {
//     const mockUseAuth = createMockInstance(useAuth);
//     const mockUseAxiosPublic = createMockInstance(useAxiosPublic);

//     mockUseAuth.mockReturnValue({
//       createEmailPasswordUser: jest.fn().mockResolvedValue(true),
//       setUserInfo: jest.fn().mockResolvedValue(true),
//     });

//     mockUseAxiosPublic.mockReturnValue({
//       post: jest.fn().mockResolvedValue({ data: 'success' }),
//     });

//     render(<SignUp />);

//     const heading = screen.getByText('Registration now!');
//     const nameInput = screen.getByLabelText('Name');
//     const photoURLInput = screen.getByLabelText('PhotoURL');
//     const emailInput = screen.getByLabelText('Email');
//     const passwordInput = screen.getByLabelText('Password');
//     const submitButton = screen.getByRole('button', { name: /sign up/i });

//     expect(heading).toBeInTheDocument();
//     expect(nameInput).toBeInTheDocument();
//     expect(photoURLInput).toBeInTheDocument();
//     expect(emailInput).toBeInTheDocument();
//     expect(passwordInput).toBeInTheDocument();
//     expect(submitButton).toBeInTheDocument();
//   });

//   test('handles form submission with valid data', async () => {
//     const mockUseAuth = createMockInstance(useAuth);
//     const mockUseAxiosPublic = createMockInstance(useAxiosPublic);

//     mockUseAuth.mockReturnValue({
//       createEmailPasswordUser: jest.fn().mockResolvedValue(true),
//       setUserInfo: jest.fn().mockResolvedValue(true),
//     });

//     mockUseAxiosPublic.mockReturnValue({
//       post: jest.fn().mockResolvedValue({ data: 'success' }),
//     });

//     render(<SignUp />);

//     const name = 'Test User';
//     const photoURL = 'https://example.com/photo.jpg';
//     const email = 'test@example.com';
//     const password = 'Password123!';

//     userEvent.type(screen.getByLabelText('Name'), name);
//     userEvent.type(screen.getByLabelText('PhotoURL'), photoURL);
//     userEvent.type(screen.getByLabelText('Email'), email);
//     userEvent.type(screen.getByLabelText('Password'), password);
//     userEvent.click(screen.getByRole('button', { name: /sign up/i }));

//     await waitFor(() => {
//       expect(mockUseAuth.createEmailPasswordUser).toHaveBeenCalledWith(email, password);
//       expect(mockUseAuth.setUserInfo).toHaveBeenCalledWith(name, photoURL);
//       expect(mockUseAxiosPublic.post).toHaveBeenCalledWith('/user', {
//         name,
//         email,
//         photoURL,
//         type: 'normal',
//       });
//       expect(screen.getByText('Successfully Signed up!!')).toBeInTheDocument();
//     });
//   });

//   test('handles password validation errors', () => {
//     render(<SignUp />);

//     // Test for each password validation error
//     // ...

//     // Example for minimum length
//     userEvent.type(screen.getByLabelText('Password'), 'short');
//     userEvent.click(screen.getByRole('button', { name: /sign up/i }));
//     expect(screen.getByText('At least 6 characters')).toBeInTheDocument();
//   });

//   // Add more tests for error handling, navigation, etc.
// });
