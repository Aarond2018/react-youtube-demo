import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import data from "./data.json"
import "./App.css";

function App() {

	return (
		<div className="App">
			<Link to="/"><h1>React Blog</h1></Link>
			<main>
				<Routes>
					<Route path="/" element={<Home data={data}/>} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
