import HomePage from './HomePage';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ContextRoute from '../../Routes/Context.route';

describe('<HomePage> Testing', () => {
  it('Testing if all children component are in Homage component', () => {
    cy.intercept('GET', `${Cypress.env('api_domain')}/api/${Cypress.env('api_version')}/infos`, { fixture: 'generalInfo.json' });
    cy.intercept('GET', `${Cypress.env('api_domain')}/api/${Cypress.env('api_version')}/projects/pagination?page=0`, { fixture: 'portfolio.json' });
    cy.intercept('GET', `${Cypress.env('api_domain')}/api/${Cypress.env('api_version')}/educs-exps/educs-exps-list`, { fixture: 'educExp.json' });
    cy.intercept('GET', `${Cypress.env('api_domain')}/api/${Cypress.env('api_version')}/skills/skills-list`, { fixture: 'skillList.json' });
    open(
      <CypressMount>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route element={<ContextRoute />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </CypressMount>
    );
    cy.get('#welcome').should('exist');
    cy.get('#about').should('exist');
    cy.get('#portfolio').should('exist');
    cy.get('#resume').should('exist');
    cy.get('#contact').should('exist');
  });
});
