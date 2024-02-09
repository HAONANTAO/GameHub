const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("media/") +'media/'
  url.slice(0, index);
};
export default getCroppedImageUrl;
