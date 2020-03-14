import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Delivery from '../pages/Delivery';
import DeliveryRegister from '../pages/DeliveryRegister';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route exact path="/deliveries" component={Delivery} isPrivate />
      <Route
        exact
        path="/deliveries/register"
        component={DeliveryRegister}
        isPrivate
      />
    </Switch>
  );
}
