// Add here your keycloak setup infos
import {KeycloakConfig} from 'keycloak-angular';

export const keycloakConfig: KeycloakConfig = {
  url: 'https://sso.e-g.gs/auth',
  realm: 'it_dev',
  clientId: 'it-dev-ng'
};

export const environment = {
  production: true,
  apiUrl: 'https://api.it-it.dev',
  keycloak: keycloakConfig
};
