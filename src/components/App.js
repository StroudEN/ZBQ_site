import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import IntroParagraph from './IntroParagraph';
import MenuParagraph from './MenuParagraph';
import FooterSection from './FooterSection';
import ScheduleInfo from './ScheduleInfo';
import PageHeader from './PageHeader';
import ScrollHeader from './ScrollHeader';


function App() {

    // let appSpace=document.getElementById('app')

    // const [scrollSetting, setScrollSetting] = useState("")
    // const [show, setShow] = useState(false)
    
    // window.addEventListener("scroll",()=>{
    //             setScrollSetting(window.scrollY)
    //             console.log(scrollSetting)
    //             if(scrollSetting>=300){
    //                 setShow(true)
    //             }else{
    //                 setShow(false)
    //             }
    //         })
    
    return (
        <div>
            <ScrollHeader />
            <PageHeader />
            <ScheduleInfo />
            <IntroParagraph />
            <MenuParagraph />
            <FooterSection />
        </div>
    )
}

export default App;