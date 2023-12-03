import { ItemType } from '@app_types/itemType';
import classNames from './item.module.css';
import { ItemProperty } from '@components/itemProperty';
import { ItemHiddenProperty } from '@components/itemPropertyHidden';
import { memo } from 'react';
type ItemProps = {
  item: ItemType;
  justAdded?: boolean;
};

export const Item = memo(({ item, justAdded }: ItemProps) => {
  return (
    <section className={[classNames.itemWrapper, justAdded && classNames.justAdded].join(' ')}>
      <section className={classNames.pictureWrapper}>
        <img className={classNames.image} src={item.picture} />
      </section>
      <section>
        <div>
          <ItemProperty label="Name" value={item.name} />
          <ItemProperty label="Age" value={item.age} />
          <hr />
        </div>
        <div>
          <ItemProperty label="Email" value={item.email} />
          <ItemHiddenProperty label="Password" value={item.password} />
          <hr />
        </div>
        <div>
          <ItemProperty label="Gender" value={item.gender} />
          <hr />
        </div>
        <div>
          <ItemProperty label="Country" value={item.country} />
        </div>
      </section>
    </section>
  );
});
