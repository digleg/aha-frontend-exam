import Logo from './Logo';
import SideBarItem from './SideBarItem';

const SideBar = () => {
  const currentUrl = window.location.href;
  return (
    <div className="fixed bottom-0 z-10 h-[66px] w-screen bg-bg-c1B1B1B xl:static xl:bottom-auto xl:z-auto xl:h-auto xl:w-20">
      <div className="shadow-[inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)] xl:shadow-none flex h-[66px] flex-row items-center justify-center bg-bg-c24242402 text-white backdrop-blur-[27.1828px] xl:flex xl:flex-col xl:items-center xl:justify-start xl:bg-bg-c1B1B1B xl:backdrop-blur-[0px] ">
        <div className="mt-[37px] hidden xl:block">
          <Logo />
        </div>
        <div className="mt-0 mr-[27px] xl:mr-0 xl:mt-[46px]">
          <SideBarItem
            title="Home"
            path="/home"
            active={currentUrl.includes('/home')}
          />
        </div>
        <div className="mt-0 ml-[27px] xl:ml-0 xl:mt-[18px]">
          <SideBarItem
            title="Tags"
            path="tags"
            active={currentUrl.includes('/tags')}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
