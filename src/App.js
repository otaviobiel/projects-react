import Header from "./components/header"
import "./styles/Header.module.css"

function App() {
  return(
    // isso é um fragment no react, uma tag pai que é genérica, por isso nao precisa de nome
    <> 
      <Header />
    </>
  );
}

export default App;
