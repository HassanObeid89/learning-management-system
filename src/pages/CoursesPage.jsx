import StudentPage from "./StudentPage";
import TeacherPage from "./TeacherPage";
import {useUser} from '../state/UserProvider'

export default function CoursesPage() {
    const {user} = useUser()
    return (
        <div>
            {user.role === 'student' ? <StudentPage/>:<TeacherPage/>}
        </div>
    )
}
