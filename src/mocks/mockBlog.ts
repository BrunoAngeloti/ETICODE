import { Blog } from "@/types/Blog";

export const mockBlogs = [
  {
    title: 'As mulheres na computação: O que podemos fazer',
    description: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    content: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    tags: [
      {
        tag: 'Computação'
      },
      {
        tag: 'Igualdade'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    coverImage: '/mocks/mockblog2.png',
    authorName: 'Maria Eduarda',
    authorId: '1'
  },
  {
    title: 'A era da robótica: O que podemos fazer',
    description: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    content: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    tags: [
      {
        tag: 'Computabilidade'
      },
      {
        tag: 'Moral'
      },
      {
        tag: 'Ética'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    coverImage: '/mocks/mockblog1.png',
    authorName: 'Bruno Angeloti',
    authorId: '2'
  },
  {
    title: 'As mulheres na computação: O que podemos fazer',
    description: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    content: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    tags: [
      {
        tag: 'Computação'
      },
      {
        tag: 'Igualdade'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
    coverImage: '/mocks/mockblog2.png',
    authorName: 'Maria Eduarda',
    authorId: '3'
  }
] as Blog[]