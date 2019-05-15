import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import FormTaller from './components/FormTaller';
import FormProv from './components/FormProv';
import FormAprobTec from './components/FormAprobTec';

const app = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={FormTaller} />
      <Route path="/proveedor" component={FormProv} />
      <Route path="/tech" component={FormAprobTec} />
    </Switch>
  </Layout>
);

export default app;
