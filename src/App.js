import Content from "./components/Content";
import LeftSideBar from "./components/LeftSideBar";


function App() {
  return (
    <section className="bg-[#D9D9D9] w-screen h-screen flex overflow-hidden">
      <LeftSideBar/>
      <Content/>
    </section>
  );
}

export default App;
