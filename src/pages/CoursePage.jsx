import { useParams } from "react-router-dom"
import {useCourse} from '../state/CoursesProvider'
import FileItem from "../components/FileItem"
export default function CoursePage() {
    const {courses}=useCourse()
    const {id} = useParams()

    const course = courses.find((course)=> course.id === id)
    const {imgUrl, name, description, } = course
    const files = course.files.map((files)=><FileItem data={files}/>)

    return (
        <div>
            <img src={imgUrl}/>
           {name}
           {description}
            {files}
            
        </div>
    )
}
