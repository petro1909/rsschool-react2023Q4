import { render } from '@testing-library/react';
import { TVShowCard } from '../src/components/tvShow/tvShowCard/tvShowCard';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import { TVShowExtended } from '../src/components/tvShow/tvShowExtended/tvShowExtended';
import { fakeItem } from '@test/fakeItems';

export const renderCardRouter = () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TVShowCard item={fakeItem} />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<TVShowExtended />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};
