import { BaseProps } from '@app_types/baseProps';
import { useSearchParams } from 'react-router-dom';
import classNames from './tvShowExtended.module.css';
import closeImage from '@assets/close.svg';
type TVShowExtendedWrapperProps = BaseProps;

export function TVShowExtendedWrapper(props: TVShowExtendedWrapperProps) {
  const [, setSearchParams] = useSearchParams();

  const closeExtendedShowCard = () => {
    setSearchParams((params) => {
      params.delete('detailed');
      return params;
    });
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
