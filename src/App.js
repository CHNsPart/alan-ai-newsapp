import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'


const alanKey = '85afda625011d666d8ec3e9126927c1b2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command})=>{
                if(command==="testCommand"){
                    alert("This code was exc");
                }
            }
        })
    },[])

    return (
        <>
            <h1 className="center">CHNsPart NewsApp powered by Alan-AI</h1>
        </>
    );
}

export default App;