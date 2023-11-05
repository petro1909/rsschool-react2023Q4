import { ItemRatingPropertyProps } from './itemRatingPropertyProps';

export function ItemRatingProperty(props: ItemRatingPropertyProps) {
  return (
    <>
      {props.rating ? (
        <p>
          <span>{props.children}</span>
          <span>{props.rating}</span>
          <span>Voted: ({props.voted})</span>
        </p>
      ) : (
        <></>
      )}
    </>
  );
}
