export type ItemPropertyProps = {
  text: string;
  value?: string | number;
};

export function ItemProperty({ text, value }: ItemPropertyProps) {
  if (!value) return null;
  return (
    <p>
      <span>{text}</span>
      <span>{value}</span>
    </p>
  );
}
