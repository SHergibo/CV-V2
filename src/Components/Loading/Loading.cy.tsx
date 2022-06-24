import Loading from './Loading';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';

describe('<Loading> Testing', () => {
  it('Testing loading component when loading', () => {
    cy.fixture('fetchLoaded').then((fetchLoaded) => {
      open(
        <CypressMount>
          <Loading fetchLoaded={fetchLoaded} />
        </CypressMount>
      );
    });
    cy.get('span').should('have.length', 3);
  });
  it('Testing loading component when not loading', () => {
    cy.fixture('fetchLoaded')
      .then((fetchLoaded) => {
        fetchLoaded.info.isLoaded = true;
      })
      .then((fetchLoaded) => {
        open(
          <CypressMount>
            <Loading fetchLoaded={fetchLoaded} />
          </CypressMount>
        );
      });
    cy.get('span').should('not.exist');
  });
});
