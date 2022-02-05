import shopReactNative from "../assets/img/projects/shopReactNative.jpg";
import cinemaITB from "../assets/img/projects/cinemaITB.PNG";
import rickAndMorty from "../assets/img/projects/rickAndMorty.PNG";
import guessANumber from "../assets/img/projects/guessANumber.PNG";
import showMeals from "../assets/img/projects/showMeals.PNG";
import blogNextJS from "../assets/img/projects/blogNextJS.webp";

const webDevProjects = [
  {
    id: 1,
    category: "NextJS",
    web: "https://adri-blog.vercel.app/",
    repository: "https://github.com/Adri-Antanon/ReactAndNextJS",
    icon1: "Web",
    icon2: "Repo",
    image: blogNextJS,
    title: "Blog",
    description:
      "Blog about web development with css modules, api routes, server side rendering, react-markdown and more. ",
  },
  {
    id: 2,
    category: "React Native",
    web: "https://expo.io/@adriantanon/online-store",
    repository: "https://gitlab.com/AdrianAntanon/react-native-the-shop-app",
    icon1: "Expo",
    icon2: "Repo",
    image: shopReactNative,
    title: "Simple Online Store",
    description:
      "Shop created using React Native, Expo, authentication implementation, different hooks, Redux Thunk and validation inputs",
  },
  {
    id: 3,
    category: "React Native",
    web: "https://expo.io/@adriantanon/projects/guess-number",
    repository: "https://gitlab.com/AdrianAntanon/guess-a-number-app",
    icon1: "Expo",
    icon2: "Repo",
    image: guessANumber,
    title: "Guess a number - game",
    description:
      "You enter a number between 1 and 99 and the game begins, the CPU must guess the number",
  },
  {
    id: 4,
    category: "React Native",
    web: "https://expo.io/@adriantanon/projects/show-meals",
    repository: "https://gitlab.com/AdrianAntanon/react-native-the-meals-app",
    icon1: "Expo",
    icon2: "Repo",
    image: showMeals,
    title: "Show your meals!",
    description:
      "Different food recipes are shown, how to prepare them, separated by categories and you can save them in favorites.",
  },
  {
    id: 6,
    category: "HTML5 / CSS3 / JS",
    web: "https://adrianantanon.gitlab.io/proyecto-static-web-uf2-m04/index.html",
    repository: "https://gitlab.com/AdrianAntanon/proyecto-static-web-uf2-m04",
    icon1: "Web",
    icon2: "Repo",
    image: cinemaITB,
    title: "Cinema ITB",
    description:
      "Vanilla javascript website, a blog about cinema that I did shortly after learning programming.",
  },
];

export default webDevProjects;
