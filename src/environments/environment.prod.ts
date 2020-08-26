// Add here your keycloak setup infos
import {KeycloakConfig} from 'keycloak-angular';

export const keycloakConfig: KeycloakConfig = {
  url: 'https://sso.bridge129.com/auth',
  realm: 'place4me',
  clientId: 'place4me-ng'
};

export const environment = {
  production: true,
  apiUrl: 'https://api.place4me.it',
  keycloak: keycloakConfig
};
