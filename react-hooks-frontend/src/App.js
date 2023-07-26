import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListaDeTareasComponent from './components/ListaDeTareasComponent';
import AgregarTareaComponent from './components/src/components/AgregarTareaComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {ListaDeTareasComponent}></Route>
              <Route path = "/Tareas" component = {ListaDeTareasComponent}></Route>
              <Route path = "/add-Tarea" component = {AgregarTareaComponent} ></Route>
              <Route path = "/edit-Tarea/:id" component = {AgregarTareaComponent}></Route>
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
