export type Tag = 
'Ética' | 'Igualdade' | 'Computação' | 'Moral' | 
'Equidade' | 'Cibersegurança' | 'IA' | 
'Inclusão' | 'Transparência' | 'Robótica' | 'Privacidade' | 
'Diversidade' | 'TechSociedade' | 'Blockchain' | 'Jogos'

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
  views: number;
}
