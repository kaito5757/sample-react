import { useState } from "react";
import { ReturnHome } from "../common/returnHome";

export const UseStateSample = () => {
  const [text, setText] = useState<string | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <main>
      <h1>useState Sample</h1>
      <label htmlFor="sample-text">テキスト: </label>
      <input aria-label="sample-text" type="text" onChange={onChange} />
      <p>入力値: { text }</p>
      <ReturnHome />
    </main>
  )
}