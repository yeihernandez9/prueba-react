import Home from './component/Home';
import generateStore from './redux/store'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Usuario from './component/Usuario';
function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Home></Home>
      <Usuario></Usuario>
    </Provider>
  );
}

export default App;
