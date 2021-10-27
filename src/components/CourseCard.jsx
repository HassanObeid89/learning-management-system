export default function CourseCard({course}) {
    const {name, description,imgUrl} = course
    return (
        <div>
            <li>
                <img src={imgUrl} alt=''/>
                <h3>{name}</h3>
                <p>{description}</p>
            </li>
        </div>
    )
}
