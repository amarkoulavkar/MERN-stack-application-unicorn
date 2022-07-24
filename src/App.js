import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateItem from './components/create-item.component'
import EditItem from './components/edit-item.component'
import ItemList from './components/item-list.component'
import AddSalesEntry from './components/add-sales-entry/add-sales-entry'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {  <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-item'} className="nav-link">
                Unicorn Tea & Cofee
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-item'} className="nav-link">
                    Add Item
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/item-list'} className="nav-link">
                    Item List
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/add-sales-entry'} className="nav-link">
                   Add Sales Entry
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>  }
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateItem {...props} />}
                  />
                  <Route
                    exact
                    path="/create-item"
                    component={(props) => <CreateItem {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-item/:id"
                    component={(props) => <EditItem {...props} />}
                  />
                  <Route
                    exact
                    path="/item-list"
                    component={(props) => <ItemList {...props} />}
                  />
                    <Route
                    exact
                    path="/add-sales-entry"
                    component={(props) => <AddSalesEntry {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
