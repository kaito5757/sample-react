import { useReducer, useState } from "react"
import { ReturnHome } from "../common/returnHome";

type ActionType = {
  type: CalcType;
  val: number;
}

type CalcType = "add" | "sub" | "mul" | "div" | "reset";

export const UseReducerSample = () => {
  const [val, setVal] = useState<number>(0);
  const [result, dispatch] = useReducer(calcReducer, 0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.valueAsNumber);
  }

  const onClick = (type: CalcType) => {
    if (type === "reset") {
      setVal(0);
    }
    dispatch({ type, val });
  }

  return (
    <main>
      <h1>useReducer Sample</h1>
      <p>計算式: 結果 ➕➖✖️➗ 入力値</p>
      <label htmlFor="sample-text">入力値: </label>
      <input aria-label="sample-text" type="number" value={val} onChange={onChange} />
      <p></p>
      <button onClick={() => onClick("add")}>足し算</button>
      <button onClick={() => onClick("sub")}>引き算</button>
      <button onClick={() => onClick("mul")}>掛け算</button>
      <button onClick={() => onClick("div")}>割り算</button>
      <button onClick={() => onClick("reset")}>リセット</button>
      <p>結果: { result }</p>
      <ReturnHome />
    </main>
  )
}

const calcReducer = (result: number, action: ActionType): number => {
  if (!action.val) return result;

  switch (action.type) {
    case "add":
      return result + action.val;
    case "sub":
      return result - action.val;
    case "mul":
      return result * action.val;
    case "div":
      return result / action.val;
    case "reset":
      return 0;
    default:
      throw new Error("Invalid action type");
  }
} 