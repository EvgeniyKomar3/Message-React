import React /*{Component}*/ from "react";
import './App.css';
import {Form} from "./components/FormFunc/Form";


/*export class App extends Component {
    render() {
        return <Form/>
    }
}*/


export const App = () => {
  return <>
    <h1>Привет Антон</h1>
    <Form/>
  </>
}