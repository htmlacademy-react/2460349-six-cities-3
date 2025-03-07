import apartment01 from './../../../markup/img/apartment-01.jpg';
import avatarangelina from './../../../markup/img/avatar-angelina.jpg';
import { OfferDetailsDto } from '../../types/types';

export const mockImages: string[] = [apartment01, apartment01, apartment01, apartment01, apartment01, apartment01];

export const mockAmenities: string[] = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];

export const mockOffersDetails: OfferDetailsDto[] = [
  {
    id: '1a9e6bed-2c8e-456e-bee4-72a72f2c4546',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 365,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8,
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: mockAmenities,
    host: {
      name: 'Oliver Conner',
      avatarUrl: avatarangelina,
      isPro: false
    },
    images: mockImages,
    maxAdults: 2
  },
  {
    id: '752ca7b8-356e-4ed7-9fd4-e7215fe43d78',
    title: 'House in countryside',
    type: 'hotel',
    price: 272,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.5,
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 5,
    goods: mockAmenities.slice(0,5),
    host: {
      name: 'Appa Conner',
      avatarUrl: avatarangelina,
      isPro: false
    },
    images: mockImages,
    maxAdults: 6
  },
  {
    id: 'beec4add-e938-4413-959e-7511f2e6d121',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 146,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: mockAmenities.slice(4,8),
    host: {
      name: 'Rina Yu',
      avatarUrl: avatarangelina,
      isPro: true
    },
    images: mockImages,
    maxAdults: 4
  },
  {
    id: 'd217ddb3-88c8-401f-b89d-f4eecc41d107',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 796,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: mockAmenities.slice(6),
    host: {
      name: 'Oliver Yar',
      avatarUrl: avatarangelina,
      isPro: true
    },
    images: mockImages,
    maxAdults: 8
  },
];

