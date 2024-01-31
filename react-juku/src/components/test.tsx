// 参考サイト：https://zenn.dev/yumemi_inc/articles/react-effect-simply-explained

import { useEffect, useRef, useState } from "react";

export const Test: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count: ${count}, Effect fired!`);

    return () => {
      console.log(`count: ${count}, Effect cleaned-up!`);
    };
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = ref.current;
    console.log(elem);
    if (!elem) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const size = entry.borderBoxSize[0];
        console.log(`(${size.inlineSize}, ${size.blockSize})`);
      });
    });

    observer.observe(elem);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <main ref={ref}>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </main>
  );
};
