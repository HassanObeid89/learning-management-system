import { Link } from "react-router-dom"
import StudentPage from "./StudentPage";
import TeacherPage from "./TeacherPage";
import {useUser} from '../state/UserProvider'

export default function CoursesPage() {
    const {user} = useUser()
    return (
        <div>
            {user.role === 'student' ? <StudentPage/>:<TeacherPage/>}
            <Link to='/add-course/new-course'>
            Add New Course
            </Link>
        </div>
    )
}
