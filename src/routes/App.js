import React from "react";
import Layout from "../containers/Layout";
import MainPage from "../containers/MainPage";
import ComicsPage from "../containers/ComicsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<MainPage/>} />
          <Route exact path='/comics' element={<ComicsPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;