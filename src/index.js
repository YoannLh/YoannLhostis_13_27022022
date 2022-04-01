import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './Pages/Home'
import Authentication from './Pages/Authentication'
import Account from './Pages/Account'
import Error from './Pages/Error'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { store } from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/authentication"
                        element={<Authentication />}
                    />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
