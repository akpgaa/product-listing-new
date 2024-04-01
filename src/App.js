import Footer from "./component/footer";
import Header from "./component/header";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <div class="container" style={{ padding: 10 }}>
        <Header />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
