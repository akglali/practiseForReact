import React,{useState} from "react";
import  './custom.css';
import Card from './Card';
// import faker from 'faker';

function App() {
    const [name,setName]=useState('Ali Akgol');
    const [showCard,setShowCard]=useState(true);
    const  buttonMaker= (<div>
        <button className="button button2">YES</button>
        <button className="button button3">NO</button>
    </div>)
    const changeTheName =  name => setName(name);

    const changeInput = event => setName(event.target.value);
    const toggleShowCard = ()=> setShowCard(!showCard);

    const hideAndShowCard= showCard ? <Card image='https://cdn.fakercloud.com/avatars/divya_128.jpg'
                                      name={name}
                                      department='Customer Markets Executive'
                                      onChangeName={()=>changeTheName('Sultan Akgol')}
                                      onChangeInput={changeInput}
        >
            {buttonMaker}

        </Card>: null;

    return (
        <div className="App">
            <button className='button' onClick={toggleShowCard}>Toggle Show and Height </button>
            {hideAndShowCard}

        </div>
    );
}

export default App;
