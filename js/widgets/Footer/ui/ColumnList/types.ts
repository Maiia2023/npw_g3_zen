export type ColumnItem = {
  url: string;
  content: string;
  type: 'url';
};

export type ColumnList = ColumnItem[];

export type Title = {
  priority: string | number;
  content: string;
};

export type Column = {
  title: Title;
  links: ColumnItem[];
};
