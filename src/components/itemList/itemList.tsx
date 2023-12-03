import { Item } from '@components/item/item';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@redux/store';
import classNames from './itemList.module.css';

export function ItemList() {
  const items = useSelector((state: RootState) => state.items);
  const isAdded = useSelector((state: RootState) => state.justAdded);
  return (
    <section>
      <h2 className={classNames.listHeader}>Items list</h2>
      <section>
        {items.map((item, index) =>
          index === items.length - 1 && isAdded ? <Item justAdded={true} key={item.id} item={item} /> : <Item key={item.id} item={item} />
        )}
      </section>
    </section>
  );
}
