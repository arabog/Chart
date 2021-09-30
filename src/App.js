import './App.css';
import Home from "./pages/home/Home"
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import User from "./pages/user/User"
import UserList from "./pages/userList/UserList"
import NewUser from "./pages/newUser/NewUser"
import Product from "./pages/products/Products"
import ProductList from "./pages/productList/ProductList"
import NewProduct from "./pages/newProduct/NewProduct"
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"


function App() {
	return (
		<Router className="App">
			<Topbar />

			<div className= "container">
				<Sidebar />

				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>

					<Route path="/users" >
						<UserList />
					</Route>

					<Route path="/user/:userId" >
						<User />
					</Route>

					<Route path="/newuser" >
						<NewUser />
					</Route>

					<Route path="/products" >
						<ProductList />
					</Route>

					<Route path="/product/:productId" >
						<Product/>
					</Route>

					<Route path="/newproduct" >
						<NewProduct/>
					</Route>

				</Switch>
			</div>

		</Router>
	);
}

export default App;
