import React from 'react';
import classNames from './errorButton.module.css';
import { BaseProps } from '../../../types/baseProps';
import { ErrorButtonState } from './errorButtonState';

export class ErrorButton extends React.Component<BaseProps, ErrorButtonState> {
  constructor(props: BaseProps) {
    super(props);
    this.state = { errorEnabled: false };
  }

  render() {
    if (this.state.errorEnabled) {
      throw new Error('Throwed test error');
    }
    return (
      <button
        className={classNames.errorButton}
        onClick={() => this.enableError()}
      >
        Throw error test button
      </button>
    );
  }

  enableError() {
    this.setState({ errorEnabled: true });
  }
}
