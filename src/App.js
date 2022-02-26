import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Projects from 'pages/Project';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';
import Hire from 'pages/Hire';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import MyApp from 'Login';

function App() {
    return (
        <>

            <Route exact path="/login" component={MyApp} />
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/project" component={Projects} />
                    <Route exact path="/hire" component={Hire} />
                    <Redirect from="*" to="/" />
                </Switch><Footer />
            </div>
        </>
    )
}

export default App;
