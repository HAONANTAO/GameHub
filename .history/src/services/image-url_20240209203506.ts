const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("media/");
  url.slice(0, index);
};
export default getCroppedImageUrl;
