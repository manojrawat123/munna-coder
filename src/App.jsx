import { useState } from 'react'
import "./index.css"
import Navbar from './components/MyNavbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/ContactPage/Contact';
import MyChatbot from './components/ChatBot/MyChatBot';
import AllProject from './Pages/ProjectsPage/ProjectsDetails/AllProjects';
import ProjectDetailPage from './Pages/ProjectsPage/ProjectShow/ProjectDetails';
import MyAbout from './Pages/AboutPage/About';

function App() {

  const token = true
  return (
    <>
    {token ? <Navbar />: null}

    <Routes>
      <Route path={"/"} Component={HomePage} />
      <Route path={"/contact"} Component={Contact} />
      <Route path={"/project"} Component={AllProject} />
      <Route path={"/project/:id"} Component={ProjectDetailPage} />
      <Route path={"/about"} Component={MyAbout} />
    </Routes>

     <MyChatbot className="w-full"/>
    </>
  )
}

export default App
