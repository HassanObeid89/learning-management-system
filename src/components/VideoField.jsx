import VideosTable from "./VideosTable";

export default function VideoField({ data }) {
  const [
    videoLink,
    setVideoLink,
    videoName,
    setVideoName,
    videosList,
    setVideosList,
  ] = data;

  function onSubmit(event) {
    event.preventDefault();
    const video = {
      name: videoName,
      link: videoLink,
    };
    setVideosList([...videosList, video]);
    setVideoLink("");
    setVideoName("");
  }

  const video = videosList.map((video, index) => (
    <VideosTable key={index} data={video} />
  ));
  return (
    <fieldset>
      <label>
        <b>Video Name</b>
        <input
          type="text"
          value={videoName}
          onChange={(event) => setVideoName(event.target.value)}
        />
      </label>
      <label>
        <b>Video Link</b>
        <input
          type="text"
          value={videoLink}
          onChange={(event) => setVideoLink(event.target.value)}
        />
        <button onClick={(event) => onSubmit(event)}>Add Link</button>
      </label>
      {video}
    </fieldset>
  );
}
