import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Cart from "./components/pages/cart/Cart";
import Home from "./components/pages/home/Home";
import Shop from "./components/pages/shop/Shop";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import PageNotFound from "./components/pages/notFound/PageNotFound";
import Product from "./components/pages/product/Product";
import Shipping from "./components/pages/shipping/Shipping";
import Order from "./components/pages/order/Order";
import Login from "./components/pages/admin/login/Login";
import AdminPanel from "./components/pages/admin/panel/AdminPanel";
import { PanelItemEdit } from "./components/pages/admin/panel/panelItem/panelItemEdit/panelItemEdit";
import { PanelItemNew } from "./components/pages/admin/panel/panelItem/panelItemNew/panelItemNew";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<PublicRoute exact path="/admin/login" component={Login} />
				<PrivateRoute exact path="/admin/panel" component={AdminPanel} />
				<PrivateRoute
					exact
					path="/admin/panel/item/edit/:id"
					component={PanelItemEdit}
				/>
				<PrivateRoute
					exact
					path="/admin/panel/item/new"
					component={PanelItemNew}
				/>
				<PublicRoute exact path="/" component={Home} />
				<PublicRoute exact path="/cart" component={Cart} />
				<PublicRoute exact path="/shop" component={Shop} />
				<PublicRoute exact path="/product/:id" component={Product} />
				<PublicRoute exact path="/contact" component={Contact} />
				<PublicRoute exact path="/shipping" component={Shipping} />
				<PublicRoute exact path="/order" component={Order} />
				<PublicRoute path="*" component={PageNotFound} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
