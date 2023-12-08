export type Tag = 'Ética' | 'Moral'  | 'Computação'  | 'Igualdade'  | 'Computabilidade' 

export type Blog = {
  id: string;
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
