import React from 'react';
import classNames from './page.module.css';

export class Page extends React.Component {
  render() {
    return (
      <section className={classNames.pages}>
        <button>1</button>
      </section>
    );
  }
}
