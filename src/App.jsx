import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import HomePage from './Home'
import Drivers from './drivers/Drivers'
import AppContext from 'antd/es/app/context';

const SUPABASE_URL = 'https://opurxhllzusqrdaggvit.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wdXJ4aGxsenVzcXJkYWdndml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NTcxMjksImV4cCI6MjAyNjAzMzEyOX0.WqebH6TfeG438Sjus0Qz21lBNxV5dwejKO2H8nEZtWk'

//const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="/drivers" element={<Drivers />} />
    </Route>
  )
)

function App() {
  //const [selected_nav, setNav] = useState('home')

  const selected_nav = 'home';
  const SetNav = () => {}

  return (
    <AppContext.Provider value={{ selected_nav, SetNav }}>
      <RouterProvider router={router}>
      </RouterProvider> 
    </AppContext.Provider>
  )
}

export default App