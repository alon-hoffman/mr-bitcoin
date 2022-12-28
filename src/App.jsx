import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/style/main.scss';
import { Header } from './cmps/Header';
import { StatisticsPage } from './views/StatisticsPage';
import { ContactDetails } from './views/ContactDetails';
import ContactEdit from './views/ContactEdit';
import { ContactsPage } from './views/ContactsPage';
import SignUpPage from './views/SignUpPage';
import { UserDetails } from './views/UserDetails';
export default function App() {

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/signUp" component={SignUpPage} />
          <Route path="/contact/edit/:id" component={ContactEdit} />
          <Route path="/contact/edit" component={ContactEdit} />
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/user/" component={UserDetails} />
          <Route path="/Chart" component={StatisticsPage} />
          <Route path="/" component={ContactsPage} />
        </Switch>
      </main>
    </Router>
  )
}

