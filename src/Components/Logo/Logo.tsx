import { useContext } from 'react';
import NavContext from './../../Context/NavContext';
import { animateScroll as scroll, Link } from 'react-scroll';
import { LogoContainer } from './Logo.styled';

const Logo = () => {
  const { generalInfo } = useContext(NavContext);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <LogoContainer onClick={scrollToTop} onKeyPress={scrollToTop}>
      <Link tabIndex={0} activeClass="active" to="welcome" spy={true} smooth={true} offset={0} duration={500}>
        <span>{generalInfo?.firstname ? generalInfo?.firstname : 'Accueil'}</span>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
