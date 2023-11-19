import classNames from './totalCount.module.css';

export type TotalCountProps = {
  count: number;
};

export function TotalCount({ count }: TotalCountProps) {
  return (
    <section className={classNames.itemsNumberTotal}>
      <span>Total results: {count}</span>
    </section>
  );
}
