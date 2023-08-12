import {
  Title,
  Image,
  Link,
} from '../../schema/types';

export interface Props {
  name: string;
  title: Title;
  texts: string[];
  image: Image;
  links?: {
    apple: Link;
    google: Link;
  };
};
