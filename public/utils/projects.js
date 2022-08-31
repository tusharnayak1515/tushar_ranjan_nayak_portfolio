import just_bg from "../static/images/just_bg.jpg";
import text_utils from "../static/images/text_utils.jpg";
import notes_app from "../static/images/notes_app.png";
import tic_tac_toe from "../static/images/tic-tac-toe.jpg";
import codershub from "../static/images/codershub.png";
import jpm from "../static/images/jpm.jpg";

const projects = [
  {
    name: "Just-Connect",
    github: "https://github.com/tusharnayak1515/just_connect",
    live: "http://just-connect.herokuapp.com/",
    image: just_bg,
    description:
      "Just-Connect is a social media web-app made using MERN STACK and like other social media platforms, a user can register for an account and connect to other people around and share posts!",
  },
  {
    name: "Text Utils",
    github: "https://github.com/tusharnayak1515/myTextUtils2625",
    live: "http://mytextutils2625.surge.sh/",
    image: text_utils,
    description:
      "Text Utils is a web-app made using React.js in which you can paste any text and get it formatted as you want!",
  },
  {
    name: "Just Notes",
    github: "https://github.com/tusharnayak1515/just-notes",
    live: "https://just-notes.vercel.app/",
    image: notes_app,
    description:
      "Just Notes is a website made using NEXT.JS which allows users to register, create folders and store their notes in them.",
  },
  {
    name: "JPM",
    github: "https://github.com/tusharnayak1515/just-project-manager",
    live: "https://just-project-manager.vercel.app/",
    image: jpm,
    description:
      "This is a todo-list like website made using Next JS, which allows users to add their projects and tasks related to them and keep a track of their progress.",
  },
  {
    name: "Tic Tac Toe",
    github: "https://github.com/tusharnayak1515/just-tic-tac-toe",
    live: "https://tic-tac-toe-two-mauve.vercel.app/",
    image: tic_tac_toe,
    description: "This web-app is a tic-tac-toe game made using React.js",
  },
  {
    name: "Coders Hub",
    github: "https://github.com/tusharnayak1515/coders-hub",
    live: "https://coders-hub-rho.vercel.app/",
    image: codershub,
    description:
      "Coders Hub is a blog website specially for the programmers where they can find solutions to their queries and also help others find solutions to their queries.",
  },
];

export default projects;
