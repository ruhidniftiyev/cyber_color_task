import { FC, Fragment } from 'react';
import Menu from './components/Menu';

import './style.css';
import './scss/app.scss';
import { useAppDispatch } from './hooks/useAppDispatch';
import { selectButtons } from './store/slices/ButtonSlice';
import { useAppSelector } from './hooks/useAppSelector';

export const App: FC<{ items: any[] }> = ({ items = [] }) => {
  const dispatch = useAppDispatch();
  const selectedButtons = useAppSelector((store) => store.buttonSlice.selectedButtons);

  const clickButtonHandler = (buttonName: string) => {
    dispatch(selectButtons(buttonName));
  };

  return (
    <Fragment>
      <Menu selectedButtons={selectedButtons} selecting={items.map((item) => item.name)} />
      <ul className="List">
        {items.map((item) => (
          <li
            onClick={() => clickButtonHandler(item.name)}
            key={item.name}
            className={
              selectedButtons.includes(item.name)
                ? `List__item List__item--${item.color} selected`
                : `List__item List__item--${item.color}`
            }>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
