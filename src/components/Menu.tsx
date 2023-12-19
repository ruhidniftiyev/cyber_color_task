import { FC } from 'react';
import Search from './Search';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { selectAll } from '../store/slices/ButtonSlice';

type MenuProps = {
  selectedButtons: string[];
  selecting: any[];
};

const Menu: FC<MenuProps> = ({ selectedButtons, selecting }) => {
  const dispatch = useAppDispatch();

  const selectAllCLick = (items: any) => {
    dispatch(selectAll(items));
  };

  return (
    <div className="menu">
      <div className="menu__selected">
        <p className="">Selected buttons: </p>
        <div className="menu__selected__list">
          {selectedButtons.length > 0 ? (
            selectedButtons.map((btn) => <span key={btn}>{btn},</span>)
          ) : (
            <p>Button is not selected...</p>
          )}
        </div>
      </div>
      <Search />
      <button onClick={() => selectAllCLick(selecting)}>Select all</button>
    </div>
  );
};

export default Menu;
