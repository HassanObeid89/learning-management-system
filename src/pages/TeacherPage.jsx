import CourseCard from "../components/CourseCard"
import {useCourse} from '../state/CourseProvider'

export default function TeacherPage() {
    const {course}=useCourse()
    const courses = course.map(course=><CourseCard course={course}/>)
    return (
        <div>
            <h1>TeacherPage</h1>
            <ul>{courses}</ul>
        </div>
    )
}
