import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen bg-slate-900 text-slate-300 text-xl flex flex-col justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
