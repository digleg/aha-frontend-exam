import { useLocation } from 'react-router-dom';

import Logo from './Logo';
import SideBarItem from './SideBarItem';

const SideBar = () => {
  const { pathname } = useLocation();

  // className for hidden navbar
  let classNameForNavBar;
  if (pathname.includes('/Tags')) {
    // Show: tag & desktop, Hidden: tag & mobile
    classNameForNavBar =
      'fixed bottom-0 z-10 h-[66px] w-screen bg-bg-c1B1B1B xl:static xl:bottom-auto xl:z-auto xl:h-auto xl:w-20 hidden xl:block';
  } else {
    // Show: home & desktop, home & mobile
    classNameForNavBar =
      'fixed bottom-0 z-10 h-[66px] w-screen bg-bg-c1B1B1B xl:static xl:bottom-auto xl:z-auto xl:h-auto xl:w-20';
  }

  return (
    <div className={classNameForNavBar}>
      <div className="shadow-[inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)] xl:shadow-none flex h-[66px] flex-row items-center justify-center bg-bg-c24242402 text-white backdrop-blur-[27.1828px] xl:flex xl:flex-col xl:items-center xl:justify-start xl:bg-bg-c1B1B1B xl:backdrop-blur-[0px] ">
        <div className="mt-[37px] hidden xl:block">
          <Logo />
        </div>
        <div className="mt-0 mr-[5.5%] xl:mr-0 xl:mt-[38px] xl:min-h-[44px]">
          <SideBarItem
            title="Home"
            path="Home"
            active={pathname.includes('/Home')}
          />
        </div>
        <div className="mt-0 ml-[5.5%] xl:ml-0 xl:mt-[20px] xl:min-h-[50px]">
          <SideBarItem
            title="Tags"
            path="Tags"
            active={pathname.includes('/Tags')}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
