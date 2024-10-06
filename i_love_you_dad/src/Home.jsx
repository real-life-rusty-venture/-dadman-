import React from "react"

export default function Home() {

    

    const homeStyle = {
        height : "100vh",
        width : "200vh", 
        // backgroundColor : "#FF7518",
        // // paddingTop : "35vh"
        // color : "#28282B"
        color : "#28282B",
        backgroundColor : "#FF7518",
        marginTop : "0px",
        paddingTop : "0px",
        textAlign : "center",
        paddingLeft : "40px",
        paddingRight : "20px"
        //here
    }

    const h2Style = {
        alignment : "center",
        fontSize : "60px"
    }



    // const [homeState, setHomeState] = React.useState(homeStyle)

    // const mediaQuery = window.matchMedia("max-width : 600px") 
    
    
    // function queryMatcher() {
    //     console.log("we are in the matcher")
    //     if (mediaQuery.matches) {
    //         console.log("its small")
    //         setHomeState(smallHomeStyle)
    //     }

    // }
    // React.useEffect(queryMatcher, [])             

    const [homeState, setHomeState] = React.useState(homeStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallHomeStyle = {
                // height : "300vh",
                width : "100vw",
                textAlign : "center",
                paddingLeft : "10px",
                paddingRight : "10px",
                // marginRight : "5px"
                "margin" : "5px",
                height : "120vh",
                fontSize : "10px"
            }
            setHomeState(smallHomeStyle)
        }
      }
      React.useEffect(queryMatcher, [])
    return (
        <div style = {homeState} className = "chocolate">
            <h3 style = {h2Style} className = "yogurt">
                hi jamal! i built this website for your birthday because i love you. i hope you like it!
            </h3>
        </div>
    )
}