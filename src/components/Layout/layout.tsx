import { ReactNode } from 'react';
/* import { Loader } from "../loader/loader"; */
import style from './layout.module.scss';

interface ILayoutProps {
    HeaderComponent: ReactNode;
    MainComponent: ReactNode;
    FooterComponent: ReactNode;
    showLoader?: boolean;
}

const Layout = ({ /* showLoader, */ HeaderComponent, MainComponent, FooterComponent }: ILayoutProps) => {

  return (
    <div className={style.layout}>
        {HeaderComponent}
        {MainComponent}
        {FooterComponent}
    </div>
  );
};

export default Layout;