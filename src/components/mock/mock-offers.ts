import { OfferDto } from '../../types/types';
import apartment01 from './../../../markup/img/apartment-01.jpg';

export const mockOffers: OfferDto[] = [
  {
    id: '1a9e6bed-2c8e-456e-bee4-72a72f2c4546',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 365,
    previewImage: apartment01,
    city: {
      name: 'Paris',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13,
    //   },
    // },
    // location: {
    //   latitude: 48.868610000000004,
    //   longitude: 2.342499,
    //   zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8,
  },
  {
    id: '752ca7b8-356e-4ed7-9fd4-e7215fe43d78',
    title: 'House in countryside',
    type: 'hotel',
    price: 272,
    previewImage: apartment01,
    city: {
      name: 'Paris',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13,
    //   },
    // },
    // location: {
    //   latitude: 48.858610000000006,
    //   longitude: 2.330499,
    //   zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.5,
  },
  {
    id: 'beec4add-e938-4413-959e-7511f2e6d121',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 146,
    previewImage: apartment01,
    city: {
      name: 'Paris',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13,
    //   },
    // },
    // location: {
    //   latitude: 48.834610000000005,
    //   longitude: 2.335499,
    //   zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
  },
  {
    id: 'd217ddb3-88c8-401f-b89d-f4eecc41d107',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 796,
    previewImage: apartment01,
    city: {
      name: 'Amsterdam',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13,
    //   },
    // },
    // location: {
    //   latitude: 48.87561,
    //   longitude: 2.375499,
    //   zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
  },
];

