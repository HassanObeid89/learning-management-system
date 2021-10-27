export default function VideosTable({ data }) {
  const { name, link } = data;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{link}</td>
        </tr>
      </tbody>
    </table>
  );
}
