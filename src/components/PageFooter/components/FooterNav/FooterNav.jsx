import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import {FooterNavSection, FooterNavTitle} from 'config/site-content';
import {Width} from 'const';
import Accordion from 'components/shared/Accordion/Accordion';
import NavSection from './components/NavSection';
import NavItemsList from './components/NavItemsList';

const FooterNav = () => {
  const {width} = useWindowSize();
  const isMobile = width < Width.MOBILE;

  const renderFooterNav = () =>
    !isMobile ? (
      <nav className="page-footer__menu">
        <NavSection
          sectionItems={FooterNavSection.ABOUT}
          sectionTitle={FooterNavTitle.ABOUT}
          sectionClass={FooterNavTitle.ABOUT.toLowerCase()}
        />
        <NavSection
          sectionTitle={FooterNavTitle.TO_BUYERS}
          sectionItems={FooterNavSection.TO_BUYERS}
          sectionClass={FooterNavTitle.TO_BUYERS.toLowerCase()}
        />
        <NavSection
          sectionTitle={FooterNavTitle.DELIVERY}
          sectionItems={FooterNavSection.DELIVERY}
          sectionClass={FooterNavTitle.DELIVERY.toLowerCase()}
        />
      </nav>
    ) : (
      <nav className="page-footer__menu">
        <Accordion title={FooterNavTitle.ABOUT}>
          <NavItemsList sectionItems={FooterNavSection.ABOUT} />
        </Accordion>
        <Accordion title={FooterNavTitle.TO_BUYERS}>
          <NavItemsList sectionItems={FooterNavSection.TO_BUYERS} />
        </Accordion>
        <Accordion title={FooterNavTitle.DELIVERY}>
          <NavItemsList sectionItems={FooterNavSection.DELIVERY} />
        </Accordion>
      </nav>
    );

  return renderFooterNav();
};

export default FooterNav;
