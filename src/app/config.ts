import { environment } from '../environments/environment';

const base = environment.production ? 'http://mock-kakin.cdn.bcebos.com/mock-kakin/' : '';
const images = base + '/assets/images/';
export const url = {
  base: base,
  images: images,
  backgrounds: images + '/backgrounds/',
  icons: images + '/icons/',
  gacha: images + '/gacha/'
};



