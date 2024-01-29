import { FC, useCallback, useState } from "react";

export const Q1: FC = () => {
  const [judgeNum, seeJudgeNum] = useState<number>();
  const [isPrimeNumber, setIsPrimeNumber] = useState<boolean>(false);

  const judgePrimeNumber = useCallback(() => {
    if (!judgeNum || judgeNum < 2) {
      setIsPrimeNumber(false);
      return;
    }

    for (let i = 2; i < judgeNum; i++) {
      if (judgeNum % i === 0) {
        setIsPrimeNumber(false);
        return;
      }
    }

    setIsPrimeNumber(true);
  }, [judgeNum]);

  return (
    <main>
      <h1>Q1.tsx に素数を判定するメソッドを作成してください！</h1>
      <label htmlFor="input">数字を入力してください。</label>
      <input
        id="input"
        type="number"
        onChange={(e) => seeJudgeNum(e.target.valueAsNumber)}
      />
      <button onClick={judgePrimeNumber}>素数判定</button>
      <h1>{isPrimeNumber ? "素数" : "not素数"}</h1>
    </main>
  );
};
