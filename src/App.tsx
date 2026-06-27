import { createContext, useState } from 'react'

import './App.css'

import Hero from './Components/Hero';
import StatsBar from './Components/StatsBar';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';


interface AppContextType {
  language: string;
  SetLaguange: (lang: string) => void;
}
export const AppContextPanel = createContext<AppContextType | undefined>(undefined);

function App() {
  const [language,SetLaguange] = useState('es')

  return (
    <>
      <AppContextPanel.Provider
        value={{
          language,SetLaguange
        }}
      >
          <div className="app">
        <Header />
        <main>
          <Hero />
          <StatsBar />
          <Services />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
       </AppContextPanel.Provider>
    </>
  )
}

export default App
