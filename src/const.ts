export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const STAR_RATINGS = [5, 4, 3, 2, 1] as const;

export const RATING_MULTIPLIER = 100 / STAR_RATINGS.length;

export const NEARBY_OFFERS_COUNT = 3;

export const URL_MARKER_DEFAULT = 'public/img/pin.svg';

export const URL_MARKER_CURRENT = 'public/img/pin-active.svg';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Sorting {
  Default = 'Popular',
  LowPrice = 'Price: low to high',
  HighPrice = 'Price: high to low',
  TopRated = 'Top rated first'
}

export enum APIRoute {
  Offers = '/offers',
  Offer = '/offers/:id',
  Nearby = '/offers/:id/nearby',

  Favorite = '/favorite',
  ChangeFavorite = '/favorite/:id/:status',

  Comments = '/comments/:id',

  Login = '/login',
  Logout = '/logout',
}
