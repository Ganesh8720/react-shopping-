import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'

import { Gents,Ladies } from '../data'
import WomenCol from '../Components/WomenCol'


const MainPage= () => {
  
  const[gentsFashion,setGentsFashion]=useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <WomenCol ladiesFashion={ladiesFashion} />
        <Footer/>
    
    </div>
  )
}

export default MainPage


