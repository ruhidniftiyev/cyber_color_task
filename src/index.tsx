import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { items } from './data';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const root = createRoot(document.getElementById('app'));

const store = setupStore();

root.render(
  <StrictMode>
    <Provider store={store}>
      <App items={items} />
    </Provider>
  </StrictMode>,
);
