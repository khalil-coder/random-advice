export default function AdviceResult({ result , err}) {
  return (
    <div>
      {result.length != 0 ? (
        result.map((theAdvice, i) => (
          <ul className="list-group p-2 m-2">
            <li
              className="list-item-group li"
              style={{ color: "white", listStyleType: "none" }}
            >
              {theAdvice.advice}
            </li>
          </ul>
        ))
      ) : (
        <p className="text-light mt-5 text-center">{err}</p>
      )}
    </div>
  );
}
