import React from 'react';
import classNames from './errorButton.module.css';

export function ErrorButton() {
  const [errorEnabled, setErrorEnabled] = React.useState(false);

  const setErrorEnable = () => setErrorEnabled(true);

  if (errorEnabled) throw new Error('Throwed test error');
  return (
    <button className={classNames.errorButton} onClick={setErrorEnable}>
      Throw error test button
    </button>
  );
}
