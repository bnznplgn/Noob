// Ici, je stock toutes les numéros aléatoires dans un tableau 
import { useState } from "react";

function Tirage() {

    // 
    const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);
    const [stars, setStars] = useState([0, 0]);

    

    const randomNumbers = Math.floor(Math.random() * 50);
    setNumbers(randomNumbers);

    const randomStarsNumbers = Math.floor(Math.random() * 12);
    setStars(randomStarsNumbers);
    function handelClick() {

      }


    // Un tableau qui permet de stocker une suite aléatoire de 5 chiffres


    return (
        <div>

        </div>
    )
}

export default MyNumbers;