import React, { useEffect, useState } from "react";
import axios from "axios";


const Info = () => {
    const [item, setItem] = useState('')

    async function submit(e){
        e.prventDefault()
        try{
            await axios.post("http://localhost:5555/item",{
                item
            })
        }catch(e){
            console.log(e)
        }
    }
}

