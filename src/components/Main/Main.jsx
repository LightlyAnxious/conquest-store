import React, {useState} from 'react';
import PageHeader from 'components/PageHeader/PageHeader';
import PageFooter from 'components/PageFooter/PageFooter';
import Promo from '../Promo/Promo';

const Main = () => {
  const [addHeight, setAddHeight] = useState(0);

  return (
    <>
      <PageHeader onBrowserResize={setAddHeight} />
      <main className="site-content">
        <Promo addHeight={addHeight} />
      </main>
      <PageFooter />
    </>
  );
};

export default Main;
