import React from "react";
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import './App.css'
export default function Nav() {
    const navStyle = {
        backgroundColor : "#CC5500",
        color : "#28282B",
        display : "flex",
        // height : "2100vh",
        // height : "100vh",
        // width : "100vw",
        // marginTop : "0px",
        // paddingTop : "0px",
        paddingBottom : "20px"

    }
    const link1Style = {
        color : "#28282B",
        paddingLeft : "650px",
        paddingTop : "20px",
        fontSize : "25px"
    }
    const link2Style = {
        color : "#28282B",
        paddingLeft : "150px",
        fontSize : "25px",
        paddingTop : "20px",
    }

    const [navState, setNavState] = React.useState(navStyle)
    const [link1State, setLink1State] = React.useState(link1Style)
    const [link2State, setLink2State] = React.useState(link2Style)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallNavStyle = {
                backgroundColor : "#CC5500",
                // color : "#28282B",
                "display" : "grid",
                "gridTemplateColumns" : "1fr 1fr 1fr",
                width : "100vw"
            }
            const smallLink1Style = {
                "fontSize" : "20px",
                "textAlign" : "center",
                "paddingTop" : "5px",
                "paddingBottom" : "15px",
                 color : "#28282B"
            }
            const smallLink2Style = {
                "fontSize" : "20px",
                "textAlign" : "center",
                "paddingTop" : "5px",
                "paddingBottom" : "15px",
                 color : "#28282B"
            }
            setLink1State(smallLink1Style)
            setLink2State(smallLink2Style)
            setNavState(smallNavStyle)
        }
      }
      React.useEffect(queryMatcher, [])


    return (
        <div>
            <nav style = {navState} className = "navvy">
                <NavLink to = "/" className= "link" style = {link1State}  >HOME</NavLink>
                <NavLink to = "/ScrapBook" className= "link" style = {link2State} >SCRAPBOOK</NavLink>
                <NavLink to = "/TestDad" className= "link" style = {link2State} >fart</NavLink>
            </nav>
        </div>
    )
}