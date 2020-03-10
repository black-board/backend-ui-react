import React, { Fragment, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route, useRouteMatch } from 'react-router-dom';
import { routePublic, routePrivate } from '@bb-backend/router';
import { DrawerNavbar } from '@bb-backend/components';

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
      <DrawerNavbar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
        title={window.location.pathname}
      >
        {routePrivate.map((route, index) => (
          <Route key={index} exact={route.exact} path={route.path} component={route.component} />
        ))}
      </DrawerNavbar>
    </Fragment>
  )
}

function App() {
  const [
    auth,
    // setAuth
  ] = useState(true);

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
