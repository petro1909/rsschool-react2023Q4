import { ItemPropertyProps } from './itemPropertyProps';

export function ItemProperty(props: ItemPropertyProps) {
  return (
    <>
      {props.value ? (
        <p>
          <span>{props.text}</span>
          <span>{props.value}</span>
        </p>
      ) : (
        <></>
      )}
    </>
  );
}
