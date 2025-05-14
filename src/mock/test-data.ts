import { OfferDetailsDto, OfferDto } from '../types/offer-dto';
import { UserData } from '../types/user-data';
import { CommentDto } from '../types/comment-dto';
import { CommentPostData } from '../types/comment-post-data';
import { FavoritesData } from '../types/favorites-data';
import { AuthData } from '../types/auth-data';

export const mockOffers: OfferDto[] = [
  {
    id: '1',
    title: 'Charming Studio in Paris',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Paris',
      location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 },
    },
    location: { latitude: 48.857, longitude: 2.353, zoom: 10 },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: '/images/studio.jpg',
  },
  {
    id: '2',
    title: 'Modern Loft in Cologne',
    type: 'loft',
    price: 150,
    city: {
      name: 'Cologne',
      location: { latitude: 50.9375, longitude: 6.9603, zoom: 10 },
    },
    location: { latitude: 50.938, longitude: 6.961, zoom: 10 },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: '/images/loft.jpg',
  },
];

export const loginData: AuthData = {
  email: 'test@example.com',
  password: '123456',
};

export const mockUser: UserData = {
  name: 'John',
  avatarUrl: '/avatar.jpg',
  isPro: true,
  email: loginData.email,
  token: 'fake-token',
};

export const offerId = '1';

const mockOffer: OfferDto = {
  id: '1',
  title: 'Test Offer',
  type: 'apartment',
  price: 100,
  city: { name: 'Paris', location: { latitude: 0, longitude: 0, zoom: 10 } },
  location: { latitude: 0, longitude: 0, zoom: 10 },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  previewImage: '/img.jpg',
};

export const mockDetails: OfferDetailsDto = {
  id: offerId,
  title: 'Detailed Offer',
  type: 'apartment',
  price: 120,
  city: { name: 'Paris', location: { latitude: 0, longitude: 0, zoom: 10 } },
  location: { latitude: 0, longitude: 0, zoom: 10 },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  description: 'Nice place',
  bedrooms: 2,
  goods: ['Wi-Fi'],
  host: { name: 'Host', avatarUrl: '/host.jpg', isPro: true },
  images: [],
  maxAdults: 3,
};

export const mockNearby: OfferDto[] = [
  {
    ...mockOffer,
    id: '2',
    title: 'Nearby Offer',
    previewImage: ''
  },
];

export const mockComments: CommentDto[] = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  date: `2024-01-${i + 1}`,
  user: {
    name: `User ${i + 1}`,
    avatarUrl: `/img/user${i + 1}.jpg`,
    isPro: false,
  },
  comment: `Comment ${i + 1}`,
  rating: 4,
}));

export const mockCommentPost: CommentPostData = {
  id: offerId,
  comment: 'Nice place!',
  rating: 5,
};

export const mockFavorites: OfferDto[] = [
  {
    id: '1',
    title: 'Favorite Offer',
    type: 'apartment',
    price: 100,
    city: { name: 'Paris', location: { latitude: 0, longitude: 0, zoom: 10 } },
    location: { latitude: 0, longitude: 0, zoom: 10 },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img.jpg',
  },
];

export const favoriteRequest: FavoritesData = {
  id: '1',
  status: 1,
};

export const updatedOffer: OfferDto = {
  id: '1',
  title: 'Updated Offer',
  type: 'apartment',
  price: 100,
  city: { name: 'Paris', location: { latitude: 0, longitude: 0, zoom: 10 } },
  location: { latitude: 0, longitude: 0, zoom: 10 },
  isFavorite: true,
  isPremium: false,
  rating: 4,
  previewImage: '/img.jpg',
};
