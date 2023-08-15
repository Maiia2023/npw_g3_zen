import {
  Title,
} from '../../schema/types';

export interface Brand {
  source: string;
  description: string;
};

export interface Props {
  name: string;
  title: Title;
  brands: {
    light: Brand[];
    dark: Brand[];
  };
};
