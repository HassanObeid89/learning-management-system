//Npm package
import { useParams } from "react-router-dom";

//Project files
import { useCourse } from "../state/CoursesProvider";
import FileItem from "../components/FileItem";
import VideoItem from "../components/VideoItem";

export default function CoursePage() {
  const { courses } = useCourse();
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);
  const { imgUrl, name, description } = course;
  const filesList = course.files.map((files) => <FileItem data={files} />);
  const videosList = course.videos.map((video) => <VideoItem data={video} />);

  return (
    <div className='course-page'>
      <img className='hero' src={imgUrl} alt="" />
      <h2>Files</h2>
      <ul>{filesList}</ul>
      <h2>Videos</h2>
      {videosList}
    </div>
  );
}
