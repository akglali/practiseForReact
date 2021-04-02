import React, {useState} from "react";
import './custom.css';
import Card from './Card';

// import faker from 'faker';

function App() {
    const [showCard, setShowCard] = useState(true);

    const [cards, setCards] = useState([
            {
                key: '1',
                name: 'Ali Akgol',
                title: 'Computer Engineering',
                image: 'https://cdn.fakercloud.com/avatars/divya_128.jpg'
            },
            {
                key: '2',
                name: 'Sultan Guvenbas',
                title: 'Computer Scientist',
                image: 'https://cdn.fakercloud.com/avatars/divya_128.jpg'
            },
            {
                key: '3',
                name: 'Ahmet Dogan',
                title: 'Computer Engineering',
                image: 'https://cdn.fakercloud.com/avatars/divya_128.jpg'
            }
        ]
    )
    const deleteCard = (cardIndex) => {
        const cards_copy = [...cards]
        cards_copy.splice(cardIndex, 1)
        setCards(cards_copy)

    }
    const changeName = (event, key) => {
        //1. Which card is deleted
        const cardIndex = cards.findIndex(card => card.key == key);

        //2. make the card list copy
        const cards_copy = [...cards];
        //3. change the specific card
        cards_copy[cardIndex].name = event.target.value;
        //4. set the last version
        setCards(cards_copy)
    }


    const toggleShowCard = () => setShowCard(!showCard);

    const hideAndShowCard = showCard && (
        cards.map((card, index) => <Card image={card.image}
                                         name={card.name}
                                         department={card.title}
                                         key={card.key}
                                         onDelete={() => deleteCard(index)}
                                         onChangeName={(event) => changeName(event,card.key)}
        >


        </Card>));

    return (
        <div className="App">
            <button className='button' onClick={toggleShowCard}>Toggle Show and Height</button>
            {hideAndShowCard}

        </div>
    );
}

export default App;
