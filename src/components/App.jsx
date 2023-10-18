// import viteLogo from '/vite.svg'
import "../styles/App.scss";
import "../fonts/KgTenThousandReasons-R1ll.ttf";
import { useEffect, useState } from "react";
import Header from "./Header";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters ";
import Form from "./Form";

function App() {
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  
  const failedLetters = userLetters.filter((letter) => !word.includes(letter));
  console.log(failedLetters);
  const numberOfErrors = failedLetters.length;

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch("https://dev.adalab.es/api/random/word") // El 5 es el id de la Princesa Leia
      .then((response) => response.json())
      .then((Data) => {
        // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
        setWord(Data.word);
      });
  }, []);

  

 const handleLastLetter = (value)=>{
setLastLetter(value);
setUserLetters([...userLetters, value]);
};

  return (
    <div className="page">
      <Header/>
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters}/>
          <ErrorLetters word={word} userLetters={userLetters}/>
        <Form lastLetter={lastLetter} userLetters={userLetters} handleLastLetter= {handleLastLetter}/>
        </section>
        <Dummy numberOfErrors= {numberOfErrors}/>
      </main>
    </div>
  );
}

export default App;