import React from 'react';
import {Link} from 'react-router-dom';
import Img from 'react-cloudinary-lazy-image';
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
      {/* <picture className="news__media-wrap">
      <source media="(min-width: 1140px)" type="image/webp" srcset="img/placeholder.png" data-srcset="img/news/news-bg-masonry@2x.webp 2x, img/news/news-bg-masonry.webp 1x">
      <source media="(min-width: 768px)" type="image/webp" srcset="img/placeholder.png" data-srcset="img/news/tablet/news-bg-masonry--tablet@2x.webp 2x, img/news/tablet/news-bg-masonry--tablet.webp 1x">
      <source type="image/webp" srcset="img/placeholder.png" data-srcset="img/news/mobile/news-bg-masonry--mobile@2x.webp 2x, img/news/mobile/news-bg-masonry--mobile.webp 1x">
      <source media="(min-width: 1140px)" srcset="img/placeholder.png" data-srcset="img/news/news-bg-masonry@2x.jpg 2x, img/news/news-bg-masonry.jpg 1x">
      <source media="(min-width: 768px)" srcset="img/placeholder.png" data-srcset="img/news/tablet/news-bg-masonry--tablet@2x.jpg 2x, img/news/tablet/news-bg-masonry--tablet.jpg 1x">
      <img className="news__image lazy" src="placeholder.png" data-srcset="img/news/mobile/news-bg-masonry--mobile@2x.jpg 2x" data-src="img/news/mobile/news-bg-masonry--mobile.jpg" alt="Подписывайтесь на наши новости">
    </picture>
    <Img
      cloudName={CDN_URL}
      imageName={image}
      urlParams="dpr_auto"
      fluid={{
        maxWidth: newsSizes[detectScreen(width)],
      }}
    /> */}
    </div>
  </section>
);

export default News;
