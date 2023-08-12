import Header from "./component/Header/Header";
import Balance from "./component/Balance/Balance"
import "./App.scss";
import History from "./component/History/History";
import Add from "./component/Add/Add";



function App() {
  return (
    <div className="app">
      <div className="appwrapper">
        <Header />
        <Balance/>
        <History/>
        <Add/>
      </div>
    </div>
  );
}

export default App;
