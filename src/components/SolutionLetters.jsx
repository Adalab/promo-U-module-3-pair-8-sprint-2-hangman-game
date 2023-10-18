import "../styles/layout/_letters.scss";


function SolutionLetters ({ word, userLetters }) {

    const renderSolutionLetters = () => {
        const wordLetters = word.split("");
        return wordLetters.map((eachLetter, index) => {
          return (
            <li key={index} className="letter">
              {userLetters.includes(eachLetter) ? eachLetter : ""}
            </li>
          );
        });
      };
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}
export default SolutionLetters;
