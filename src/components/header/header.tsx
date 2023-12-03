import { NavLink } from 'react-router-dom';
import classNames from './index.module.css';

export function Header() {
  return (
    <header className={classNames.header}>
      <section>
        <NavLink to="/">Main page</NavLink>
        <NavLink to="/refFrom">Form with uncontrolled component</NavLink>
        <NavLink to="/hookFrom">Form with form hook component</NavLink>
      </section>
    </header>
  );
}
