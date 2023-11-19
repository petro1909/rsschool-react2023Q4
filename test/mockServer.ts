import { ApiBaseRequest } from '@app_types/api/apiBaseRequest';
import { HttpResponse, http, PathParams } from 'msw';
import { fakeItems, fakeItem } from './fakeItems';

export const createHandlers = (empty: boolean = false) => {
  const handlers = [
    http.post<PathParams<string>, ApiBaseRequest>(
      'https://api.myshows.me/v2/rpc/',
      async ({ request }) => {
        const method = (await request.json()).method;
        switch (method) {
          case 'shows.Get':
            return HttpResponse.json({ jsonrpc: '', result: empty ? [] : fakeItems, id: 1 });
          case 'shows.Count':
            return HttpResponse.json({ jsonrpc: '', result: 100, id: 1 });
          case 'shows.GetById':
            return HttpResponse.json({ jsonrpc: '', result: fakeItem, id: 1 });
        }
      }
    ),
  ];
  return handlers;
};
