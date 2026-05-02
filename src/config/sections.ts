import type { StaticImageData } from "next/image";
import storefrontImage from "@/assets/storefront-hq.jpg";
import brandManifestoImage from "@/assets/brand-manifesto.jpg";
import saintFinaCoverImage from "@/assets/saint-fina-cover.jpg";
import saintFinaStoryImage from "@/assets/saint-fina-story.jpg";
import brandIdentityStoryImage from "@/assets/brand-identity-story.jpg";

export type ProductItem = {
  title: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  alt: string;
  image: StaticImageData;
};

export const heroContent = {
  eyebrow: "Cremeria Italiana em Sorocaba",
  title: "A tradicao italiana servida com afeto em cada detalhe.",
  description:
    "Panes, doces e gelato preparados com tecnica artesanal para transformar cada visita em uma experiencia memoravel.",
} as const;

export const brandStoryContent = {
  title: "Uma casa inspirada na elegancia da Italia",
  paragraphs: [
    "A Cremeria Santa Fina nasce para honrar a historia da gastronomia italiana com uma curadoria artesanal de sabores.",
    "Cada preparo combina tecnica, tempo e ingredientes selecionados para criar um ambiente acolhedor, sofisticado e autentico.",
  ],
  image: storefrontImage,
  imageAlt: "Fachada da Cremeria Santa Fina no Shopping Olga",
} as const;

export const presentationVideoContent = {
  title: "Apresentacao da marca em movimento",
  description:
    "Um recorte visual da experiencia Santa Fina: atmosfera acolhedora, identidade sofisticada e acabamento artesanal.",
  videoSrc: "/videos/presentation.mp4",
} as const;

export const productHighlights: ProductItem[] = [
  {
    title: "Panes artesanais",
    description:
      "Fermentacao cuidadosa e casca crocante para valorizar o sabor tradicional.",
  },
  {
    title: "Doce italiano",
    description: "Receitas classicas com acabamento refinado para momentos especiais.",
  },
  {
    title: "Gelato cremoso",
    description: "Textura suave e ingredientes selecionados em combinacoes autorais.",
  },
  {
    title: "Caffe e harmonizacao",
    description: "Bebidas que complementam a experiencia completa da cremeria.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Manifesto da marca",
    alt: "Peça institucional com identidade visual da Cremeria Santa Fina",
    image: brandManifestoImage,
  },
  {
    title: "Quem foi Santa Fina",
    alt: "Arte institucional da historia de Santa Fina",
    image: saintFinaCoverImage,
  },
  {
    title: "Origem e tradicao",
    alt: "Narrativa visual da historia de Santa Fina e sua origem italiana",
    image: saintFinaStoryImage,
  },
  {
    title: "Essencia da identidade",
    alt: "Material visual da identidade da marca Cremeria Santa Fina",
    image: brandIdentityStoryImage,
  },
];

export const socialProofContent = {
  title: "O que torna a experiencia Santa Fina especial",
  points: [
    "Cada visita combina acolhimento, beleza e sabores preparados com cuidado artesanal.",
    "A vitrine, os detalhes e o ambiente traduzem o mesmo carinho que vai para cada receita.",
    "Clientes voltam porque se sentem em casa, com um toque italiano elegante em cada momento.",
  ],
} as const;

export const trustItems = [
  "Estamos em um endereco facil de encontrar no Shopping Olga, com ambiente pensado para receber bem.",
  "Atendimento de segunda a sabado, sempre com padrao de qualidade e cuidado nos detalhes.",
  "Da identidade visual ao atendimento no balcao, tudo foi desenhado para transmitir charme e autenticidade.",
] as const;
