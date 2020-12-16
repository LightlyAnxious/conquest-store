import React from 'react';
import {Link} from 'react-router-dom';
import footerLogo from 'assets/images/footer-logo.svg';
import FooterNav from './components/FooterNav/FooterNav';

import classes from './PageFooter.module.css';

const PageFooter = () => (
  <footer className="page-footer">
    <div className="page-footer__wrap">
      <div className="page-footer__inner">
        <Link to="/" className="page-footer__logo-link" aria-label="На главную">
          <img className={classes.logoImg} src={footerLogo} alt="footer logo" />
        </Link>
        <a
          className="page-footer__link page-footer__contact"
          href="tel:+74994504797">
          8 (499) 450-47-97
        </a>
        <a
          className="page-footer__link page-footer__contact"
          href="mailto:info@conquest.watch.ru">
          info@conquest.watch.ru
        </a>
      </div>
      <FooterNav />
    </div>
  </footer>
);

export default PageFooter;
