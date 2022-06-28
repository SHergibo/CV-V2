import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ContextRoute from '../../Routes/Context.route';
import AboutJob from './AboutJob';
import { open } from '../../CypressUtils/cypressTest-open';
import CypressMount from '../../CypressUtils/CypressMount';

describe('<AboutJob> Testing', () => {
  it('Testing if fas fontAwesome icon works', () => {
    cy.fixture('generalInfo').then((generalInfo) => {
      open(
        <CypressMount>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route element={<ContextRoute />}>
                <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </CypressMount>
      );
    });

    cy.get('[data-icon=2]').should('exist');
    cy.get('[data-icon=4]').should('exist');
  });
  it('Testing if fab fontAwesome icon works', () => {
    cy.fixture('generalInfo')
      .then((generalInfo) => {
        generalInfo.professionTitles = [{ nameProfessionTitle: 'Test', fontAwesomeIcon: { label: 'amazon', value: 'amazon', prefix: 'fab' }, svgIconProfTitle: '', id: '62a9e3b75bf1606c26b7a1cd' }];
      })
      .then((generalInfo) => {
        open(
          <CypressMount>
            <MemoryRouter initialEntries={['/']}>
              <Routes>
                <Route element={<ContextRoute />}>
                  <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
                </Route>
              </Routes>
            </MemoryRouter>
          </CypressMount>
        );
      });

    cy.get('[data-icon=amazon]').should('exist');
  });
  it('Testing zero profession title and screen width is higher than 960 pixels', () => {
    cy.fixture('generalInfo')
      .then((generalInfo) => {
        generalInfo.professionTitles = [];
      })
      .then((generalInfo) => {
        open(
          <CypressMount>
            <MemoryRouter initialEntries={['/']}>
              <Routes>
                <Route element={<ContextRoute />}>
                  <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
                </Route>
              </Routes>
            </MemoryRouter>
          </CypressMount>
        );
      });

    cy.get('#aboutJob').should('exist');
    cy.get('#aboutJob')
      .children()
      .children()
      .siblings('div')
      .should('have.length', 4)
      .each(($el) => {
        cy.wrap($el).should('be.empty');
      });
  });
  it('Testing zero profession title and screen width is lower than 960 pixels', () => {
    cy.fixture('generalInfo')
      .then((generalInfo) => {
        generalInfo.professionTitles = [];
      })
      .then((generalInfo) => {
        open(
          <CypressMount>
            <MemoryRouter initialEntries={['/']}>
              <Routes>
                <Route element={<ContextRoute />}>
                  <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
                </Route>
              </Routes>
            </MemoryRouter>
          </CypressMount>
        );
      });
    cy.viewport('iphone-6');
    cy.get('#aboutJob').should('not.exist');
  });
  it('Testing one profession title', () => {
    cy.fixture('generalInfo')
      .then((generalInfo) => {
        generalInfo.professionTitles = [{ nameProfessionTitle: 'Test', fontAwesomeIcon: { label: 'amazon', value: 'amazon', prefix: 'fab' }, svgIconProfTitle: '', id: '62a9e3b75bf1606c26b7a1cd' }];
      })
      .then((generalInfo) => {
        open(
          <CypressMount>
            <MemoryRouter initialEntries={['/']}>
              <Routes>
                <Route element={<ContextRoute />}>
                  <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
                </Route>
              </Routes>
            </MemoryRouter>
          </CypressMount>
        );
      });

    cy.get('#aboutJob').should('exist');
    cy.get('[data-icon=amazon]').should('exist');
    cy.findByText('Test').should('exist');
    cy.get('#aboutJob')
      .children()
      .children()
      .siblings('div')
      .should('have.length', 3)
      .each(($el, index) => {
        if (index !== 1) {
          cy.wrap($el).should('be.empty');
        } else {
          cy.wrap($el)
            .children()
            .each(($el, index) => {
              if (index === 0) {
                cy.wrap($el).get('[data-icon=amazon]').should('exist');
              }
              if (index === 1) {
                cy.wrap($el).contains('Test');
              }
            });
        }
      });
  });
  it('Testing two profession titles', () => {
    cy.fixture('generalInfo').then((generalInfo) => {
      open(
        <CypressMount>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route element={<ContextRoute />}>
                <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </CypressMount>
      );
    });

    cy.get('#aboutJob').should('exist');
    cy.get('[data-icon=2]').should('exist');
    cy.findByText('Test').should('exist');
    cy.get('[data-icon=4]').should('exist');
    cy.findByText('Test6').should('exist');
    cy.get('[data-icon=2]').parent().siblings('div').should('have.length', 3);
    cy.get('#aboutJob')
      .children()
      .children()
      .siblings('div')
      .each(($el, index) => {
        if (index === 0 || index === 3) {
          cy.wrap($el).should('be.empty');
        } else if (index === 1) {
          cy.wrap($el)
            .children()
            .each(($el, index) => {
              if (index === 0) {
                cy.wrap($el).get('[data-icon=2]').should('exist');
              }
              if (index === 1) {
                cy.wrap($el).contains('Test');
              }
            });
        } else if (index === 2) {
          cy.wrap($el)
            .children()
            .each(($el, index) => {
              if (index === 0) {
                cy.wrap($el).get('[data-icon=4]').should('exist');
              }
              if (index === 1) {
                cy.wrap($el).contains('Test6');
              }
            });
        }
      });
  });
  it('Testing three profession titles', () => {
    cy.fixture('generalInfo')
      .then((generalInfo) => {
        generalInfo.professionTitles = [
          { nameProfessionTitle: 'Test', fontAwesomeIcon: { label: '2', value: '2', prefix: 'fas' }, svgIconProfTitle: '', id: '62a9e3b75bf1606c26b7a1cd' },
          { nameProfessionTitle: 'Test6', fontAwesomeIcon: { label: '4', value: '4', prefix: 'fas' }, svgIconProfTitle: '', id: '62a9e3be5bf1606c26b7a1d1' },
          { nameProfessionTitle: 'Amazon', fontAwesomeIcon: { label: 'amazon', value: 'amazon', prefix: 'fab' }, svgIconProfTitle: '', id: '62a9e3b75bf1606c26b7a1cd' }
        ];
      })
      .then((generalInfo) => {
        open(
          <CypressMount>
            <MemoryRouter initialEntries={['/']}>
              <Routes>
                <Route element={<ContextRoute />}>
                  <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
                </Route>
              </Routes>
            </MemoryRouter>
          </CypressMount>
        );
      });

    cy.get('#aboutJob').should('exist');
    cy.get('[data-icon=2]').should('exist');
    cy.findByText('Test').should('exist');
    cy.get('[data-icon=4]').should('exist');
    cy.findByText('Test6').should('exist');
    cy.get('[data-icon=amazon]').should('exist');
    cy.findByText('Amazon').should('exist');
    cy.get('#aboutJob').children().children().siblings('div').should('have.length', 3);
  });
  it('Testing four profession titles', () => {
    cy.fixture('generalInfo')
      .then((generalInfo) => {
        generalInfo.professionTitles = [
          { nameProfessionTitle: 'Test', fontAwesomeIcon: { label: '2', value: '2', prefix: 'fas' }, svgIconProfTitle: '', id: '62a9e3b75bf1606c26b7a1cd' },
          { nameProfessionTitle: 'Test6', fontAwesomeIcon: { label: '4', value: '4', prefix: 'fas' }, svgIconProfTitle: '', id: '62a9e3be5bf1606c26b7a1d1' },
          { nameProfessionTitle: 'Amazon', fontAwesomeIcon: { label: 'amazon', value: 'amazon', prefix: 'fab' }, svgIconProfTitle: '', id: '62a9e3b75bf1606c26b7a1cv' },
          { nameProfessionTitle: 'Github', fontAwesomeIcon: { label: 'github', value: 'github', prefix: 'fab' }, svgIconProfTitle: '', id: '62a9e3b75bf1606c26b7a1cf' }
        ];
      })
      .then((generalInfo) => {
        open(
          <CypressMount>
            <MemoryRouter initialEntries={['/']}>
              <Routes>
                <Route element={<ContextRoute />}>
                  <Route path="/" element={<AboutJob generalInfo={generalInfo} />} />
                </Route>
              </Routes>
            </MemoryRouter>
          </CypressMount>
        );
      });

    cy.get('#aboutJob').should('exist');
    cy.get('[data-icon=2]').should('exist');
    cy.findByText('Test').should('exist');
    cy.get('[data-icon=4]').should('exist');
    cy.findByText('Test6').should('exist');
    cy.get('[data-icon=amazon]').should('exist');
    cy.findByText('Amazon').should('exist');
    cy.get('[data-icon=github]').should('exist');
    cy.findByText('Github').should('exist');
    cy.get('#aboutJob').children().children().siblings('div').should('have.length', 4);
  });
});
