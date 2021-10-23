import StudentPage from "./StudentPage";
import TeacherPage from "./TeacherPage";
import {useUser} from '../state/UserProvider'

export default function CourcesPage() {
    const {user} = useUser()
    return (
        <div>
            {user.role === 'student' ? <StudentPage/>:<TeacherPage/>}
        </div>
    )
}
