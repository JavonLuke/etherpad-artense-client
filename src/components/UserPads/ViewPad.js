import { useEffect } from "react"
import { useState } from "react"
export const ViewPad = (props) => {
    const [padID, setPadID] = useState(props.padID)
    const [etherpadOptions, setEtherpadOptions] = useState(props.etherpadOptions)
    const [width, setWidth] = useState(400)
    const [height, setHeight] = useState(600)
    const [src, setSrc] = useState("")

    useEffect(() => {
        setSrc('http://localhost:9001/p/'+ padID + etherpadOptions?.flat().join()) 
        
    }, [padID, etherpadOptions])

    return(<div>
        <iframe src={src} width ={width} height={height}></iframe>
    </div>)


}