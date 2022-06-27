const { REACT_APP_API_DOMAIN, REACT_APP_API_VERSION } = process.env;

export const apiDomain: string | undefined = REACT_APP_API_DOMAIN || Cypress.env('api_domain');
export const apiVersion: string | undefined = REACT_APP_API_VERSION || Cypress.env('api_version');
