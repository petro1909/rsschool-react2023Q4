import { BaseProps } from '@app_types/baseProps';
import classNames from './tvShowExtended.module.css';
import closeImage from '@assets/close.svg';
import { useRouter } from 'next/router';
type TVShowExtendedWrapperProps = BaseProps;

export function TVShowExtendedWrapper(props: TVShowExtendedWrapperProps) {
  const router = useRouter();
  const closeExtendedShowCard = () => {
    const params = new URLSearchParams(router.query as unknown as string);
    params.delete('detailedId');
    router.push({ query: params.toString() }, undefined, { shallow: true });
  };

  return (
    <section className={classNames.itemPageWrapper} data-testid={'detailed_card'}>
      <section
        data-testid={'close_card'}
        className={classNames.overlay}
        onClick={() => closeExtendedShowCard()}
      ></section>
      <section className={classNames.itemWrapper}>
        <section className={classNames.closeButton}>
          <img src={closeImage} onClick={() => closeExtendedShowCard()} />
        </section>
        {props.children}
      </section>
    </section>
  );
}
