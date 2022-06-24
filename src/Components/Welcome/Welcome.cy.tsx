import Welcome from './Welcome';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('<Welcome> and <WelcomeSection> Testing', () => {
  it('Testing for Welcome when url is "/"', () => {
    cy.fixture('generalInfo').then((generalInfo) => {
      open(
        <CypressMount>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<Welcome generalInfo={generalInfo} />} />
            </Routes>
          </MemoryRouter>
        </CypressMount>
      );
    });
    cy.findByText('Bienvenue').should('exist');
    cy.findByText('Sacha Hergibo').should('exist');
    cy.findByText('Test6').should('exist');
    cy.findByText('Test').should('exist');
  });
  it('Testing for Welcome when generalInfo has no profession title', () => {
    cy.fixture('generalInfo')
      .then((generalInfo) => {
        generalInfo.professionTitles = [];
      })
      .then((generalInfo) => {
        open(
          <CypressMount>
            <MemoryRouter initialEntries={['/']}>
              <Routes>
                <Route path="/" element={<Welcome generalInfo={generalInfo} />} />
              </Routes>
            </MemoryRouter>
          </CypressMount>
        );
      });
    cy.findByText('Bienvenue').should('exist');
    cy.findByText('Sacha Hergibo').should('exist');
    cy.findByText('Je suis un').should('not.exist');
  });
  it('Testing for Welcome when url is "/admin"', () => {
    cy.fixture('generalInfo').then((generalInfo) => {
      open(
        <CypressMount>
          <MemoryRouter initialEntries={['/admin']}>
            <Routes>
              <Route path="/admin" element={<Welcome generalInfo={generalInfo} />} />
            </Routes>
          </MemoryRouter>
        </CypressMount>
      );
    });
    cy.findAllByText('Administration').should('have.length', 2);
    cy.findByText('Sacha Hergibo').should('exist');
  });
  it('Testing for Welcome without generalInfo prop when url is "/"', () => {
    open(
      <CypressMount>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Welcome generalInfo={null} />} />
          </Routes>
        </MemoryRouter>
      </CypressMount>
    );
    cy.findByText('Bienvenue').should('exist');
    cy.findByText('Mon site CV').should('exist');
  });
  it('Testing for Welcome without generalInfo prop when url is "/admin"', () => {
    open(
      <CypressMount>
        <MemoryRouter initialEntries={['/admin']}>
          <Routes>
            <Route path="/admin" element={<Welcome generalInfo={null} />} />
          </Routes>
        </MemoryRouter>
      </CypressMount>
    );

    cy.findAllByText('Administration').should('have.length', 2);
    cy.findByText('Mon site CV').should('exist');
  });
});
