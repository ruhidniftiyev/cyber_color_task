import { FC } from 'react';
import Search from './Search';

type MenuProps = {
  selectedElementName: string;
};

const Menu: FC<MenuProps> = ({ selectedElementName }) => {
  return (
    <div className="menu">
      <div className="menu__selected">
        <p className="">Selected color:  </p>
        <p className="menu__selected__color">{selectedElementName}</p>
      </div>
      <Search />
    </div>
  );
};

export default Menu;
