function Application() {
  const [output, setOutput] = useState("");

  const handleClick = (letter) => {
    let newOutput = output + letter;

    newOutput = newOutput.replace(/(.)\1{2,}/g, (match) => {
      return "_".repeat(Math.floor(match.length / 3));
    });

    setOutput(newOutput);
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {letters.map((letter) => (
          <Tile 
            key={letter} 
            letter={letter} 
            onClick={() => handleClick(letter)} 
          />
        ))}
      </aside>
      <div id="outputString">{output}</div>
    </section>
  );
}
