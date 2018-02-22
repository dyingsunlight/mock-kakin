import { environment } from '../environments/environment';

let base = '/';

if (environment.production) {
  base = `/mock-kakin/`;
}
console.log(environment.production);
export const url = {
  base: base,
  basePath: base + 'assets/images/',
  imageBasePath: base + 'assets/images/icons/',
  gachaBasePath: base + 'assets/images/gacha/'
};
