import {KeycloakConfig} from 'keycloak-angular';

// Add here your keycloak setup infos
export const keycloakConfig: KeycloakConfig = {
  url: 'https://sso.bridge129.com/auth',
  realm: 'place4me',
  clientId: 'place4me-ng'
};

export const environment = {
  production: false,
  apiUrl: 'https://api.place4me.it/',
  keycloak: keycloakConfig
};
