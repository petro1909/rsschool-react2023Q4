import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '@page/main/main';
import { About } from '@page/about/about';
import { NotFound } from '@page/notFound/notFound';
import { TVShowExtended } from '@components/tvShow/tvShowExtended/tvShowExtended';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<TVShowExtended />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notFound" />} />
    </Routes>
  );
}
