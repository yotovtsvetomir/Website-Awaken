import { h, Component } from 'preact'
import render from 'preact-render-to-string';
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route';
import Header from './Header'
import ReactGA from 'react-ga'
import Favicon from 'react-favicon'
import { hotjar } from 'react-hotjar';

const hjid = 1191097;
const hjsv = 6;

export default class App extends Component {
	componentDidMount() {
    ReactGA.initialize('UA-122515839-3');
    ReactGA.pageview('/homepage');
    hotjar.initialize(hjid, hjsv);
  }

	render() {
		return (
		<div id="app">
			<Favicon url="https://res.cloudinary.com/awaken/image/upload/v1549555378/portal/favicon.ico" />
			<Header />
			<Router>
  				<AsyncRoute
  					path="/"
  					getComponent={ () => import('./Home').then(module => module.default) }
  				/>
  				<AsyncRoute
  					path="/proof"
  					getComponent={ () => import('./Proof').then(module => module.default) }
  				/>
  				<AsyncRoute
  					path="/current-situation"
  					getComponent={ () => import('./CurrentSituation').then(module => module.default) }
  				/>
  				<AsyncRoute
  					path="/the-system"
  					getComponent={ () => import('./TheSystem').then(module => module.default) }
  				/>
  				<AsyncRoute
  					path="/awaken"
  					getComponent={ () => import('./AllAwaken').then(module => module.default) }
  				/>
          <AsyncRoute
            path="/goals"
            getComponent={ () => import('./Goals').then(module => module.default) }
          />
					<AsyncRoute
						path="/current-situation/wage-slavery"
						getComponent={ () => import('./Wageslavery').then(module => module.default) }
					/>
					<AsyncRoute
						path="/current-situation/environment"
						getComponent={ () => import('./Environment').then(module => module.default) }
					/>
					<AsyncRoute
						path="/current-situation/media"
						getComponent={ () => import('./Lies').then(module => module.default) }
					/>
					<AsyncRoute
						path="/current-situation/war"
						getComponent={ () => import('./War').then(module => module.default) }
					/>
					<AsyncRoute
						path="/current-situation/poverty"
						getComponent={ () => import('./Poverty').then(module => module.default) }
					/>
					<AsyncRoute
						path="/the-system/economics"
						getComponent={ () => import('./Economics').then(module => module.default) }
					/>
					<AsyncRoute
						path="/the-system/politics"
						getComponent={ () => import('./Politics').then(module => module.default) }
					/>
					<AsyncRoute
						path="/the-system/media"
						getComponent={ () => import('./Media').then(module => module.default) }
					/>
					<AsyncRoute
						path="/the-system/education"
						getComponent={ () => import('./Education').then(module => module.default) }
					/>
					<AsyncRoute
						path="/awaken/whoweare"
						getComponent={ () => import('./Wwa').then(module => module.default) }
					/>
					<AsyncRoute
						path="/awaken/theplan"
						getComponent={ () => import('./Change').then(module => module.default) }
					/>
					<AsyncRoute
						path="/awaken/code"
						getComponent={ () => import('./Code').then(module => module.default) }
					/>
					<AsyncRoute
						path="/awaken/join"
						getComponent={ () => import('./Join').then(module => module.default) }
					/>
					<AsyncRoute
						path="/goals/united-activists"
						getComponent={ () => import('./Unite').then(module => module.default) }
					/>
					<AsyncRoute
						path="/goals/revealing-truth"
						getComponent={ () => import('./Reveal').then(module => module.default) }
					/>
					<AsyncRoute
						path="/goals/system-change"
						getComponent={ () => import('./Syschange').then(module => module.default) }
					/>
					<AsyncRoute
						path="/proof/docs"
						getComponent={ () => import('./Docs').then(module => module.default) }
					/>
					<AsyncRoute
						default
						getComponent={ () => import('./404').then(module => module.default) }
					/>
			</Router>
		</div>
		);
	}
}
