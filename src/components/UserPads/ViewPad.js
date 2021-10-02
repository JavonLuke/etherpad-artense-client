import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"


export const ViewPad = (props) => {
    const [padID, setPadID] = useState(props.padID)
    const [etherpadOptions, setEtherpadOptions] = useState(props.etherpadOptions)
    const [width, setWidth] = useState(400)
    const [height, setHeight] = useState(600)
    const [src, setSrc] = useState("")
    const params = useParams()

    useEffect(() => {
        console.log("Changing ViewPad")
        let p = props?.padID ? props?.padID : ""
        console.log(p)
        
        setSrc('http://localhost:9001/p/'+ p) //+ etherpadOptions?.flat().join()) 
        
    }, [padID, etherpadOptions])

    return(<div>
        <iframe src={src} width ={width} height={height}></iframe>        
    </div>)
}