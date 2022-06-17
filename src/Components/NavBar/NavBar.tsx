import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './../Nav';
import { LinkSocial, NavLeftInteraction } from './NavBar.styled';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [liList, setLiList] = useState([
    { name: 'Accueil', to: 'home', offset: 0, duration: 500 },
    { name: 'À propos', to: 'about', offset: -80, duration: 1000 },
    { name: 'Portfolio', to: 'portfolio', offset: -80, duration: 1000 },
    { name: 'Résumé', to: 'resume', offset: -80, duration: 1000 },
    { name: 'Contact', to: 'contact', offset: -81, duration: 1000 }
  ]);

  const [navLeftInteraction, setNavLeftInteraction] = useState(
    <ul>
      <li>
        <LinkSocial href="https://www.linkedin.com/in/sachahergibo/" aria-label="Vers mon compte linkedin">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </LinkSocial>
      </li>
      <li>
        <LinkSocial href="https://github.com/SHergibo" aria-label="Vers mon compte github">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </LinkSocial>
      </li>
    </ul>
  );

  const logOut = useCallback(async () => {
    // await logout();
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/admin') {
      setLiList([
        { name: 'Accueil', to: 'home', offset: 0, duration: 500 },
        { name: 'Infos générales', to: 'infos', offset: -80, duration: 1000 },
        { name: 'Éduc/Éxpe', to: 'educexpe', offset: -80, duration: 1000 },
        { name: 'Compétences', to: 'skills', offset: -80, duration: 1000 },
        { name: 'Projets', to: 'projects', offset: -80, duration: 1000 }
      ]);
      setNavLeftInteraction(
        <ul>
          <NavLeftInteraction tabIndex={0} onClick={logOut} onKeyPress={logOut} title="Déconnexion">
            <FontAwesomeIcon icon="arrow-right-from-bracket" />
          </NavLeftInteraction>
        </ul>
      );
    }
  }, [location, navigate, logOut]);

  return <Nav liList={liList} navLeftInteraction={navLeftInteraction} />;
};

export default NavBar;
