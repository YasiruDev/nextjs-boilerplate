import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { request } from '../config/action'
import useFetch from "../config/useFetch";
import { getWinners } from "../services/winner";

const anotherPage = () => {  
    const [winner, setWinner] = useState();
    const winnerFetch = useFetch(getWinners({ programId:1}));

    useEffect(() => {
        if (winnerFetch.response) {
            setWinner(winnerFetch.response.data);
        }

    }, [winnerFetch.response]);

    const handleButtonClick=()=>{
        winnerFetch.calApi(getWinners({ programId:2 }))
    }
    return (
        <>       
        <div>
        Another Page        
        </div>
        <div>
            <button  type="button" onClick={() => handleButtonClick()}>Load new winners</button>
        </div>
        <div>
            Winner data : {winner}
        </div>
        </>
    )
}

export default anotherPage