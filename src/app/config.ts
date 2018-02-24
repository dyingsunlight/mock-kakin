import { environment } from '../environments/environment';

const base = environment.production ? 'mock-kakin/' : '';
const images = base + '/assets/images';
export const url = {
  base: environment.production ? 'mock-kakin/' : '',
  images: images,
  backgrounds: images + '/backgrounds/',
  icons: images + '/icons/',
  gacha: images + '/gacha/'
};

