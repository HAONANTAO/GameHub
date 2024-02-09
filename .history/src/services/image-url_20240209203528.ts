const getCroppedImageUrl = (url: string) => {
  const target = 
  const index = url.indexOf("media/") 
  + "media/".length;
  url.slice(0, index);
};
export default getCroppedImageUrl;
