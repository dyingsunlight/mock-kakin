import { environment } from '../environments/environment';

const images = environment.resourcesPath + 'assets/images/';
export const url = {
  base: environment.resourcesPath,
  images: images,
  backgrounds: images + 'backgrounds/',
  icons: images + 'icons/',
  gacha: images + 'gacha/'
};



