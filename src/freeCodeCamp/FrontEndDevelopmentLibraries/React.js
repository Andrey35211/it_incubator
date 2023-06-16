
<!--Create a Simple JSX Element-->

const JSX = <h1>Hello JSX!</h1>;

<!--Create a Complex JSX Element-->

const JSX = <div>
    <h1>React</h1>
    <p>hello</p>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</div>

<!--Add Comments in JSX-->

const JSX = (
    <div>
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
        {/* Comment */}
    </div>
);

// Render HTML Elements to the DOM

const JSX = (
    <div id='challenge-node'>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));

// Define an HTML Class in JSX

const JSX = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);

// Learn About Self-Closing JSX Tags

const JSX = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);

// Create a Stateless Functional Component

const MyComponent = function() {
    return (
        <div>
            String
        </div>
    );
}

// Create a React Component

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
};

// Create a Component with Composition

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                <ChildComponent></ChildComponent>
            </div>
        );
    }
};

// Use React to Render Nested Components

const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            { /* Change code below this line */ }
            <TypesOfFruit></TypesOfFruit>
            { /* Change code above this line */ }
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */ }
                <Fruits></Fruits>
                { /* Change code above this line */ }
            </div>
        );
    }
};

// Compose React Components

class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                { /* Change code below this line */ }
                <NonCitrus />
                <Citrus />
                { /* Change code above this line */ }
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */ }
                <Fruits />
                { /* Change code above this line */ }
                <Vegetables />
            </div>
        );
    }
};

// Render a Class Component to the DOM

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
        );
    }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))

// Write a React Component from Scratch

// Change code below this line
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>My First React Component!</h1>
        )
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

// Pass Props to a Stateless Functional Component

const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                <CurrentDate date={Date()} />
            </div>
        );
    }
};

// Pass an Array as Props

const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                <List tasks={["Walk", "Cook", "Bake"]} />
                <h2>Tomorrow</h2>
                <List tasks={["Study", "Code", "Eat"]} />
            </div>
        );
    }
}

// Use Default Props

const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};
ShoppingCart.defaultProps = { items: 0 }

// Override Default Props

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items quantity={10}/>
    }
};

// Use PropTypes to Define the Props You Expect

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {
    quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};

// Access Props Using this.props

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Welcome name={"Andrey"}/>
            </div>
        );
    }
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <p>Hello, <strong>{this.props.name}</strong>!</p>
            </div>
        );
    }
};

// Review Using Props with Stateless Functional Components

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};

const Camper = (props) => {
    return <p>{props.name}</p>
};

Camper.defaultProps = {
    name: "CamperBot"
};

Camper.propTypes = {
    name: PropTypes.string.isRequired
};

// Create a Stateful Component

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Andrey"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
};

// Render State in the User Interface

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        return (
            <div>
                { /* change code below this line */ }
                <h1>{this.state.name}</h1>
                { /* change code above this line */ }
            </div>
        );
    }
};

