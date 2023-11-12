import React from 'react';
import { BaseProps } from '@app_types/baseProps';
import { ErrorFallback } from '@components/error/errorFallback/errorFallback';

type ErrorBoundaryState = {
  error?: Error;
  errorInfo?: React.ErrorInfo;
};

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
