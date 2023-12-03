import { ItemProperty } from '@components/itemProperty';
import openEye from '@assets/show.svg';
import closeEye from '@assets/hide.svg';
import { useState } from 'react';
import classNames from './index.module.css';

type ItemPropertyProps = {
  label: string;
  value: string;
};
export function ItemHiddenProperty({ label, value }: ItemPropertyProps) {
  const [visibility, setVisibility] = useState(false);
  return (
    <section className={classNames.toggleVisibilityWrapper}>
      <ItemProperty label={label} value={visibility ? value : ''.padEnd(value.length, '*')} />
      <button className={classNames.toggleVisibilityButton} onClick={() => setVisibility(!visibility)}>
        <img alt="visibility" className={classNames.toggleVisibilityImage} src={visibility ? closeEye : openEye} />
      </button>
    </section>
  );
}
