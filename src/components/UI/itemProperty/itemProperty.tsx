export type ItemPropertyProps = {
  text: string;
  value?: string | number;
};

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
