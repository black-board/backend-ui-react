import React, {Fragment,useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route } from 'react-router-dom';
import { routePublic } from '@bb-backend/router';

export function RoutePublicAdminPage() {
  return (
    <Fragment>
      {routePublic.map((route, index) => (
        <Route key={index} exact={route.exact} path={route.path} component={route.component} />
      ))}
    </Fragment>
  )
}

export function RoutePrivateAdminPage() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

  return (
      <Fragment>
              {/* <HeaderAdmin onClick={handleDrawerOpen} open={open} />
              <DrawerLabel onClick={handleDrawerClose} open={open} />
          
              {routes.admin.map((route, index) => (
                  <Route key={index} exact={route.exact} path={route.path} component={route.component} />
              ))} */}
         
      </Fragment>
  )
}

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Fragment>
            {auth !== true ? (
                <Fragment>
                    <RoutePublicAdminPage />
                </Fragment>
            ) : (
                    <Fragment>
                        <RoutePrivateAdminPage />
                    </Fragment>
                )}
        </Fragment>
  );
}

export default App;
