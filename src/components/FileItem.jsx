export default function FileItem({data}) {
    const {name,link}=data
    return (
        <div>
            <a target="_blank" href={link}>{name}</a>
        </div>
    )
}
