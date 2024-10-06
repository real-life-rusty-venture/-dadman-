import dad_1 from "../src/pictures/0000069_dad_1.jpg"
import dad_2 from "../src/pictures/0000069_dad_2.jpg"
import dad_3 from "../src/pictures/0000069_dad_3.jpg"
import dad_4 from "../src/pictures/0000069_dad_4.jpg"
import dad_5 from "../src/pictures/0000069_dad_5.jpg"
import dad_6 from "../src/pictures/0000069_dad_6.jpg"
import dad_7 from "../src/pictures/0000069_dad_7.jpg"
import dad_8 from "../src/pictures/0000069_dad_8.jpg"
import dad_9 from "../src/pictures/0000069_dad_9.jpg"
import dad_10 from "../src/pictures/0000069_dad_10.jpg"
import dad_11 from "../src/pictures/0000069_dad_11.jpg"
import dad_12 from "../src/pictures/0000069_dad_12.jpg"
import dad_13 from "../src/pictures/0000069_dad_13.jpg"
import dad_14 from "../src/pictures/0000069_dad_14.jpg"
import dad_15 from "../src/pictures/0000069_dad_15.jpg"
import dad_16 from "../src/pictures/0000069_dad_16.jpg"
import dad_17 from "../src/pictures/0000069_dad_17.jpg"
import React from "react"

export default function ScrapBoook() {

    const pictures = [
        {img : dad_1,
        title : "dad_1",
        description : "my birthday party!",
        key : 1
        },
        {img : dad_2,
        title : "dad_2",
        description : "when i got my haircut",
        key : 2
        },
        {img : dad_3,
        title : "dad_3",
        description : "the zoo",
        key : 3
        },
        {img : dad_4,
        title : "dad_4",
        description : "dollar general shenanigans",
        key : 4
        },
        {img : dad_5,
        title : "dad_5",
        description : "george!",
        key : 5
        },
        {img : dad_6,
        title : "dad_6",
        description : "iron loki! (expert craftsmanship might i add)",
        key : 6
        },
        {img : dad_7,
        title : "dad_7",
        description : "hanging out with mom",
        key : 7
        },
        {img : dad_8,
        title : "dad_8",
        description : "me petting cas while ash was in florrida",
        key : 8
        },
        {img : dad_9,
        title : "dad_9",
        description : "horror con!! yay!!",
        key : 9
        },
        {img : dad_10,
        title : "dad_10",
        description : "petting a cute little puppy :)",
        key : 10
        },
        {img : dad_11,
        title : "dad_11",
        description : "petting a stingray at the zoo",
        key : 11
        },
        {img : dad_12,
        title : "dad_12",
        description : "me trying on the george helmet (i look kickass)",
        key : 12
        },
        {img : dad_13,
        title : "dad_13",
        description : "all of us eating dinner at Red Robin",
        key : 13
        },
        {img : dad_14,
        title : "dad_14",
        description : "awesome helmets!!",
        key : 14
        },
        {img : dad_15,
        title : "dad_15",
        description : "this outfit is so kickass",
        key : 15
        },
        {img : dad_16,
        title : "dad_16",
        description : "your 28th birthday!",
        key : 16
        },
        {img : dad_17,
        title : "dad_17",
        description : "working on another kickass helmet",
        key : 17
        }

    ]
    const picMap = pictures.map(item => {
        const h3Style = {
            backgroundColor : "#28282B",
            color : "#FF7518",
            textAlign : "center",
            marginLeft : "10vw",
            marginRight : "1vw"
        }
        const divStyle = {
            color : "#28282B",
            // height : "2100vh",
            // height : "1000px",
            width : "200vh",
            display : "grid",
            // gridTemplateColumns : "1fr 1fr 1fr"
        }

        const imgStyle = {
            width : "75vw", //here,
            // gridColumn : "2/3"
            marginLeft : "13vw"
        }
        const pp = {
            textAlign : "center",
            paddingLeft : "20vw",
            paddingRight : "10vw"
            // gridColumn : "2/3"
        }
        const [h3State, setH3State] = React.useState(h3Style)
        const [imgState, setImgState] = React.useState(imgStyle)
        const [divState, setDivState] = React.useState(divStyle)
        const [ppState, setPpState] = React.useState(pp)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            // const smallDivStyle = {
            //     "backgroundColor" : "#303030",
            //     "color" : "#e0e0e0",
            //     "textAlign" : "center",
            //     "height" : "400px",
            //     "margin" : "5px"
            // }
            const smallH3Style = {
                backgroundColor : "#28282B",
                color : "#FF7518",
            }
            const smallImgStyle = {
                maxWidth : "90vw",
                height : "55vh",
                paddingTop : "0px",
                marginTop : "0px",
                // paddingBottom : "70px"
            }
            const smallDivStyle = {
                color : "#28282B",
                backgroundColor : "#FF7518",
                // height : "90vh" //ere
            }
            const smallPp = {
                paddingTop : "0px",
                marginTop : "0px",
                paddingBottom : "60px",
                paddingLeft : "2vw",
                // marginRight : "100px"
            }
            setH3State(smallH3Style)
            setImgState(smallImgStyle)
            setDivState(smallDivStyle)
            setPpState(smallPp)
        }
      }
      React.useEffect(queryMatcher, [])


        return (
            <div style = {divState}>
                {/* <h4>{item.title}</h4> */}
                <img src = {item.img} style = {imgState}></img>
                <p 
                style = {ppState}
                >{item.description}</p>
                <h3 style = {h3State}>i love you dad!</h3>
            </div>
        )
    })
    const dumb = {
                color : "#28282B",
                backgroundColor : "#FF7518",
                // height : "50vh"
    }
    return (
        <div style = {dumb}>
            <h1>happy birthday dad!</h1>
            {picMap}
        </div>
    )
}