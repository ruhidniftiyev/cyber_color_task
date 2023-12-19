import { FC } from 'react';
import Search from './Search';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { selectAll } from '../store/slices/ButtonSlice';

type MenuProps = {
  selectedButtons: string[];
  selecting: () => void;
};

const Menu: FC<MenuProps> = ({ selectedButtons, selecting }) => {
  return (
    <div className="menu">
      <div className="menu__selected">
        <p className="">Selected color: </p>
        <div className="menu__selected__list">
          {selectedButtons.length > 0 ? (
            selectedButtons.map((btn) => <p key={btn}>{btn},</p>)
          ) : (
            <p>Button is not selected...</p>
          )}
        </div>
      </div>
      <Search />
      <button onClick={selecting}>Select all</button>
    </div>
  );
};

export default Menu;
