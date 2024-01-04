const oktaConfig = {
    issuer: 'https://{dev-n20wgln8v75p3sza.us.auth0.com}/oauth2/default',
    clientId: '{yhouX741DbTpLG1Y4wE8A7BmVUYitgUe}',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  };
  
  export default oktaConfig;
  