import Sidebar from './SideBar';

interface WrapperProps {
  children: JSX.Element[] | JSX.Element;
}

export default function ContentWrapper({ children }: WrapperProps) {
  return (
    <div className="flex min-h-screen flex-col-reverse items-stretch xl:flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
