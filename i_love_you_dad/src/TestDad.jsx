import React from "react"




export default function TestDad() {
    const fartStyle =  {
        height : "100vh",
        width : "200vh",
        alignment : "center",
        fontSize : "30px",
        color : "#28282B",
        paddingLeft : "20px",
        paddingRight : "30px"
        
    }
    // @media(max-width : 760px) {
        
    // } 
    const [fartState, setFartState] = React.useState(fartStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallFartStyle = {
                "textAlign" : "center",
                // "height" : "400px",
                "margin" : "5px",
                height : "90vh"
                // width : "100vw"
            }
            setFartState(smallFartStyle)
        }
      }
      React.useEffect(queryMatcher, [])

    return (
        <div style = {fartState}>
            <h1>im here to kick gum and chew ass and im all out of ass</h1>
        </div>
    )
}