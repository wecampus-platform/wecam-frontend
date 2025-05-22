export type ContentItem = {
  subtitle: string;
  body: string | React.ReactNode;
};

export type BoxData = {
  title: string;
  contents: ContentItem[];
};
