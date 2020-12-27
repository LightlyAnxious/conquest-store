import React, {useState} from 'react';
import PageHeader from 'components/PageHeader/PageHeader';
import PageFooter from 'components/PageFooter/PageFooter';
import Bestsellers from 'components/Bestsellers/Bestsellers';
import Promo from 'components/Promo/Promo';

const Main = () => {
  const [addHeight, setAddHeight] = useState(0);

  return (
    <>
      <PageHeader onBrowserResize={setAddHeight} />
      <main className="site-content">
        {/* <Promo addHeight={addHeight} /> */}
        <Bestsellers />
      </main>
      <PageFooter />
    </>
  );
};

export default Main;
