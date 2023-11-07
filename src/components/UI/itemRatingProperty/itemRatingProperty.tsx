import { BaseProps } from '@app_types/baseProps';

export type ItemRatingPropertyProps = {
  rating?: number;
  voted?: number;
} & BaseProps;

export function ItemRatingProperty({ rating, voted, children }: ItemRatingPropertyProps) {
  return (
    <>
      {rating && (
        <p>
          <span>{children}</span>
          <span>{rating}</span>
          <span>Voted: ({voted})</span>
        </p>
      )}
    </>
  );
}
