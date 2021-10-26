import { useHistory } from "react-router";
import addCoursefeilds from "../data/addCourse-fields.json";
import InputField from "./InputField";
import useForm from "../utils/useForm";
import { useCourse } from "../state/CourseProvider";
import { createDocument } from "../scripts/firestore";
import InputImage from "./InputImage";
import { useState } from "react";
import MultipleUploadField from "./MultipleUploadField";

export default function FormAddCourse() {
  const [values, handleChange, setValues] = useForm();
  const { dispatchCourse } = useCourse();
  const location = useHistory();
  const [files, setFiles] = useState([]);

  function onChange(key, value) {
    const imgField = { [key]: value };
    setValues({ ...values, ...imgField });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newCourse = {
      ...values,
      files: files,
    };
    createDocument("courses", newCourse);
    setValues({});
    dispatchCourse({ type: "ADD_COURSE", payload: newCourse });
    alert("Course Added");
    location.goBack();
  }

  const inputFields = addCoursefeilds.map((input) => (
    <InputField
      key={input.key}
      options={input}
      handleChange={handleChange}
      values={values}
    />
  ));
  return (
    <div>
      <p>
        Create new course by adding videos, slides, pdf and assignments for your
        students.
      </p>
      <form onSubmit={handleSubmit}>
        <InputImage imgUrl={values.imgUrl || ""} onChange={onChange} />
        {inputFields}
        <MultipleUploadField setFiles={setFiles} />
        <button>Create Course</button>
      </form>
    </div>
  );
}
