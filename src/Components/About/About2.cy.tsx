import { useState } from 'react';
import { IGeneralInfo } from '../../interfaces';
import { IFetchLoaded } from '../../Pages/HomePage';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ContextRoute from '../../Routes/Context.route';
import About from './About';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';

const TestingAbout = () => {
  const [, setGeneralInfo] = useState<IGeneralInfo | null>(null);
  const [, setFetchLoaded] = useState<IFetchLoaded>({
    info: { isLoaded: false, error: false },
    portfolio: { isLoaded: false, error: false },
    educExp: { isLoaded: false, error: false },
    skill: { isLoaded: false, error: false }
  });
  return <About setGeneralInfo={setGeneralInfo} setFetchLoaded={setFetchLoaded} />;
};

describe('<About> Testing', () => {
  it('Testing About with profile picture img', () => {
    cy.fixture('generalInfo').then((generalInfo) => {
      generalInfo.profilePic = { fileName: '1656329030672-Hergibo_Sacha.jpg', alt: 'Sacha Hergibo', id: '62b993462aa685b97ab6cf13' };
      cy.intercept('GET', `${Cypress.env('api_domain')}/api/${Cypress.env('api_version')}/infos`, generalInfo);
    });
    open(
      <CypressMount>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route element={<ContextRoute />}>
              <Route path="/" element={<TestingAbout />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </CypressMount>
    );

    cy.findByAltText('Sacha Hergibo').should('exist');
    cy.findByText('sdsdsdd').should('exist');
    cy.findByText('0497134030').should('exist');
    cy.findByText('sachahergibo@gmail.com').should('exist');
    cy.findByText('Route de Velaines, 24A 7543 Mourcourt').should('exist');
    cy.findByText('24/04/1992').should('exist');
    cy.findByText('Détenteur du permis B').should('exist');
    cy.findByText('Test').should('exist');
    cy.get('[data-icon=2]').should('exist');
    cy.findByText('Test6').should('exist');
    cy.get('[data-icon=4]').should('exist');
  });
});
