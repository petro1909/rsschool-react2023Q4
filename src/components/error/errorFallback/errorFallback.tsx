import React from 'react';
import classNames from './errorFalback.module.css';

type ErrorFallbackProps = {
  error?: Error;
  errorInfo?: React.ErrorInfo;
};

export function ErrorFallback({ error, errorInfo }: ErrorFallbackProps) {
  const splitErrorStack = (stack?: string | null): string[] => {
    if (stack) {
      return stack.split('\n');
    }
    return [];
  };

  return (
    <section data-testid="error-fallback" className={classNames.errorFallback}>
      <h1>OOOPS!!! Something wrong happened</h1>
      <div>
        <h2>{error?.message}</h2>
        <h3>Error stack</h3>
        <div className={classNames.errorStack}>
          {splitErrorStack(errorInfo?.componentStack).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
