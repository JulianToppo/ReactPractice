import { Fragment } from 'react';
import Menu from './component/Meals/Menu'
import Header from './component/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Menu/>
    </Fragment>
  );
}

export default App;