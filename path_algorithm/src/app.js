const Component = window.React.Component;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sqrClicked: null,
        }
    }

    render() {
        return <Squares />;
    }
}

class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: null,
            goal: false,
            x: null,
            y: null,
            steps: null,
        }
    }

    render() {
        return <div>Squares</div>
    }
}

window.ReactDOM.render(<App/>, document.getElementById('root'));
