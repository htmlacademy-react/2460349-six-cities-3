import apartment01 from './../../../markup/img/apartment-01.jpg';

export const mockAmenities: string[] = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];
export const mockImages: string[] = [apartment01, apartment01, apartment01, apartment01, apartment01, apartment01];

export type CardProps = {
  id?: string;
  title: string;
  type: string;
  price: number;
  // city: {
  // name: string;
  // location: {
  // latitude: number;
  // longitude: number;
  // zoom: number;
  // };
  // };
  // location: {
  // latitude: number;
  // longitude: number;
  // zoom: number;
  // };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export const mockCards: CardProps[] = [
  {
    id: '1a9e6bed-2c8e-456e-bee4-72a72f2c4546',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 365,
    previewImage: apartment01,
    // city: {
    //   name: 'Paris',
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
    // },
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
    // city: {
    //   name: 'Paris',
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
    // },
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
    // city: {
    //   name: 'Paris',
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
    // },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
  },
  {
    id: 'a87672e1-aa6b-475d-86d2-a87f1eae1399',
    title: 'House in countryside',
    type: 'apartment',
    price: 366,
    previewImage: apartment01,
    // city: {
    //   name: 'Paris',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13,
    //   },
    // },
    // location: {
    //   latitude: 48.85761,
    //   longitude: 2.358499,
    //   zoom: 16,
    // },
    isFavorite: true,
    isPremium: false,
    rating: 2.5,
  },
  {
    id: 'd217ddb3-88c8-401f-b89d-f4eecc41d107',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 796,
    previewImage: apartment01,
    // city: {
    //   name: 'Paris',
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
    // },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
  },
];
