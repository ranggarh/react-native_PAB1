
const {useState} = React;
const {render} = ReactDOM;

function CounterFunc(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Program Counter Functional Component</h1>
            <h2>Hitung Counter: {count}</h2>
            
            <button onClick={() => setCount(count - 1)}>
                Kurang 1
            </button>
            <button onClick={() => setCount(count + 1)}>
                Tambah 1
            </button>
        </div>
    )
}

const myElement = <CounterFunc />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);