import port1 from '../assets/img/portfolio/maya-1.jpg';
import port2 from '../assets/img/portfolio/port1.jpg';
import port4 from '../assets/img/portfolio/port3.jpg';
import cinemaITB from '../assets/img/projects/cinemaITB.PNG';
import rickAndMorty from '../assets/img/projects/rickAndMorty.PNG';

const webDevProjects = [
  {
    id: 1,
    category: 'Angular / Ionic',
    web: 'https://www.youtube.com/',
    repository: 'www.github.com',
    icon1: 'G',
    icon2: 'Y',
    image: port1,
    title: 'Autodesk Maya',
    description: ''
  },
  {
    id: 2,
    category: 'Angular / Ionic',
    web: 'https://www.youtube.com/',
    repository: 'www.github.com',
    icon1: 'G',
    icon2: 'Y',
    image: port2,
    title: 'Python Web Scrapping',
    description: ''
  },
  {
    id: 3,
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
    id: 4,
    category: 'React Js',
    web: 'https://adri-antanon.github.io/RickAndMortyAPIReact/',
    repository: 'https://github.com/Adri-Antanon/RickAndMortyAPIReact/tree/master',
    icon1: 'Web',
    icon2: 'Repository',
    image: rickAndMorty,
    title: 'Rick and Morty characters',
    description: 'Consuming a Rick and Morty REST API using React and its different React Hooks to display characters'
  },
  {
    id: 5,
    category: 'HTML5 / CSS3 / JS',
    web: 'https://adrianantanon.gitlab.io/proyecto-static-web-uf2-m04/index.html',
    repository: 'https://gitlab.com/AdrianAntanon/proyecto-static-web-uf2-m04',
    icon1: 'Web',
    icon2: 'Repository',
    image: cinemaITB,
    title: 'Cinema ITB',
    description: 'Vanilla javascript website, a blog about cinema that I did shortly after learning programming.'
  }
]

export default webDevProjects;