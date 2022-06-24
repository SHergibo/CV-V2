import NavContext from './../../Context/NavContext';
import ContextRoute from '../../Routes/Context.route';
import NavBar from './NavBar';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const generalInfo = require('../../../cypress/fixtures/generalInfo.json');

describe('<NavBar> and <Nav> Testing', () => {
  it('Test <NavBar> and <Nav> when url is "/"', () => {
    open(
      <NavContext.Provider value={{ generalInfo, headerRef: null }}>
        <CypressMount>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route element={<ContextRoute />}>
                <Route path="/" element={<NavBar />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </CypressMount>
      </NavContext.Provider>
    );
    cy.findByText('Accueil').should('exist');
    cy.findByText('À propos').should('exist');
    cy.findByText('Portfolio').should('exist');
    cy.findByText('Résumé').should('exist');
    cy.findByText('Contact').should('exist');
    cy.get('[aria-label="Vers mon compte linkedin"]').should('exist');
    cy.get('[aria-label="Vers mon compte github"]').should('exist');
  });
  it('Test <NavBar> and <Nav> when url is "/admin"', () => {
    open(
      <NavContext.Provider value={{ generalInfo, headerRef: null }}>
        <CypressMount>
          <MemoryRouter initialEntries={['/admin']}>
            <Routes>
              <Route element={<ContextRoute />}>
                <Route path="/admin" element={<NavBar />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </CypressMount>
      </NavContext.Provider>
    );
    cy.findByText('Accueil').should('exist');
    cy.findByText('Infos générales').should('exist');
    cy.findByText('Éduc/Éxpe').should('exist');
    cy.findByText('Compétences').should('exist');
    cy.findByText('Projets').should('exist');
    cy.findByTitle('Déconnexion').should('exist');
  });
  it('Test <NavBar> and <Nav> when url is "/" and screen width is lower than 960 pixels', () => {
    open(
      <NavContext.Provider value={{ generalInfo, headerRef: null }}>
        <CypressMount>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route element={<ContextRoute />}>
                <Route path="/" element={<NavBar />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </CypressMount>
      </NavContext.Provider>
    );
    cy.viewport('iphone-6');
    cy.findByText('Accueil').should('not.be.visible');
    cy.findByText('À propos').should('not.be.visible');
    cy.findByText('Portfolio').should('not.be.visible');
    cy.findByText('Résumé').should('not.be.visible');
    cy.findByText('Contact').should('not.be.visible');
    cy.get('[aria-label="Vers mon compte linkedin"]').should('not.be.visible');
    cy.get('[aria-label="Vers mon compte github"]').should('not.be.visible');
    cy.get('#burger-svg').should('exist');
    cy.get('#burger-svg').click();
    cy.get('#burger-svg').should('not.exist');
    cy.get('#delete-svg').should('exist');
    cy.findByText('Accueil').should('be.visible');
    cy.findByText('À propos').should('be.visible');
    cy.findByText('Portfolio').should('be.visible');
    cy.findByText('Résumé').should('be.visible');
    cy.findByText('Contact').should('be.visible');
    cy.get('[aria-label="Vers mon compte linkedin"]').should('be.visible');
    cy.get('[aria-label="Vers mon compte github"]').should('be.visible');
    cy.get('#delete-svg').click();
    cy.get('#delete-svg').should('not.exist');
    cy.get('#burger-svg').should('exist');
    cy.findByText('Accueil').should('not.be.visible');
    cy.findByText('À propos').should('not.be.visible');
    cy.findByText('Portfolio').should('not.be.visible');
    cy.findByText('Résumé').should('not.be.visible');
    cy.findByText('Contact').should('not.be.visible');
    cy.get('[aria-label="Vers mon compte linkedin"]').should('not.be.visible');
    cy.get('[aria-label="Vers mon compte github"]').should('not.be.visible');
  });
  it('Test <NavBar> and <Nav> when url is "/admin" and screen width is lower than 960 pixels', () => {
    open(
      <NavContext.Provider value={{ generalInfo, headerRef: null }}>
        <CypressMount>
          <MemoryRouter initialEntries={['/admin']}>
            <Routes>
              <Route element={<ContextRoute />}>
                <Route path="/admin" element={<NavBar />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </CypressMount>
      </NavContext.Provider>
    );
    cy.viewport('iphone-6');
    cy.findByText('Accueil').should('not.be.visible');
    cy.findByText('Infos générales').should('not.be.visible');
    cy.findByText('Éduc/Éxpe').should('not.be.visible');
    cy.findByText('Compétences').should('not.be.visible');
    cy.findByText('Projets').should('not.be.visible');
    cy.findByTitle('Déconnexion').should('not.be.visible');
    cy.get('#burger-svg').should('exist');
    cy.get('#burger-svg').click();
    cy.get('#burger-svg').should('not.exist');
    cy.get('#delete-svg').should('exist');
    cy.findByText('Accueil').should('be.visible');
    cy.findByText('Infos générales').should('be.visible');
    cy.findByText('Éduc/Éxpe').should('be.visible');
    cy.findByText('Compétences').should('be.visible');
    cy.findByText('Projets').should('be.visible');
    cy.findByTitle('Déconnexion').should('be.visible');
    cy.get('#delete-svg').click();
    cy.get('#delete-svg').should('not.exist');
    cy.get('#burger-svg').should('exist');
    cy.findByText('Accueil').should('not.be.visible');
    cy.findByText('Infos générales').should('not.be.visible');
    cy.findByText('Éduc/Éxpe').should('not.be.visible');
    cy.findByText('Compétences').should('not.be.visible');
    cy.findByText('Projets').should('not.be.visible');
    cy.findByTitle('Déconnexion').should('not.be.visible');
  });
});
