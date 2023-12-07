export type Tag = {
  tag: 'Ética' | 'Moral'  | 'Computação'  | 'Igualdade'  | 'Computabilidade' 
}

export type Blog = {
  title: string;
  description: string;
  content: string;
  tags: Tag[];
  createdat: string;
  updatedat: string;
  coverImage: string;
  authorName: string;
  authorId: string;
  authorImage: string;
}
