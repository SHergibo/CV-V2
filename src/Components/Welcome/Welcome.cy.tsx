import Welcome from './Welcome';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('<Welcome>', () => {
  it('mounts', () => {
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
  });
});
