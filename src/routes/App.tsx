import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Analytics from '../containers/Analytics/Analytics'
import MainContainer from '../containers/MainContainer/MainContainer'
import NotFound from '../containers/NotFound/NotFound'
import Population from '../containers/Population/Population'
import PopulationDetail from '../containers/Population/PopulationDetail'
import RootContainer from '../containers/RootContainer/RootContainer'

const App = () => {
    return (
        <BrowserRouter>
            <RootContainer>
                <Switch>
                    <Route exact path="/" component={ MainContainer } />
                    <Route exact path="/population" component={ Population } />
                    <Route exact path="/population/:id" component={ PopulationDetail } />
                    <Route exact path="/analytics" component={ Analytics } />
                    <Route component={ NotFound } />
                </Switch>
            </RootContainer>
        </BrowserRouter>
    )
}

export default App