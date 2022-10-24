// import React, {Component} from "react";
// import {Input} from "./Input";
// import {Button} from "./Button";
//
//
// export class Form extends Component {
//     state = {
//         name: 'Click',
//         value: '',
//         message: [],
//         visible: true
//     }
//     handleClick = (e) => {
//         this.setState({message: [...this.state.message, this.state.value]})
//         this.setState({value: ''})
//     }
//     handleChange = (e) => {
//         this.setState({value: e.target.value})
//     }
//
//
//     render() {
//         return <>
//             {this.state.visible &&<ul>
//                 {this.state.message.map(message =>
//                     <li>{message}</li>
//                 )}
//             </ul>}
//             <Input change={this.handleChange} value={this.state.value}/>
//             <Button name={this.state.name} click={this.handleClick}/>
//             <br/>
//             <button onClick={() => this.setState({visible: !this.state.visible})}>
//                 {this.state.visible ? 'Hide' : 'Show'}</button>
//         </>
//
//     }
// }
