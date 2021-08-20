import { Provider, connect } from 'react-redux';
import './App.css';
import { store } from './config/store';
import counterActions from './actions/counter';

const CounterComponent = ({ counter, incrementarContador, decrementarContador }) => (
  <>
    <header className="App-header">
      <div>{counter.count}</div>
      <button onClick={incrementarContador}>INCREMENTAR</button>
      <button onClick={decrementarContador}>DECREMENTAR</button>
    </header>
  </>
)


const mapStateToPros = ({ counter }) => ({
  counter,
})

const mapDispatchToProps = () => ({
  ...counterActions,
})

const ConnectedCounterComponent = connect(mapStateToPros, mapDispatchToProps())(CounterComponent)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedCounterComponent />
      </div>
    </Provider>
  );
}

export default App;
