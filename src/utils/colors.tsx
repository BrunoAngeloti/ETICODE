import { Tag } from "@/types/Blog";

export function getTagColor(tag: Tag): string {
  switch (tag.tag) {
    case 'Computabilidade':
      return 'bg-primary-300';
      
    case 'Moral':
      return 'bg-primary-400';
    case 'Computação':
      return 'bg-primary-400';

    case 'Ética':
      return 'bg-primary-500';
    case 'Igualdade':
      return 'bg-primary-500';

    default:
      return 'bg-black';
  }
}
