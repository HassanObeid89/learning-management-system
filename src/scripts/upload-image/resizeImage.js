export default async function resizeImage(image, width = 200, height = 200) {
  const canvas = document.createElement("canvas");
  const originalContext = canvas.getContext("2d");
  const resizedContext = canvas.getContext("2d");
  const resizedImage = new Image();
  let newWidth = 0;
  let newHeight = 0;

  resizedImage.src = image;
  await new Promise((result) => (resizedImage.onload = result));

  newWidth = resizedImage.width;
  newHeight = resizedImage.height;
  originalContext.drawImage(resizedImage, 0, 0);

  if (newWidth > newHeight) {
    if (newWidth > width) {
      newHeight *= width / newWidth;
      newWidth = width;
    }
  } else {
    if (newHeight > height) {
      newWidth *= height / newHeight;
      newHeight = height;
    }
  }

  canvas.width = newWidth;
  canvas.height = newHeight;
  resizedContext.drawImage(resizedImage, 0, 0, newWidth, newHeight);

  return canvas.toDataURL("image/png");
}
