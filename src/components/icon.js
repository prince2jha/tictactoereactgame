import React from 'react';
import { FaTimes,FaRegCircle} from "react-icons/fa";
import './icon.css';

const Icon=({choice})=> {
    switch(choice){
        case "cross":
            return <FaTimes className="icons"/>;
        case "circle":
            return <FaRegCircle className="icons"/>;
        default:
            return '';
    }
}

export default Icon
