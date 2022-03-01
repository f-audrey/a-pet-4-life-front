// == Import
import './style.scss';
import AppHeader from 'src/components/AppHeader';
import AppFooter from 'src/components/AppFooter';
import Home from 'src/components/Home';
import Assoc from 'src/components/Assoc';
import Button from 'src/components/Button';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDepartmentsFromApi, loadRegionsFromApi } from '../../store/actions/location';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(loadRegionsFromApi());
      dispatch(loadDepartmentsFromApi());
    },
    [],
  );
  return (
    <div className="app">
      <AppHeader />

      <Routes>
        <Route
          path="/"
          element={(
            <Assoc />
          )}
        />
        <Route
          path="/search"
          element={(
            <Button />
          )}
        />
        {/* <Route
          path="*"
          element={(
            //<Error /> créer composant error
          )}
        /> */}
      </Routes>

      <AppFooter />

    </div>
  );
};

// == Export
export default App;
