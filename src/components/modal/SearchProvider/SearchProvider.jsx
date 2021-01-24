import React, {useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';

import {useActions, useSearchState} from 'store/features/settings';
import {Modal} from 'components/shared/Modal';
import useComponentVisible from 'hooks/useComponentVisible';

import SearchForm from 'components/common/PageHeader/components/UserSection/components/SearchForm';

import './SearchProvider.scss';

const SearchProvider = () => {
  const isOpened = useSearchState();
  const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(
    isOpened
  );
  const {toggleSearch} = useActions();
  const handleClick = () => {
    setIsComponentVisible(!isOpened);
    toggleSearch(!isOpened);
  };
  /* eslint-disable */
  useEffect(() => toggleSearch(isComponentVisible), [isComponentVisible]);
  /* eslint-enable */
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        id="search-btn"
        className="page-header__link page-header__link--search search__btn"
        aria-label="Развернуть поиск"
        aria-controls="search-field">
        <svg className="search__icon" width="17" height="17">
          <use xlinkHref="img/sprite_auto.svg#icon-search" />
        </svg>
      </button>
      <CSSTransition
        in={isOpened}
        timeout={{appear: 0, enter: 250, exit: 250}}
        classNames="modal-search"
        unmountOnExit>
        <Modal component="article" classes="modal-search" role="modal-search">
          <div ref={ref} className="modal-search__wrap">
            <div className="modal-search__header">
              <h2 className="modal-search__title">Поиск</h2>
              <button
                type="button"
                onClick={handleClick}
                className="close-btn modal-search__close-btn">
                <span className="visually-hidden">Закрыть меню поиска</span>
              </button>
            </div>
            <SearchForm />
          </div>
        </Modal>
      </CSSTransition>
    </>
  );
};

export default SearchProvider;
