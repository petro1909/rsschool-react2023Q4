import React from 'react';
import { BaseProps } from '../../../types/baseProps';
import { ErrorFallback } from '../errorFallback/errorFallback';
import { ErrorBoundaryState } from './errorBoundaryState';

export class ErrorBoundary extends React.Component<BaseProps, ErrorBoundaryState> {
  constructor(props: BaseProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ errorInfo: errorInfo });
    console.log(`error: ${error}`);
    console.log(`error info ${errorInfo.componentStack}`);
  }

  render() {
    if (this.state.error) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
    } else {
      return this.props.children;
    }
  }
}
