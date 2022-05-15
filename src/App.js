import Header from './components/Header';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <FaGithub />
        <FaLinkedin />
        <FiMail />
      </div>
    </div>
  );
}

export default App;
