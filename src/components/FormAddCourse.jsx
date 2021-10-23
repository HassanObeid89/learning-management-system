import { useHistory } from "react-router";
import addCoursefeilds from "../data/addCourse-fields.json";
import InputField from "./InputField";
import useForm from "../utils/useForm";
import { useCourse } from "../state/CourseProvider";
import { createDocument } from "../scripts/firestore";
import InputImage from "./InputImage";

export default function FormAddCourse() {
  const [values, handleChange, setValues] = useForm();
  const { dispatchCourse } = useCourse();
  const location = useHistory();

  function onChange(key, value) {
    const imgField = { [key]: value };
    setValues({ ...values, ...imgField });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newCourse = {
      ...values,
    };
    console.log(values);
    createDocument("courses", newCourse);
    setValues({});
    dispatchCourse({ type: "ADD_COURSE", payload: newCourse });
    alert("Course Added");
    location.goBack();
  }

  const inputFields = addCoursefeilds.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <div>
      <p>
        Create new course by adding videos, slides, pdf and assignments for your
        students.
      </p>
      <form onSubmit={handleSubmit}>
        <InputImage imgUrl={values.imgUrl || ''} label="Image" onChange={onChange} />
        {inputFields}
        <button>Create Course</button>
      </form>
    </div>
  );
}
