import { BaseProps } from '@app_types/baseProps';

export type ItemRatingPropertyProps = {
  rating?: number;
  voted?: number;
} & BaseProps;

export function ItemRatingProperty({ rating, voted, children }: ItemRatingPropertyProps) {
  if (!rating) return null;
  return (
    <p>
      <span>{children}</span>
      <span>{rating}</span>
      <span>Voted: ({voted})</span>
    </p>
  );
}
