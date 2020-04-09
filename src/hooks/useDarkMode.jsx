import {useState, useEffect} from "react"; 

import {useLocalStorage} from "./useLocalStorage"; 

export const useDarkMode = () => {
    const [light, setLight] = useLocalStorage("DarkModeOff"); 

    useEffect (() => {
        const element = document.body; 
        if(light === true) {
            element.classList.add('dark-mode'); 
        }
        else{
            element.classList.remove('dark-mode'); 
        }
    }, [light]); 


    return[light, setLight]

}