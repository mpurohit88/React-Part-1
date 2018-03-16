import React from 'react'
import { render } from 'react-dom'
import Clock from './components/Clock'
import Clock1 from './components/Clock1'

const renderApp = Component => {
	render(
		<Clock />,
		document.getElementById('root')
	)
}

renderApp(Clock)

// if (module.hot) {
// 	module.hot.accept(() => renderApp(App))
// }
