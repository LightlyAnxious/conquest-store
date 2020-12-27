import React, {useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import headerLogo from 'assets/images/header-logo.svg';
import {debounce} from 'utils/common';
import {RESIZE_DELAY} from 'const';
import useWindowSize from 'hooks/useWindowSize';
import HeaderNav from './components/HeaderNav/HeaderNav';
import UserSection from './components/UserSection/UserSection';

import './PageHeader.scss';

const PageHeader = ({onBrowserResize}) => {
  const [height, setHeight] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const headerRef = useRef();
  const {width} = useWindowSize();
  const isMobile = width < 490;
  const logoClasses = classNames({
    'page-header__logo-link--expanded': isMobile,
    'page-header__logo-link--collapsed': isMobile && isSearchActive,
  });

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
      <div className="container page-header__wrap">
        <Link
          to="/"
          className={`page-header__logo-link ${logoClasses}`}
          aria-label="На главную">
          <img
            className="logo__image"
            src={headerLogo}
            alt="логотип Conquest"
          />
        </Link>
        <HeaderNav />

        <UserSection onSearch={setIsSearchActive} />
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  onBrowserResize: PropTypes.func.isRequired,
};

export default PageHeader;
