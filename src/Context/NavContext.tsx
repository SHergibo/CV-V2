import { createContext, MutableRefObject, useContext } from 'react';
import { IGeneralInfo } from '../interfaces';

interface IContextProp {
  generalInfo: IGeneralInfo | null;
  headerRef: MutableRefObject<HTMLElement> | null;
}

const NavContext = createContext<IContextProp>({ generalInfo: null, headerRef: null });

export default NavContext;

export function useNav() {
  const generalInfo = useContext(NavContext);
  const headerRef = useContext(NavContext);

  return [generalInfo, headerRef];
}
