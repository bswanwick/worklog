import logo from "../logo.svg";
import '../css/App.css'; // Import App.css (from create-react-app)
import Timer from "./Timer";

const App = () => { 
	return (
		<div className="App">			
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="text-3xl font-bold underline">      Hello world!    </h1>
					<Timer />
				</header>
		</div>
	);
};

export default App;