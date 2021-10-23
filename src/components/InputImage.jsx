// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import { uploadImage } from "../scripts/cloudStorage";

export default function InputImage({ onChange, label, imgUrl }) {
  const image = imgUrl === '' ? Placeholder : imgUrl;

  console.log(image);
  // Methods
  async function onFileChange(event) {
    const imgName = event.target.files[0].name.split(".")[0];
    const image_url = await uploadImage(event, imgName);
    onChange("imgUrl", image_url);
  }

  return (
    <fieldset className="input-image">
      <label className="custom-file-chooser">
        {label}
        <input onChange={(event) => onFileChange(event)} type="file" />
        <img src={image} alt="" />
      </label>
    </fieldset>
  );
}
