import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('TrustIndex Application', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('Profile component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const profile = getByTestId('userProfile');
    expect(profile).toBeInTheDocument();
  });

  test('PublicStance component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const publicStance = getByTestId('publicStance');
    expect(publicStance).toBeInTheDocument();
  });

  test('Review component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const review = getByTestId('userReview');
    expect(review).toBeInTheDocument();
  });

  test('Rating component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const rating = getByTestId('userRating');
    expect(rating).toBeInTheDocument();
  });

  test('Search component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const search = getByTestId('searchInput');
    expect(search).toBeInTheDocument();
  });

  test('Filter component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const filter = getByTestId('filterInput');
    expect(filter).toBeInTheDocument();
  });

  test('Flag component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const flag = getByTestId('flagReport');
    expect(flag).toBeInTheDocument();
  });

  test('ModerationQueue component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const moderationQueue = getByTestId('moderationQueue');
    expect(moderationQueue).toBeInTheDocument();
  });

  test('PrivacyControls component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const privacyControls = getByTestId('privacyControls');
    expect(privacyControls).toBeInTheDocument();
  });

  test('Accessibility component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const accessibility = getByTestId('accessibilityControls');
    expect(accessibility).toBeInTheDocument();
  });

  test('UIUXDesign component renders correctly', () => {
    const { getByTestId } = render(<App />);
    const uiDesign = getByTestId('uiDesign');
    expect(uiDesign).toBeInTheDocument();
  });
});