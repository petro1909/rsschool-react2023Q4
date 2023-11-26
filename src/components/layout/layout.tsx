import { BaseProps } from '@app_types/baseProps';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';

export function Layout({ children }: BaseProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
