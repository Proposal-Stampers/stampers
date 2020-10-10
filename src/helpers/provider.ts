import { Conflux } from 'js-conflux-sdk';
import networks from '@/helpers/networks.json';

export default function getProvider(chainId: number) {
  const rpcUrl: string = networks[chainId].rpcUrl;
  return new Conflux({ url: rpcUrl });
}
