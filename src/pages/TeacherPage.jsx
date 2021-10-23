import { Link } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import {useCourse} from '../state/CourseProvider'

export default function TeacherPage() {
    const {course}=useCourse()
    console.log(course)
    const courses = course.map(course=><CourseCard course={course}/>)
    return (
        <div>
            <h1>TeacherPage</h1>
            <ul>{courses}</ul>
            <Link to='/add-course'>
            <button>Add New Cource</button>
            </Link>
        </div>
    )
}
