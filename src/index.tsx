import {render} from 'react-dom';
import {Counter} from "./components/Counter/Counter";

render(
	<div>
		<strong>Hello Ulbi TV</strong>
		<Counter />
	</div>,
	document.getElementById('root')
)
