import { Link } from 'react-router-dom';
import classNames from './index.module.css';
import githubLogo from '@assets/github-icon.svg';
import rssLogo from '@assets/rs-school-icon.svg';

export function Footer() {
  return (
    <footer className={classNames.footer}>
      <Link className={classNames.gitLink} to="https://github.com/petro1909">
        <img src={githubLogo} alt="github logo" />
        <span>petro1909</span>
      </Link>
      <span>2023</span>
      <Link to="https://rs.school/react/">
        <img src={rssLogo} alt="rss app logo" />
      </Link>
    </footer>
  );
}
