export type ItemPropertyProps = {
  text: string;
  value?: string | number;
};

export function ItemProperty({ text, value }: ItemPropertyProps) {
  return (
    <>
      {value && (
        <p>
          <span>{text}</span>
          <span>{value}</span>
        </p>
      )}
    </>
  );
}
