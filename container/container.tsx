import Header from "./header/header";
import Home from "../components/home/home";

const Conatiner = () => (
  <div>
    <Header />
    <div className="tb-margin--top-64"></div>
    <div className="tb-height--full">
      <Home />
        </div>
  </div>
);

export default Conatiner;
