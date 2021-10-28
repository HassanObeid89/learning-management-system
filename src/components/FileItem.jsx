export default function FileItem({data}) {
    const {name,link}=data
    return (
        <div>
            <a target="_blank" rel="noreferrer" href={link}>{name}</a>
        </div>
    )
}
