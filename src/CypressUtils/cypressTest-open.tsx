import ReactDOM from 'react-dom/client';

import { mount } from 'cypress/react';

import { ReactNode } from 'react';

// Workaround solution to use React 18 with Cypress
export const open = (jsx: ReactNode) => {
  let myRoot: ReactDOM.Root;
  mount(<div />, {
    ReactDom: {
      render: (_: any, rootEl: Element | null) => {
        const root = ReactDOM.createRoot(rootEl!);
        myRoot = root;
        root.render(jsx);
      },
      unmountComponentAtNode: () => {
        myRoot.unmount();
        return true;
      }
    }
  });
};
