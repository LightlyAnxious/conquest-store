import React, {useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import headerLogo from 'assets/images/header-logo.svg';
import {debounce} from 'utils/common';
import {RESIZE_DELAY} from 'const';
import HeaderNav from './components/HeaderNav/HeaderNav';
import UserSection from './components/UserSection/UserSection';

const PageHeader = ({onBrowserResize}) => {
  const [height, setHeight] = useState(0);
  const headerRef = useRef();

  useLayoutEffect(() => {
    const handleResize = () => {
      debounce(
        setHeight(() => headerRef.current.getBoundingClientRect().height),
        RESIZE_DELAY
      );
    };
    setHeight(
      () => headerRef.current.getBoundingClientRect().height,
      onBrowserResize(() => height)
    );

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [height, onBrowserResize]);

  return (
    <header className="page-header" ref={headerRef}>
      <div className="page-header__wrap container container--page">
        <Link to="/" className="page-header__logo-link" aria-label="На главную">
          <img
            className="logo__image"
            src={headerLogo}
            alt="логотип Conquest"
          />
        </Link>
        <HeaderNav />

        <UserSection />
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  onBrowserResize: PropTypes.func.isRequired,
};

export default PageHeader;
