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
          <td><input type='text'value={name}/></td>
          <td><input type='text'value={link}/></td>
        </tr>
      </tbody>
    </table>
  );
}
