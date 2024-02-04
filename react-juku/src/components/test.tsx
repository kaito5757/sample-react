import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const Test: React.FC = () => {
  console.log("reRender for Test!!");

  return (
    <main>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Variation sample using React hook form + zod
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormWithOnSubmitMode />
        <FormWithOnBlurMode />
        <FormWithOnChangeMode />
      </div>
    </main>
  );
};

const formSchema = z.object({
  text: z
    .string()
    .min(1, {
      message: "「Text」は必須です",
    })
    .max(10, {
      message: "「Text」の最大文字数は10文字です",
    }),
});
type formInputs = z.infer<typeof formSchema>;

const FormWithOnSubmitMode: React.FC = () => {
  console.log("reRender for FormWithOnSubmitMode!!");

  const { register, formState, handleSubmit } = useForm<formInputs>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    console.log("Success!!");
  };

  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <h2>〇mode: onSubmit</h2>

      <h3>バリエーションリスト</h3>
      <ul>
        <li>必須（message: 「Text」は必須です）</li>
        <li>最大文字数（message: 「Text」の最大文字数は10文字です）</li>
      </ul>

      <h3>バリエーション実行タイミング</h3>
      <ul>
        <li>フォームが送信されたとき</li>
        <li>
          項目の値が変更されたとき
          <br />
          ※フォームが一度も送信されていない場合は実行されない
        </li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="text">テキスト: </label>
            <input aria-label="text" {...register("text")} />
          </div>
          {formState.errors.text && (
            <span style={{ color: "red" }}>
              {formState.errors.text.message}
            </span>
          )}
        </div>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

const FormWithOnBlurMode: React.FC = () => {
  console.log("reRender for FormWithBlurMode!!");

  const { register, formState, handleSubmit } = useForm<formInputs>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    console.log("Success!!");
  };

  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <h2>〇mode: onBlur</h2>

      <h3>バリエーションリスト</h3>
      <ul>
        <li>必須（message: 「Text」は必須です）</li>
        <li>最大文字数（message: 「Text」の最大文字数は10文字です）</li>
      </ul>

      <h3>バリエーション実行タイミング</h3>
      <ul>
        <li>項目のフォーカスが外れたとき</li>
        <li>フォームが送信されたとき</li>
        <li>
          項目の値が変更されたとき
          <br />
          ※フォームが一度も送信されていない場合は実行されない
        </li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="text">テキスト: </label>
            <input aria-label="text" {...register("text")} />
          </div>
          {formState.errors.text && (
            <span style={{ color: "red" }}>
              {formState.errors.text.message}
            </span>
          )}
        </div>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

const FormWithOnChangeMode: React.FC = () => {
  console.log("reRender for FormWithOnChangeMode!!");

  const { register, formState, handleSubmit } = useForm<formInputs>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    console.log("Success!!");
  };

  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <h2>〇mode: onChange</h2>

      <h3>バリエーションリスト</h3>
      <ul>
        <li>必須（message: 「Text」は必須です）</li>
        <li>最大文字数 10文字（message: 「Text」の最大文字数は10文字です）</li>
      </ul>

      <h3>バリエーション実行タイミング</h3>
      <ul>
        <li>項目の値が変更されたとき</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="text">テキスト: </label>
            <input aria-label="text" {...register("text")} />
          </div>
          {formState.errors.text && (
            <span style={{ color: "red" }}>
              {formState.errors.text.message}
            </span>
          )}
        </div>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
