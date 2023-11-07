import { BaseProps } from '@app_types/baseProps';

export type ItemRatingPropertyProps = {
  rating?: number;
  voted?: number;
} & BaseProps;

export function ItemRatingProperty(props: ItemRatingPropertyProps) {
  return (
    <>
      {props.rating && (
        <p>
          <span>{props.children}</span>
          <span>{props.rating}</span>
          <span>Voted: ({props.voted})</span>
        </p>
      )}
    </>
  );
}
