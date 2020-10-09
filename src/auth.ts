import Vue from 'vue';
import { LockPlugin } from '@stampers/lock/plugins/vue';
import confluxPortal from '@stampers/lock/connectors/conflux-portal';
import config from '@/helpers/config';

const options: any = { connectors: [] };
const connectors = { 'conflux-portal': confluxPortal };

Object.entries(config.connectors).forEach((connector: any) => {
  options.connectors.push({
    key: connector[0],
    connector: connectors[connector[0]],
    options: connector[1].options
  });
});

Vue.use(LockPlugin, options);
