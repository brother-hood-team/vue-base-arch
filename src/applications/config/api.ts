const api = 'http://localhost:9000';

const apiConfig = {
  api_url_server: `${api}`,
  api_graphql: `${api}/graphql`,
  client_id: 'clientid',
  client_secret: 'secret',
  grant_type: 'password',
  token_endpoint: '/oauth/token',
};
export default apiConfig;
