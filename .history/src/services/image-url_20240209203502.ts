const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("mded/");
  url.slice(0, index);
};
export default getCroppedImageUrl;
