import Content from "./components/content/Content";
import LeftSideBar from "./components/left-side-bar/LeftSideBar";
import './app.css'

function App() {
  return (
    <section class="main-section">
      <LeftSideBar />
      <Content />
    </section>
  );
}

export default App;
