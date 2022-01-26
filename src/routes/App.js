import React from "react";
import Layout from "../containers/Layout";
import MainPage from "../containers/MainPage";
import ComicsPage from "../containers/ComicsPage";
import CharactersPage from "../containers/CharactersPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<MainPage/>} />
          <Route exact path='/comics' element={<ComicsPage/>} />
          <Route exact path='/characters' element={<CharactersPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;