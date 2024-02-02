import "./App.scss";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__form">
        <Form />
      </div>
    </div>
  );
}

export default App;
