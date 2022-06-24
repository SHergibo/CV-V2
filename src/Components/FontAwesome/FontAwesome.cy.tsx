import FontAwesome from './FontAwesome';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';

describe('<FontAwesome> Testing', () => {
  it('Passing github prefix and value', () => {
    open(
      <CypressMount>
        <FontAwesome prefix={'fab'} value={'github'} />
      </CypressMount>
    );
    cy.get('[data-icon=github]').should('exist');
  });
  it('Passing Logout prefix and value', () => {
    open(
      <CypressMount>
        <FontAwesome prefix={'fas'} value={'arrow-right-from-bracket'} />
      </CypressMount>
    );
    cy.get('[data-icon=arrow-right-from-bracket]').should('exist');
  });
});
