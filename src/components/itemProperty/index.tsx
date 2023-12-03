import classNames from './index.module.css';
type ItemPropertyProps = {
  label: string;
  value: string | number;
};
export function ItemProperty({ label, value }: ItemPropertyProps) {
  return (
    <p className={classNames.itemProperty}>
      {label}: <span className={classNames.itemPropertyValue}>{value}</span>
    </p>
  );
}
