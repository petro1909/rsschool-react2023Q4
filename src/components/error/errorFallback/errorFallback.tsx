import React from 'react';
import { ErrorFallbackState } from './errorFallbackState';
import classNames from './errorFalback.module.css';

export function ErrorFallback(props: ErrorFallbackState) {
  const splitErrorStack = (stack?: string | null): string[] => {
    if (stack) {
      return stack.split('\n');
    }
    return [];
  };

  return (
    <section className={classNames.errorFallback}>
      <h1>OOOPS!!! Something wrong happened</h1>
      <div>
        <h2>{props.error?.message}</h2>
        <h3>Error stack</h3>
        <div className={classNames.errorStack}>
          {splitErrorStack(props.errorInfo?.componentStack).map(
            (item, index) => (
              <p key={index}>{item}</p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
