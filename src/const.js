const RESIZE_DELAY = 500;
const CDN_URL =
  'https://res.cloudinary.com/funcrusher/image/upload/v1609078829/conquest-store/';

const FooterNavSection = {
  ABOUT: [
    {
      title: 'Наши магазины',
      link: '/',
    },
    {
      title: 'Вакансии',
      link: '/',
    },
    {
      title: 'Сертификаты',
      link: '/',
    },
    {
      title: 'Отзывы',
      link: '/',
    },
  ],
  TO_BUYERS: [
    {
      title: 'Каталог товаров',
      link: '/',
    },
    {
      title: 'Как заказать?',
      link: '/',
    },
    {
      title: 'FAQ',
      link: '/',
    },
    {
      title: 'Корпоративным клиентам',
      link: '/',
    },
  ],
  DELIVERY: [
    {
      title: 'Способы оплаты',
      link: '/',
    },
    {
      title: 'Время доставки',
      link: '/',
    },
    {
      title: 'Гарантии и ремонт',
      link: '/',
    },
    {
      title: 'Возврат и компенсация',
      link: '/',
    },
  ],
};

const FooterNavTitle = {
  ABOUT: 'О компании',
  TO_BUYERS: 'Покупателям',
  DELIVERY: 'Доставка',
};

const AppRoute = {
  MAIN: '/',
  CATALOG: '/catalog',
  FAVORITES: '/favorites',
  CART: '/cart',
  CARD: '/card',
  BESTSELLERS: '/bestsellers',
  DELIVERY: '/delivery',
  CONTACTS: '/contacts',
};

const Width = {
  MOBILE: '530',
};

const socials = [
  {
    link: '#',
    desc: 'instagram',
    icon: 'img/sprite_auto.svg#icon-instagram',
    width: '18',
    height: '18',
  },
  {
    link: '#',
    desc: 'facebook',
    icon: 'img/sprite_auto.svg#icon-facebook',
    width: '9',
    height: '17',
  },
  {
    link: '#',
    desc: 'twitter',
    icon: 'img/sprite_auto.svg#icon-twitter',
    width: '17',
    height: '14',
  },
];

export {
  FooterNavSection,
  FooterNavTitle,
  AppRoute,
  Width,
  socials,
  RESIZE_DELAY,
  CDN_URL,
};
