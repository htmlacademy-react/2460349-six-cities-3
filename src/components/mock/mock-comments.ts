import avatarangelina from './../../../markup/img/avatar-angelina.jpg';
import { CommentDto } from '../../types/types';

export const mockComments: CommentDto[] = [
  {
    id: '1a9e6bed-2c8e-456e-bee4-72a72f2c4546',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver',
      avatarUrl: avatarangelina,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 1
  },
  {
    id: '752ca7b8-356e-4ed7-9fd4-e7215fe43d78',
    date: '2019-06-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: avatarangelina,
      isPro: true
    },
    comment: 'A quiet cozy ',
    rating: 5
  },
  {
    id: 'beec4add-e938-4413-959e-7511f2e6d121',
    date: '2022-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: avatarangelina,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'd217ddb3-88c8-401f-b89d-f4eecc41d107',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Ol Conner',
      avatarUrl: avatarangelina,
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 1
  },
];
