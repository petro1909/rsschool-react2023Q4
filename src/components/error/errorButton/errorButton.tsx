import React from 'react';
import classNames from './errorButton.module.css';

export const ErrorButton = React.memo(function ErrorButton() {
  const [errorEnabled, setErrorEnabled] = React.useState(false);

  const setErrorEnable = () => setErrorEnabled(true);
  if (errorEnabled) throw new Error('Throwed test error');
  return (
    <button data-testid="error-button" className={classNames.errorButton} onClick={setErrorEnable}>
      Throw error test button
    </button>
  );
});
