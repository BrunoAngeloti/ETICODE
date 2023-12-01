import { Blog } from "@/types/Blog";

export const mockBlogs = [
  {
    title: 'As mulheres na computação: O que podemos fazer',
    description: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    content: '<h1>Explorando as Maravilhas do Espaço</h1><br><p><strong>O espaço</strong>, a última fronteira, tem fascinado a humanidade por séculos. <em>Desde as primeiras observações astronômicas</em> até os modernos avanços na exploração espacial, continuamos buscando entender o vasto universo ao nosso redor.</p><br><h2>Os Primeiros Passos na Lua</h2><br><p>Um dos maiores marcos da exploração espacial foi a chegada do homem à Lua. Este momento histórico não apenas provou que é possível viajar para outros corpos celestes, mas também abriu caminho para futuras explorações.</p><br><ul><li><strong>Neil Armstrong</strong> - o primeiro homem a pisar na Lua.</li><li><strong>Buzz Aldrin</strong> - acompanhou Armstrong na missão Apollo 11.</li><li>Essa missão marcou um ponto de virada na história da exploração espacial.</li></ul><br><h3>Telescópios e a Observação do Universo</h3><br><p>Telescópios, tanto terrestres quanto espaciais, desempenham um papel crucial em nossa compreensão do universo. Eles nos permitem ver <u>galáxias distantes</u>, <a href=\"https://exemplo.com/nebulosas\">nebulosas</a> e outros fenômenos cósmicos.</p><br><h4>O Futuro da Exploração Espacial</h4><br><p>À medida que a tecnologia avança, o futuro da exploração espacial parece mais promissor. Com missões planejadas para Marte e além, estamos à beira de novas e emocionantes descobertas sobre o nosso lugar no universo.</p><br><ol><li>Missões tripuladas a Marte.</li><li>Estudos avançados sobre buracos negros.</li><li>Exploração de luas de Júpiter e Saturno.</li></ol><br><blockquote><p>"A exploração do espaço é um esforço que nos une. Olhando para as estrelas, lembramos do nosso lugar no universo."</p></blockquote><br><h5>Cooperação Internacional na Exploração Espacial</h5><br><p>Projetos como a Estação Espacial Internacional mostram como a cooperação internacional pode levar a conquistas notáveis no espaço.</p><br><h6>Desafios e Oportunidades</h6><br><p>A jornada para explorar o espaço está repleta de desafios, mas cada desafio traz consigo novas oportunidades de descoberta e inovação.</p>',
    tags: [
      {
        tag: 'Computação'
      },
      {
        tag: 'Igualdade'
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    coverImage: '/mocks/mockblog3.png',
    authorName: 'Maria Eduarda',
    authorId: '1',
    authorImage: '/mocks/mockperson.png'
  },
  {
    title: 'A era da robótica: O que podemos fazer',	
    description: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    content: '<h1>Explorando as Maravilhas do Espaço</h1><br><p><strong>O espaço</strong>, a última fronteira, tem fascinado a humanidade por séculos. <em>Desde as primeiras observações astronômicas</em> até os modernos avanços na exploração espacial, continuamos buscando entender o vasto universo ao nosso redor.</p><br><h2>Os Primeiros Passos na Lua</h2><br><p>Um dos maiores marcos da exploração espacial foi a chegada do homem à Lua. Este momento histórico não apenas provou que é possível viajar para outros corpos celestes, mas também abriu caminho para futuras explorações.</p><br><ul><li><strong>Neil Armstrong</strong> - o primeiro homem a pisar na Lua.</li><li><strong>Buzz Aldrin</strong> - acompanhou Armstrong na missão Apollo 11.</li><li>Essa missão marcou um ponto de virada na história da exploração espacial.</li></ul><br><h3>Telescópios e a Observação do Universo</h3><br><p>Telescópios, tanto terrestres quanto espaciais, desempenham um papel crucial em nossa compreensão do universo. Eles nos permitem ver <u>galáxias distantes</u>, <a href=\"https://exemplo.com/nebulosas\">nebulosas</a> e outros fenômenos cósmicos.</p><br><h4>O Futuro da Exploração Espacial</h4><br><p>À medida que a tecnologia avança, o futuro da exploração espacial parece mais promissor. Com missões planejadas para Marte e além, estamos à beira de novas e emocionantes descobertas sobre o nosso lugar no universo.</p><br><ol><li>Missões tripuladas a Marte.</li><li>Estudos avançados sobre buracos negros.</li><li>Exploração de luas de Júpiter e Saturno.</li></ol><br><blockquote><p>"A exploração do espaço é um esforço que nos une. Olhando para as estrelas, lembramos do nosso lugar no universo."</p></blockquote><br><h5>Cooperação Internacional na Exploração Espacial</h5><br><p>Projetos como a Estação Espacial Internacional mostram como a cooperação internacional pode levar a conquistas notáveis no espaço.</p><br><h6>Desafios e Oportunidades</h6><br><p>A jornada para explorar o espaço está repleta de desafios, mas cada desafio traz consigo novas oportunidades de descoberta e inovação.</p>',
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    coverImage: '/mocks/mockblog1.png',
    authorName: 'Bruno Angeloti',
    authorId: '2',
    authorImage: '/mocks/mockperson.png'
  },
  {
    title: 'As mulheres na computação: O que podemos fazer',
    description: 'A computação é uma área que tem sido dominada por homens, mas isso não significa que deva ser assim. O que podemos fazer para mudar isso?',
    content: '<h1>Explorando as Maravilhas do Espaço</h1><br><p><strong>O espaço</strong>, a última fronteira, tem fascinado a humanidade por séculos. <em>Desde as primeiras observações astronômicas</em> até os modernos avanços na exploração espacial, continuamos buscando entender o vasto universo ao nosso redor.</p><br><h2>Os Primeiros Passos na Lua</h2><br><p>Um dos maiores marcos da exploração espacial foi a chegada do homem à Lua. Este momento histórico não apenas provou que é possível viajar para outros corpos celestes, mas também abriu caminho para futuras explorações.</p><br><ul><li><strong>Neil Armstrong</strong> - o primeiro homem a pisar na Lua.</li><li><strong>Buzz Aldrin</strong> - acompanhou Armstrong na missão Apollo 11.</li><li>Essa missão marcou um ponto de virada na história da exploração espacial.</li></ul><br><h3>Telescópios e a Observação do Universo</h3><br><p>Telescópios, tanto terrestres quanto espaciais, desempenham um papel crucial em nossa compreensão do universo. Eles nos permitem ver <u>galáxias distantes</u>, <a href=\"https://exemplo.com/nebulosas\">nebulosas</a> e outros fenômenos cósmicos.</p><br><h4>O Futuro da Exploração Espacial</h4><br><p>À medida que a tecnologia avança, o futuro da exploração espacial parece mais promissor. Com missões planejadas para Marte e além, estamos à beira de novas e emocionantes descobertas sobre o nosso lugar no universo.</p><br><ol><li>Missões tripuladas a Marte.</li><li>Estudos avançados sobre buracos negros.</li><li>Exploração de luas de Júpiter e Saturno.</li></ol><br><blockquote><p>"A exploração do espaço é um esforço que nos une. Olhando para as estrelas, lembramos do nosso lugar no universo."</p></blockquote><br><h5>Cooperação Internacional na Exploração Espacial</h5><br><p>Projetos como a Estação Espacial Internacional mostram como a cooperação internacional pode levar a conquistas notáveis no espaço.</p><br><h6>Desafios e Oportunidades</h6><br><p>A jornada para explorar o espaço está repleta de desafios, mas cada desafio traz consigo novas oportunidades de descoberta e inovação.</p>',
    tags: [
      {
        tag: 'Computação'
      },
      {
        tag: 'Igualdade'
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    coverImage: '/mocks/mockblog2.png',
    authorName: 'Maria Eduarda',
    authorId: '3',
    authorImage: '/mocks/mockperson.png'
  }
] as Blog[]