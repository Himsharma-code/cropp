/** @format */

const ImageUpload = ({ image, setImage }) => {
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <input type='file' onChange={onSelectFile} />
    </div>
  );
};
export default ImageUpload;
