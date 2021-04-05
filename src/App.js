import React, { Component} from "react";
import './custom.css';
import Card from './Card';
import {ThemeProvider} from 'styled-components';
import  Button from './element/Button';

const theme = {
    primary: 'gold',
    mango: 'yellow'

}



// import faker from 'faker';

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            cards:[
                {
                    key: '1',
                    name: 'Ali  Akgol',
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
            ],
            showCard:true
        }

    }





        toggleShowCard = () => this.setState({showCard: !this.state.showCard})

        deleteCard = (cardIndex) => {
        const cards_copy = [...this.state.cards]
        cards_copy.splice(cardIndex, 1)
        this.setState({cards:cards_copy})

    }
        changeName = (event, key) => {
        //1. Which card is deleted
        const cardIndex = this.state.cards.findIndex(card => card.key === key);
        //2. make the card list copy
        const cards_copy = [...this.state.cards];
        //3. change the specific card
        cards_copy[cardIndex].name = event.target.value;
        //4. set the last version
            this.setState({cards:cards_copy})

        }



    render() {


        const classes = ['button'];
        if (this.state.cards.length < 3) classes.push('pink');
        if (this.state.cards.length < 2) classes.push('red text');

        const hideAndShowCard = this.state.showCard && (
            this.state.cards.map((card, index) => <Card image={card.image}
                                             name={card.name}
                                             department={card.title}
                                             key={card.key}
                                             onDelete={() => this.deleteCard(index)}
                                             onChangeName={(event) => this.changeName(event, card.key)}
            >


            </Card>));
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Button color='mango' length={this.state.cards.length} onClick={this.toggleShowCard}>Toogle</Button>
                    <button className={classes.join(' ')} onClick={this.toggleShowCard}>Toggle Show and Height</button>
                    {hideAndShowCard}

                </div>
            </ThemeProvider>
        );
    }




}

export default App;
