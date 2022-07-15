import logo from './logo.svg';
import './App.css';
import ModalProfile from './Component/modalProfile';
import {Provider} from 'react-redux'
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <ModalProfile/>
    </Provider>
  );
}

export default App;
