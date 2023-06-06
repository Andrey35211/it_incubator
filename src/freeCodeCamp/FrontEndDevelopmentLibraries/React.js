
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