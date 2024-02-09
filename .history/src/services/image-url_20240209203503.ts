const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("md/");
  url.slice(0, index);
};
export default getCroppedImageUrl;
