import './App.css';
import Home from "./pages/home/Home"
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
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
						{/* <Home /> */}
					</Route>
				</Switch>
			</div>

		</Router>
	);
}

export default App;
