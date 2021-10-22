import { useUser } from "../state/UserProvider"

export default function LandingPage() {
    const {user} = useUser()
    console.log("landing page",user)
    return (
        <div>
            <h1>landing page</h1>
            <p>welcome {user.name}</p>
        </div>
    )
}
