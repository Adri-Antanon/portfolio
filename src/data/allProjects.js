import shopReactNative from '../assets/img/projects/shopReactNative.jpg';
import cinemaITB from '../assets/img/projects/cinemaITB.PNG';
import rickAndMorty from '../assets/img/projects/rickAndMorty.PNG';

const webDevProjects = [
  {
    id: 1,
    category: 'React Native',
    web: 'https://expo.io/@adriantanon/online-store',
    repository: 'https://gitlab.com/AdrianAntanon/react-native-the-shop-app',
    icon1: 'Expo',
    icon2: 'Repo',
    image: shopReactNative,
    title: 'Simple Online Store',
    description: 'Shop created using React Native, Expo, authentication implementation, different hooks, Redux Thunk and validation inputs'
  },
  {
    id: 2,
    category: 'React Js',
    web: 'https://adri-antanon.github.io/RickAndMortyAPIReact/',
    repository: 'https://github.com/Adri-Antanon/RickAndMortyAPIReact/tree/master',
    icon1: 'Web',
    icon2: 'Repo',
    image: rickAndMorty,
    title: 'Rick and Morty characters',
    description: 'Consuming a Rick and Morty REST API using React and its different React Hooks to display characters'
  },
  {
    id: 3,
    category: 'HTML5 / CSS3 / JS',
    web: 'https://adrianantanon.gitlab.io/proyecto-static-web-uf2-m04/index.html',
    repository: 'https://gitlab.com/AdrianAntanon/proyecto-static-web-uf2-m04',
    icon1: 'Web',
    icon2: 'Repo',
    image: cinemaITB,
    title: 'Cinema ITB',
    description: 'Vanilla javascript website, a blog about cinema that I did shortly after learning programming.'
  }
]

export default webDevProjects;