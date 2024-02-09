const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf("media/") 
  + "media/".length;
  url.slice(0, index);
};
export default getCroppedImageUrl;
