import { Link } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import {useCourse} from '../state/CoursesProvider'

export default function TeacherPage() {
    const {courses}=useCourse()
    const course = courses.map(course=><CourseCard key={course.id} course={course}/>)
    return (
        <div >
            <h1>TeacherPage</h1>
            <ul>{course}</ul>
            <Link to='/add-course'>Edit</Link>
        </div>
    )
}
