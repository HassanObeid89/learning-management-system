import InputField from "../components/InputField";
import signupFields from "../data/signup-fields.json";
import useForm from "../utils/useForm";
import { createAccount } from "../scripts/Authentication";
export default function SignUp() {
  const [values, handleChange, setState] = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const account = await createAccount(values.email, values.password);
  }
  const inputFields = signupFields.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        {inputFields}
        <button>Submit</button>
      </form>
    </div>
  );
}
