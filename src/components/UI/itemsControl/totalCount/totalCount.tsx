import classNames from './totalCount.module.css';

export type TotalCountProps = {
  count: number;
};

export function TotalCount(props: TotalCountProps) {
  return (
    <section className={classNames.itemsNumberTotal}>
      <span>Total results: {props.count}</span>
    </section>
  );
}
