const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("mdeid/");
  url.slice(0, index);
};
export default getCroppedImageUrl;
