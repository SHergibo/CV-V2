import NavContext from './../../Context/NavContext';
import Logo from './Logo';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';

const generalInfo = require('../../../cypress/fixtures/generalInfo.json');

describe('<Logo> Testing', () => {
  it('Testing Link text with generalInfo', () => {
    open(
      <NavContext.Provider value={{ generalInfo, headerRef: null }}>
        <CypressMount>
          <Logo />
        </CypressMount>
      </NavContext.Provider>
    );
    cy.findByText('Sacha').should('exist');
  });
  it('Testing Link text without generalInfo', () => {
    open(
      <NavContext.Provider value={{ generalInfo: null, headerRef: null }}>
        <CypressMount>
          <Logo />
        </CypressMount>
      </NavContext.Provider>
    );
    cy.findByText('Accueil').should('exist');
  });
});
