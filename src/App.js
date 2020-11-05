import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import {Wrapper, PageContainer} from './components/Base'

function App() {
    return (
        <Router>
            <Wrapper>
                <Sidebar/>
                <div className="Main-content">
                    <Navbar/>
                    <PageContainer>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>Pellentesque habitant </p>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>

                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ghhg hello my name is log i am developer i like play football

                        </p>
                        <div className="App-header"></div>


                    </PageContainer>

                    <Footer/>
                </div>
            </Wrapper>
        </Router>
    );
}

export default App;
