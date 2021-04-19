import port4 from '../assets/img/portfolio/port3.jpg';
import cinemaITB from '../assets/img/projects/cinemaITB.PNG';
import rickAndMorty from '../assets/img/projects/rickAndMorty.PNG';

const webDevProjects = [
  {
    id: 1,
    category: 'HTML5 / CSS3 / JS',
    web: 'https://www.youtube.com/',
    repository: 'www.github.com',
    icon1: 'G',
    icon2: 'Y',
    image: port4,
    title: 'Vanilla Javascript Website',
    description: ''
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