import { checkAuth, fetchFavoriteOffers, fetchOfferComments, fetchOffers, fetchOffer, login, logout, sendComment, toggleFavoriteStatus } from './api-actions';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/state';
import { Action, AnyAction } from 'redux';
import { APIRoute, AuthorizationStatus } from '../const';
import { mockUser, offerId, mockDetails, mockNearby, mockComments, mockCommentPost, mockFavorites, favoriteRequest, updatedOffer, loginData, mockOffers } from '../mock/test-data';

type AppDispatch = ThunkDispatch<RootState, ReturnType<typeof createAPI>, AnyAction>;
const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const api = createAPI();
const mockAxios = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<RootState, AnyAction, AppDispatch>(middlewares);

describe('Async thunk: fetchOffers', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();

    mockAxios.onGet(APIRoute.Offers).reply(200, mockOffers);

    await store.dispatch(fetchOffers());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toContain(fetchOffers.pending.type);
    expect(actions).toContain(fetchOffers.fulfilled.type);
  });

  it('should dispatch rejected on failure', async () => {
    const store = mockStore();

    mockAxios.onGet(APIRoute.Offers).reply(500);

    await store.dispatch(fetchOffers());

    const actions = extractActionsTypes(store.getActions());

    expect(actions).toContain(fetchOffers.pending.type);
    expect(actions).toContain(fetchOffers.rejected.type);
  });
});

describe('Async thunk: checkAuth', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();
    mockAxios.onGet(APIRoute.Login).reply(200, mockUser);

    await store.dispatch(checkAuth());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(checkAuth.pending.type);
    expect(actions).toContain(checkAuth.fulfilled.type);
  });

  it('should dispatch rejected on failure', async () => {
    const store = mockStore();
    mockAxios.onGet(APIRoute.Login).reply(401);

    await store.dispatch(checkAuth());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(checkAuth.pending.type);
    expect(actions).toContain(checkAuth.rejected.type);
  });
});


describe('Async thunk: fetchOfferWithNearby', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();

    mockAxios.onGet(`${APIRoute.Offers}/${offerId}`).reply(200, mockDetails);
    mockAxios.onGet(`${APIRoute.Offers}/${offerId}/nearby`).reply(200, mockNearby);

    await store.dispatch(fetchOffer(offerId));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(fetchOffer.pending.type);
    expect(actions).toContain(fetchOffer.fulfilled.type);
  });

  it('should dispatch rejected on error', async () => {
    const store = mockStore();

    mockAxios.onGet(`${APIRoute.Offers}/${offerId}`).reply(500);
    mockAxios.onGet(`${APIRoute.Offers}/${offerId}/nearby`).reply(500);

    await store.dispatch(fetchOffer(offerId));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(fetchOffer.pending.type);
    expect(actions).toContain(fetchOffer.rejected.type);
  });
});

describe('Async thunk: fetchOfferComments', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();

    mockAxios.onGet(`${APIRoute.Comments}/${offerId}`).reply(200, mockComments);

    await store.dispatch(fetchOfferComments(offerId));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(fetchOfferComments.pending.type);
    expect(actions).toContain(fetchOfferComments.fulfilled.type);
  });

  it('should dispatch rejected on error', async () => {
    const store = mockStore();

    mockAxios.onGet(`${APIRoute.Comments}/${offerId}`).reply(500);

    await store.dispatch(fetchOfferComments(offerId));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(fetchOfferComments.pending.type);
    expect(actions).toContain(fetchOfferComments.rejected.type);
  });
});

describe('Async thunk: sendComment', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();

    mockAxios.onPost(`${APIRoute.Comments}/${offerId}`).reply(200);
    mockAxios.onGet(`${APIRoute.Comments}/${offerId}`).reply(200, mockComments);

    await store.dispatch(sendComment(mockCommentPost));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(sendComment.pending.type);
    expect(actions).toContain(sendComment.fulfilled.type);
  });

  it('should dispatch rejected on error', async () => {
    const store = mockStore();

    mockAxios.onPost(`${APIRoute.Comments}/${offerId}`).reply(500);

    await store.dispatch(sendComment(mockCommentPost));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(sendComment.pending.type);
    expect(actions).toContain(sendComment.rejected.type);
  });
});

describe('Async thunk: fetchFavoriteOffers', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();

    mockAxios.onGet(APIRoute.Favorite).reply(200, mockFavorites);

    await store.dispatch(fetchFavoriteOffers());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(fetchFavoriteOffers.pending.type);
    expect(actions).toContain(fetchFavoriteOffers.fulfilled.type);
  });

  it('should dispatch rejected on error', async () => {
    const store = mockStore();

    mockAxios.onGet(APIRoute.Favorite).reply(500);

    await store.dispatch(fetchFavoriteOffers());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(fetchFavoriteOffers.pending.type);
    expect(actions).toContain(fetchFavoriteOffers.rejected.type);
  });
});

describe('Async thunk: toggleFavoriteStatus', () => {
  it('should dispatch pending and fulfilled on success when user is authorized', async () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
    });

    mockAxios.onPost(`${APIRoute.Favorite}/${favoriteRequest.id}/${favoriteRequest.status}`)
      .reply(200, updatedOffer);

    await store.dispatch(toggleFavoriteStatus(favoriteRequest));

    const actions = extractActionsTypes(store.getActions());

    expect(actions).toContain(toggleFavoriteStatus.pending.type);
    expect(actions).toContain(toggleFavoriteStatus.fulfilled.type);
  });

  it('should dispatch pending and rejected on server error', async () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
    });

    mockAxios.onPost(`${APIRoute.Favorite}/${favoriteRequest.id}/${favoriteRequest.status}`)
      .reply(500);

    await store.dispatch(toggleFavoriteStatus(favoriteRequest));

    const actions = extractActionsTypes(store.getActions());

    expect(actions).toContain(toggleFavoriteStatus.pending.type);
    expect(actions).toContain(toggleFavoriteStatus.rejected.type);
  });
});


describe('Async thunk: login', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();

    mockAxios.onPost(APIRoute.Login).reply(200, mockUser);
    mockAxios.onGet(APIRoute.Offers).reply(200, []);

    await store.dispatch(login(loginData));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(login.pending.type);
    expect(actions).toContain(login.fulfilled.type);
  });

  it('should dispatch rejected on error', async () => {
    const store = mockStore();

    mockAxios.onPost(APIRoute.Login).reply(401);

    await store.dispatch(login(loginData));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(login.pending.type);
    expect(actions).toContain(login.rejected.type);
  });
});

describe('Async thunk: logout', () => {
  it('should dispatch pending and fulfilled on success', async () => {
    const store = mockStore();

    mockAxios.onDelete(APIRoute.Logout).reply(204);
    mockAxios.onGet(APIRoute.Offers).reply(200, []);

    await store.dispatch(logout());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(logout.pending.type);
    expect(actions).toContain(logout.fulfilled.type);
  });

  it('should dispatch rejected on error', async () => {
    const store = mockStore();

    mockAxios.onDelete(APIRoute.Logout).reply(500);

    await store.dispatch(logout());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toContain(logout.pending.type);
    expect(actions).toContain(logout.rejected.type);
  });
});
