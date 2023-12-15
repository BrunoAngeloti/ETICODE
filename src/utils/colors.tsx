import { Tag } from "@/types/Blog";

export function getTagColor(tag: Tag): string {
  switch (tag) {
    // Temas de ética e moral - cores mais claras
    case 'Ética':
    case 'Igualdade':
    case 'Moral':
    case 'Equidade':
    case 'Inclusão':
    case 'Transparência':
      return 'bg-primary-300';

    case 'Privacidade':
    case 'Diversidade':
    case 'TechSociedade':
      return 'bg-primary-400';

    // Temas de computação - cores mais escuras
    case 'Computação':
    case 'Cibersegurança':
    case 'IA':
      return 'bg-primary-500';

    case 'Robótica':
    case 'IOT':
    case 'Blockchain':
    case 'Jogos':
      return 'bg-primary-700';
      
    default:
      return 'bg-black';
  }
}
