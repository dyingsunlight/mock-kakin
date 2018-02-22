import { environment } from '../environments/environment';

let base = 'assets';

if (environment.production) {
  base = `${base}/mock-kakin`;
}
console.log(environment.production);
export const url = {
  basePath: base + '/images/',
  imageBasePath: base + '/images/icons/',
  gachaBasePath: base + '/images/gacha/'
};
