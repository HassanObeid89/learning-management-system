import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../scripts/cloudStorage";

export default function MultipleUploadField({ setFiles, files }) {
  const onDrop = useCallback(
    async (acceptedFiles) => {
      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i];
        const cloudStorage_url = await uploadFile(file, file.name);
        const file_url = { name: file.name, link: cloudStorage_url };
        setFiles((current) => [...current, file_url]);
      }
    },
    [setFiles]
  );

  const file = files.map((file, index) => <li key={index}>{file.name}</li>);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop some files here, or click to select files</p>
      <ul>{file}</ul>
    </div>
  );
}
