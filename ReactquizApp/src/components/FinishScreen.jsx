function FinishScreen({ maxPossiblePoints, points, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} 👉 (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
