import { createContext, MutableRefObject } from 'react';
import { IGeneralInfo } from '../interfaces';

interface IContextProp {
  generalInfo: IGeneralInfo | null;
  headerRef: MutableRefObject<HTMLElement> | null;
}

const NavContext = createContext<IContextProp>({ generalInfo: null, headerRef: null });

export default NavContext;
