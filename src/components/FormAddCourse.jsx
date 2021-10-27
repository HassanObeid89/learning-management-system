//Npm package
import { useState } from "react";
import { useHistory } from "react-router";

//Project files
import addCoursefeilds from "../data/addCourse-fields.json";
import InputField from "./InputField";
import useForm from "../utils/useForm";
import { useCourse } from "../state/CourseProvider";
import { createDocument } from "../scripts/firestore";
import InputImage from "./InputImage";
import MultipleUploadField from "./MultipleUploadField";
import VideoField from "./VideoField";

export default function FormAddCourse() {
  //Global state
  const { dispatchCourse } = useCourse();

  //local state
  const [values, handleChange, setValues] = useForm();
  const [files, setFiles] = useState([]);
  const [videoLink, setVideoLink] = useState('');
  const [videosList, setVideosList] = useState([]);
  const [videoName, setVideoName] = useState("");
  const location = useHistory();

  //Methods
  function onChange(key, value) {
    const imgField = { [key]: value };
    setValues({ ...values, ...imgField });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newCourse = {
      ...values,
      files: files,
      videos:videosList
    };
    createDocument("courses", newCourse);
    setValues({});
    setFiles([]);
    dispatchCourse({ type: "ADD_COURSE", payload: newCourse });
    console.log(newCourse)
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
        <MultipleUploadField setFiles={setFiles} files={files} />
        <VideoField
          data={[videoLink, setVideoLink, videoName,setVideoName,videosList, setVideosList]}
        />
        <button>Create Course</button>
      </form>
    </div>
  );
}
