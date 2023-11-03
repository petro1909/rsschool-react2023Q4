import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../page/main/main';
import { About } from '../../page/about/about';
import { NotFound } from '../../page/notFound/notFound';
import { TVShowExtended } from '../tvShow/tvShowExtended/tvShowExtended';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<TVShowExtended />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
