import image_1 from './image_post_1.jpeg';
import image_2 from './image_post_2.jpeg';
import image_3 from './image_post_3.jpeg';
import image_4 from './image_post_4.jpeg';
import image_5 from './image_post_5.jpeg';
import image_6 from './image_post_6.jpeg';
import image_7 from './image_post_7.jpeg';
import image_8 from './image_post_8.jpeg';
import image_9 from './image_post_9.jpeg';
import image_10 from './image_post_10.jpeg';
import image_11 from './image_post_11.jpeg';
import image_12 from './image_post_12.jpeg';
import image_default from './image_default.png';

export const Names = [
  'Default',
  'Create',
  'Decoration',
  'Gate',
  'Tree',
  'Castle',
  'WaterFall',
  'Helicopter',
  'Stars',
  'Desk',
  'Train',
  'Mountain',
  'Chill',
];
export const Images = [
  image_default,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  image_10,
  image_11,
  image_12,
];

export function selectPostName(number) {
  switch (number) {
    case 1:
      return 'Created';
    case 2:
      return 'Decoration';
    case 3:
      return 'Gate';
    case 4:
      return 'Tree';
    case 5:
      return 'Castle';
    case 6:
      return 'WaterFall';
    case 7:
      return 'Helicopter';
    case 8:
      return 'Stars';
    case 9:
      return 'Desk';
    case 10:
      return 'Train';
    case 11:
      return 'Mountain';
    case 12:
      return 'Chill';
    default:
      return 'Default';
  }
}

export function selectPostImage(number) {
  switch (number) {
    case 1:
      return image_1;
    case 2:
      return image_2;
    case 3:
      return image_3;
    case 4:
      return image_4;
    case 5:
      return image_5;
    case 6:
      return image_6;
    case 7:
      return image_7;
    case 8:
      return image_8;
    case 9:
      return image_9;
    case 10:
      return image_10;
    case 11:
      return image_11;
    case 12:
      return image_12;
    default:
      return image_default;
  }
}

export function generatePosts(quant) {
  const quantMin = 1; //quantidade minima de imagens
  const quantImg = 12; //quantidade total de imagens usadas/importadas(aumentar quando colocar mais imagens para serem usadas)
  const quantPeople = 12; //quantidade total de autores/pessoas presentes

  var randomDescription1 =
    'Mussum Ipsum, Mussum Ipsum, cacilds vidis litro abertis.';
  var randomDescription2 =
    'Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.';
  var randomPosts = [];

  for (let i = 0; i < quant; i++) {
    var id = i + 1; //geração do id
    var randomImg =
      Math.floor(Math.random() * (quantImg - quantMin + 1)) + quantMin; //numero aleatório de quantMin à quantImg para selecionar a imagem
    var randomPeople =
      Math.floor(Math.random() * (quantPeople - quantMin + 1)) + quantMin; //numero aleatório de quantMin Á quantImg para selecionar a imagem
    var addOrBy = randomImg % 2; //verificar se o randomImg é impar ou par para ser usado para escolher a descrição (randomDescription)
    var randomDescription = addOrBy ? randomDescription1 : randomDescription2;
    var likes = Math.floor(Math.random() * (10000 - 0 + 1)) + 0; //numero aleatório de likes de 0 até 10k

    randomPosts.push({
      id: id,
      name: selectPostName(randomImg),
      image: selectPostImage(randomImg),
      description: randomDescription,
      likes: likes,
      author: randomPeople,
    });
  }

  //Math.floor(Math.random() * (max - min + 1)) + min;

  return randomPosts;
}

export const staticPosts = [
  {
    id: 1,
    name: Names[1],
    image: image_1,
    description:
      'Be creative. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    likes: 30,
    author: 1,
  },
  {
    id: 2,
    name: Names[2],
    image: image_2,
    description:
      'I like to play. Mussum Ipsum, Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    likes: 32,
    author: 2,
  },
  {
    id: 3,
    name: Names[3],
    image: image_3,
    description:
      'Nice view. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    likes: 23,
    author: 3,
  },
  {
    id: 4,
    name: Names[4],
    image: image_4,
    description:
      'My little tree. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    likes: 26,
    author: 4,
  },
  {
    id: 5,
    name: Names[5],
    image: image_5,
    description:
      'Magnific castle. Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    likes: 35,
    author: 5,
  },
  {
    id: 6,
    name: Names[6],
    image: image_6,
    description:
      'Nice lake. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    likes: 20,
    author: 6,
  },
  {
    id: 7,
    name: Names[7],
    image: image_7,
    description:
      "WoW, let's fly. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
    likes: 82,
    author: 7,
  },
  {
    id: 8,
    name: Names[8],
    image: image_8,
    description:
      'Stars. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    likes: 0,
    author: 8,
  },
  {
    id: 9,
    name: Names[9],
    image: image_9,
    description:
      "Let's do the work. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
    likes: 40,
    author: 9,
  },
  {
    id: 10,
    name: Names[10],
    image: image_10,
    description:
      'Take care. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    likes: 22,
    author: 10,
  },
  {
    id: 11,
    name: Names[11],
    image: image_11,
    description:
      'Almost get lost. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    likes: 24,
    author: 11,
  },
  {
    id: 12,
    name: Names[12],
    image: image_12,
    description:
      'Rest. Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
    likes: 23,
    author: 12,
  },
];

export default staticPosts;
