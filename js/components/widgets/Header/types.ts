export type HeaderData = {
  name: string;
  nav: {
    target: string;
    content: string;
    type: 'ancor' | 'url';
  };
  langs: string[];
};
