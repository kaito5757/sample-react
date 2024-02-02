import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

export const Test: React.FC = () => {
  console.log("reRender for Test!!");

  return (
    <main>
      <h1 style={{
        textAlign: "center"
      }}>Variation sample using React hook form + zod</h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <FormWithOnSubmitMode />
        <FormWithOnBlurMode />
      </div>
    </main>
  );
};

const formWithOnSubmitModeSchema = z.object({
  text: z.string()
    .min(1, {
      message: "Text is required!!"
    })
    .max(10, {
      message: "Text can be up to 10 characters!!"
    })
})
type formWithOnSubmitModeInputs = z.infer<typeof formWithOnSubmitModeSchema>;

const FormWithOnSubmitMode: React.FC = () => {
  console.log("reRender for FormWithOnSubmitMode!!");

  const { register, formState, handleSubmit } = useForm<formWithOnSubmitModeInputs>({
    mode: "onSubmit",
    resolver: zodResolver(formWithOnSubmitModeSchema)
  })

  const onSubmit = () => {
    console.log("Success!!")
  }

  return (
    <div style={{
      width: "50%",
    }}>
      <h2>〇mode: onSubmit</h2>

      <h3>バリエーションリスト</h3>
      <ul>
        <li>必須（message: Text is required!!）</li>
        <li>最大文字数（message: Text can be up to 10 characters!!）</li>
      </ul>

      <h3>バリエーション実行タイミング</h3>
      <ul>
        <li>フォームが送信されたとき</li>
        <li>項目の値が変更されたとき<br/>※フォームが一度も送信されていない場合は実行されない</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="text">テキスト: </label>
            <input aria-label="text" { ...register("text") } />
          </div>
          { formState.errors.text && <span style={{ color: "red" }}>{ formState.errors.text.message }</span> }
        </div>
        <div style={{
          marginTop: "2rem"
        }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

const formWithOnBlurModeSchema = z.object({
  text: z.string()
    .min(1, {
      message: "Text is required!!"
    })
    .max(10, {
      message: "Text can be up to 10 characters!!"
    })
})
type formWithonBlurModeInputs = z.infer<typeof formWithOnBlurModeSchema>;

const FormWithOnBlurMode: React.FC = () => {
  console.log("reRender for FormWithOnSubmitMode!!");

  const { register, formState, handleSubmit } = useForm<formWithonBlurModeInputs>({
    mode: "onBlur",
    resolver: zodResolver(formWithOnSubmitModeSchema)
  })

  const onSubmit = () => {
    console.log("Success!!")
  }

  return (
    <div style={{
      width: "50%",
    }}>
      <h2>〇mode: onBlur</h2>

      <h3>バリエーションリスト</h3>
      <ul>
        <li>必須（message: Text is required!!）</li>
        <li>最大文字数（message: Text can be up to 10 characters!!）</li>
      </ul>

      <h3>バリエーション実行タイミング</h3>
      <ul>
        <li>項目のフォーカスが外れたとき</li>
        <li>フォームが送信されたとき</li>
        <li>項目の値が変更されたとき<br/>※フォームが一度も送信されていない場合は実行されない</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="text">テキスト: </label>
            <input aria-label="text" { ...register("text") } />
          </div>
          { formState.errors.text && <span style={{ color: "red" }}>{ formState.errors.text.message }</span> }
        </div>
        <div style={{
          marginTop: "2rem"
        }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}