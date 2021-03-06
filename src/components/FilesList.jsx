import { ImBin } from "react-icons/im";
export default function FilesList({ onDelete, file }) {
  return (
    <li className="file-item">
      {file.name}
      <button
        className="round-btn "
        onClick={(event) => onDelete(event, file.name)}
      >
        <ImBin />
      </button>
    </li>
  );
}
