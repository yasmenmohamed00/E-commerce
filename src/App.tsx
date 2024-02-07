import Home from './pages/home'
import './App.css';
// import { Provider } from 'react-redux'
import { store } from './utils/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>

        <Home />
    </Provider>
  );
}

export default App;
