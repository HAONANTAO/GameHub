const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf("media/") + target.length;
  url.slice(0, index);
};
export default getCroppedImageUrl;
