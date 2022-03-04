import Sidebar from "./components/layouts/Sidebar";
import useDarkmode from "./hooks/useDarkMode";

function App() {
	useDarkmode();
	return (
		<div className="">

			<Sidebar />
		</div>
	);
}

export default App;
