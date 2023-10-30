import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Jobs Board" />
      <Jobs className="jobs-layout" />
      {/* <Footer /> */}
    </>
  );
}

export default App;
