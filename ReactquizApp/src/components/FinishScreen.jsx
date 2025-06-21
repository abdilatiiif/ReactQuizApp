function FinishScreen({ maxPossiblePoints, points, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} 👉 (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
    </>
  );
}

export default FinishScreen;
