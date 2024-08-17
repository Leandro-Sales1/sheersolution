import Content from "../../components/content/Content";
import LeftSideBar from "../../components/left-side-bar/LeftSideBar";
import './home.css'

export default function Home() {
  return (
    <section className="main-section">
      <LeftSideBar />
      <Content/>
    </section>
  );
}


