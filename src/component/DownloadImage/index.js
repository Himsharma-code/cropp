/** @format */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const DownloadImage = () => {
  const image = useSelector((state) => state.image.value);
  const imageFile = useSelector((state) => state.imageFile.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!image) {
      navigate("/");
    }
  }, []);

  const downloadedImageName = imageFile?.name ?? "image.jpg";

  return (
    <div>
      <a href={image} download={downloadedImageName}>
        Click here to download an image{" "}
      </a>
    </div>
  );
};
export default DownloadImage;
