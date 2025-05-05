
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero1 } from "./components/Hero/Hero1";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Projects/Project";
import { Toggle } from "./components/Toggle/Toggle";



function App() {
  return ( <div className={styles.App}>
<Navbar/> 
<Hero1/>
<About/>
<Experience/>
<Project/>
<Contact/>
  </div>
  );
}

export default App;
