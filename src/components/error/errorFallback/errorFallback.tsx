import React from 'react';
import { ErrorFallbackState } from './errorFallbackState';
import classNames from './errorFalback.module.css';

export class ErrorFallback extends React.Component<ErrorFallbackState> {
  constructor(props: ErrorFallbackState) {
    super(props);
    this.splitErrorStack = this.splitErrorStack.bind(this);
  }
  render() {
    return (
      <section className={classNames.errorFallback}>
        <h1>OOOPS!!! Something wrong happened</h1>
        <div>
          <h2>{this.props.error?.message}</h2>
          <h3>Error stack</h3>
          <div className={classNames.errorStack}>
            {this.splitErrorStack(this.props.errorInfo?.componentStack).map(
              (item, index) => (
                <p key={index}>{item}</p>
              )
            )}
          </div>
        </div>
      </section>
    );
  }

  splitErrorStack(stack?: string | null): string[] {
    if (stack) {
      return stack.split('\n');
    }
    return [];
  }
}
