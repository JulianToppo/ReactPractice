import { Switch, Route ,Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import UserContext from './utils/UserContext';

function App() {
  const userCtx=useContext(UserContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        {userCtx.tokenId && <Route path='/profile'>
          <UserProfile />
        </Route>}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
