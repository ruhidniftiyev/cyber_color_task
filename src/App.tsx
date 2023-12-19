import { FC, Fragment } from 'react';
import Menu from './components/Menu';

import './style.css';
import './scss/app.scss';
import { useAppDispatch } from './hooks/useAppDispatch';
import { selectButton } from './store/slices/ButtonSlice';
import { useAppSelector } from './hooks/useAppSelector';

export const App: FC<{ items: any[] }> = ({ items = [] }) => {
  const dispatch = useAppDispatch();
  const selectedButton = useAppSelector((store) => store.buttonSlice.selectedButton);

  const clickButtonHandler = (buttonName: string) => {
    dispatch(selectButton(buttonName));
  };

  return (
    <Fragment>
      <Menu selectedElementName={selectedButton || 'Button is not selected...'} />
      <ul className="List">
        {items.map((item) => (
          <li
            onClick={() => clickButtonHandler(item.name)}
            key={item.name}
            className={`List__item List__item--${item.color}`}>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
