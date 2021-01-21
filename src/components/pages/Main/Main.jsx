import React, {useState} from 'react';
import PageHeader from 'components/common/PageHeader';
import PageFooter from 'components/common/PageFooter';
import Bestsellers from './components/Bestsellers';
import Promo from './components/Promo';
import Advantages from './components/Advantages';
import News from './components/News';

const Main = () => {
  const [addHeight, setAddHeight] = useState(0);
  return (
    <>
      <PageHeader onBrowserResize={setAddHeight} />
      <main className="site-content">
        <Promo addHeight={addHeight} />
        <Bestsellers />
        <Advantages />
        <News />
      </main>
      <PageFooter />
    </>
  );
};

export default Main;
