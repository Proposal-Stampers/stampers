import connectors from '@/helpers/connectors.json';
import networks from '@/helpers/networks.json';

const config = {
  env: 'master',
  connectors,
  networks
};

const domainName = window.location.hostname;
if (domainName.includes('localhost')) config.env = 'local';
if (domainName === 'demo.stampers.app' || domainName === 'beta.stampers.app')
  config.env = 'develop';

export default config;
