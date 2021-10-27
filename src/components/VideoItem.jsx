export default function VideoItem({ data }) {
  const { name, link } = data;
  console.log(data);
  return (
    <div>
      name: {name}
      <br />
      link: {link}
    </div>
  );
}
