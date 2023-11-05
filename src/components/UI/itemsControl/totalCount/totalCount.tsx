import classNames from './totalCount.module.css';
import { TotalCountProps } from './totalCountProps';
export function TotalCount(props: TotalCountProps) {
  return (
    <section className={classNames.itemsNumberTotal}>
      <span>Total results: {props.count}</span>
    </section>
  );
}
