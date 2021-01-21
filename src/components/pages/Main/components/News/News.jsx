import React from 'react';
import {Link} from 'react-router-dom';
import {NewsSocials} from './components';

import './News.scss';

const News = () => (
  <section className="news">
    <div className="news__wrap">
      <div className="news__content">
        <h2 className="news__title">Следите за новостями</h2>
        <p className="news__desc">
          Подписывайтесь на
          <Link className="news__link" to="/">
            @conquest_watch
          </Link>
          в соцсетях и узнавайте о новинках и акциях первыми.
        </p>
      </div>
      <NewsSocials />
    </div>
  </section>
);

export default News;
