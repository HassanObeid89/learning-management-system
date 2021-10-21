import signinFields from '../data/signin-fields.json'
import InputField from '../components/InputField';
import useForm from '../utils/useForm';


export default function SignIn() {
  const [values, handleChange, setValues] = useForm();
  const inputFields = signinFields.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <div>
      <h1>SignIn</h1>
      <form>
        {inputFields}
        <button>Sign in</button>
      </form>
    </div>
  );
}
