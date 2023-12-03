import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/main/index';
import RefFromPage from '@pages/formRef/index';
import HookFromPage from '@pages/formHook/index';
import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="refFrom" element={<RefFromPage />} />
        <Route path="hookFrom" element={<HookFromPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
