import './custom.css';
import Card from './Card';
import faker from 'faker';

function App() {
    const  buttonMaker= (<div>
        <button className="button button2">YES</button>
        <button className="button button3">NO</button>
    </div>)
    return (
        <div className="App">
            <Card image={faker.image.avatar()}
                  name={`${faker.name.firstName()} ${faker.name.lastName()}`}
                  department={faker.name.title()}
                >
                {buttonMaker}

            </Card>

            <Card image={faker.image.avatar()}
                  name={`${faker.name.firstName()} ${faker.name.lastName()}`}
                  department={faker.name.title()}
            >
                {buttonMaker}
            </Card>
            <Card image={faker.image.avatar()}
                  name={`${faker.name.firstName()} ${faker.name.lastName()}`}
                  department={faker.name.title()}
            >
                {buttonMaker}
            </Card>

        </div>
    );
}

export default App;
