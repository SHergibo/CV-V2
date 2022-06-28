import { useState, useEffect, useRef, useCallback, useContext } from 'react';
import WindowWidthContext from './../../Context/WindowWidthContext';
import NavContext from './../../Context/NavContext';
import { Link } from 'react-scroll';
import Logo from './../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainMenu, ContainerNav, Menu, ListMenu, SocialNavContainer, BurgerMenu } from './Nav.styled';

interface INavProps {
  liList: {
    name: string;
    to: string;
    offset: number;
    duration: number;
  }[];
  navLeftInteraction: JSX.Element;
}

const Nav = ({ liList, navLeftInteraction }: INavProps) => {
  const windowWidth = useContext(WindowWidthContext);
  const { headerRef } = useContext(NavContext);
  const [menuTop, setMenuTop] = useState(false);
  const [mainMenufixed, setMainMenuFixed] = useState(false);
  const [burgerMenuSwitch, setBurgerMenuSwitch] = useState(false);
  const mainMenu = useRef<HTMLDivElement>(null!);
  const menu = useRef<HTMLElement>(null!);

  const handleMenuScroll = useCallback(() => {
    let windowHeight: number = 0;
    if (headerRef !== null) {
      if (burgerMenuSwitch && !mainMenufixed) {
        windowHeight = headerRef.current.scrollHeight - menu.current.scrollHeight - (mainMenu.current.scrollHeight + 1 - menu.current.scrollHeight);
      } else if (mainMenufixed && burgerMenuSwitch) {
        windowHeight = headerRef.current.scrollHeight - (mainMenu.current.scrollHeight + 1 - menu.current.scrollHeight);
      } else {
        windowHeight = headerRef.current.scrollHeight - (mainMenu.current.scrollHeight + 1);
      }
    }
    let scroll: number = Math.round(window.scrollY);

    if (scroll >= windowHeight) {
      setMainMenuFixed(true);
    } else {
      setMainMenuFixed(false);
    }
  }, [headerRef, burgerMenuSwitch, mainMenufixed]);

  const handleMenuPosition = useCallback(() => {
    if (windowWidth < 960) {
      if (menu.current.getBoundingClientRect().top < 0) {
        setMenuTop(true);
      } else if (menu.current.getBoundingClientRect().top >= menu.current.offsetHeight + mainMenu.current.offsetHeight) {
        setMenuTop(false);
      }
    } else {
      if (menuTop) {
        setMenuTop(false);
      }
      if (setBurgerMenuSwitch) {
        setBurgerMenuSwitch(false);
      }
    }
  }, [windowWidth, setBurgerMenuSwitch, menuTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleMenuScroll);
    window.addEventListener('scroll', handleMenuPosition);
    return () => {
      window.removeEventListener('scroll', handleMenuScroll);
      window.removeEventListener('scroll', handleMenuPosition);
    };
  }, [handleMenuScroll, handleMenuPosition]);

  const burgerMenu = (): void => {
    setBurgerMenuSwitch(!burgerMenuSwitch);

    if (menu.current.getBoundingClientRect().top < 0) {
      setMenuTop(true);
    } else if (menu.current.getBoundingClientRect().top >= menu.current.offsetHeight + mainMenu.current.offsetHeight) {
      setMenuTop(false);
    }
  };

  const focusOnKeypress = (elem: string) => {
    document.getElementById(elem)!.scrollIntoView();
  };

  let li = liList.map((item, index) => {
    return (
      <li
        tabIndex={0}
        onKeyPress={() => {
          focusOnKeypress(item.to);
        }}
        key={'nav' + index}
      >
        {windowWidth >= 960 && (
          <Link activeClass="active" to={item.to} spy={true} smooth={true} offset={item.offset} duration={item.duration}>
            {item.name}
          </Link>
        )}
        {windowWidth < 960 && (
          <Link activeClass="active" to={item.to} spy={true} smooth={true} offset={item.offset} duration={item.duration} onClick={burgerMenu}>
            {item.name}
          </Link>
        )}
      </li>
    );
  });

  return (
    <MainMenu ref={mainMenu} mainMenufixed={mainMenufixed}>
      <ContainerNav>
        <Logo />
        <Menu ref={menu} menuTop={menuTop} displayMenu={burgerMenuSwitch}>
          <ListMenu>{li}</ListMenu>
          {windowWidth < 960 && <SocialNavContainer>{navLeftInteraction}</SocialNavContainer>}
        </Menu>
        {windowWidth >= 960 && <SocialNavContainer>{navLeftInteraction}</SocialNavContainer>}
        {windowWidth < 960 && (
          <>
            {!burgerMenuSwitch && (
              <BurgerMenu id="burger-svg" onClick={burgerMenu}>
                <FontAwesomeIcon icon="bars" />
              </BurgerMenu>
            )}
            {burgerMenuSwitch && (
              <BurgerMenu id="delete-svg" onClick={burgerMenu}>
                <FontAwesomeIcon icon="times" />
              </BurgerMenu>
            )}
          </>
        )}
      </ContainerNav>
    </MainMenu>
  );
};

export default Nav;
