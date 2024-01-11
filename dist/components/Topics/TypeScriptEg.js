"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TypeScriptEg = () => {
    const [personData, setPersonData] = react_1.default.useState({
        name: '',
        age: 0,
    });
    const [greetingmsg, setGreetingmsg] = react_1.default.useState('');
    const handleChange = (event) => {
        setPersonData(Object.assign(Object.assign({}, personData), { [event.target.name]: event.target.value }));
        setGreetingmsg('');
    };
    const greetPerson = () => {
        setGreetingmsg(`Hello, ${personData.name} ! You are ${personData.age} years old.`);
    };
    return (<div>
      <input type="text" name="name" value={personData.name} onChange={handleChange}/>
      <input type="number" name="age" value={personData.age} onChange={handleChange}/>
      <button onClick={greetPerson}>Greet</button>
      {greetingmsg && <p>{greetingmsg}</p>}
    </div>);
};
exports.default = TypeScriptEg;
