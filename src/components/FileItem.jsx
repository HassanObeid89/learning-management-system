import {BsFileEarmarkText} from 'react-icons/bs'

export default function FileItem({ data }) {
  const { name, link } = data;
  return (
    <li className='file-item'>
      <BsFileEarmarkText/>
      <a target="_blank" rel="noreferrer" href={link}>
        {name}
      </a>
    </li>
  );
}
