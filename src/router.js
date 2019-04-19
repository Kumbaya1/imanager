import React from 'react';
import App from './App';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Admin from './page/admin/Admin';
import Order from './page/order/Order';
import Login from './page/login/Login';
import Buttons from './page/ui/buttons';
import Inputs from './page/ui/inputs';
import Modal from './page/ui/modal';
import Nomatch from './page/nomatch/NoMatch';
class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App >
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={() => {
                        return (
                            <Admin>
                                <Switch>
                                    <Route path="/admin/utils/button" component={Buttons}></Route>
                                    <Route path="/admin/utils/input" component={Inputs}></Route>
                                    <Route path="/admin/utils/modal" component={Modal}></Route>
                                    <Route component={Nomatch}></Route>
                                </Switch>
                            </Admin>
                        )
                    }}></Route>
                    <Route path="/order" component={Order}></Route>
                </App>
            </HashRouter>
        )
    }
}
export default IRouter;