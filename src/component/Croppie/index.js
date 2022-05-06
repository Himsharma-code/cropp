/** @format */

import "croppie/croppie.css";
import Croppie from "croppie";
import { Grid, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedImage, updatedImageFile } from "../../imageStore/imageSlice";
import { useNavigate } from "react-router";
import ImageUpload from "../ImageUpload";

export function CroppieExample() {
  const [croppie, setCroppie] = useState(null);
  const croppedImage = useSelector((state) => state.image.value);
  const imageFile = useSelector((state) => state.imageFile.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleImage(image) {
    dispatch(updatedImageFile(image));
    const el = document.getElementById("image-helper");
    if (el) {
      const croppieInstance = new Croppie(el, {
        enableExif: true,
        viewport: {
          height: 250,
          width: 250,
        },
        boundary: {
          height: 280,
          width: 400,
        },
      });
      const reader = new FileReader();
      const file = image;
      reader.readAsDataURL(file);
      reader.onload = () => {
        croppieInstance.bind({ url: reader.result });
      };
      setCroppie(croppieInstance);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (croppie !== null) {
      croppie
        .result({
          type: "base64",
          size: {
            width: 400,
            height: 400,
          },
        })
        .then((blob) => {
          dispatch(updatedImage(blob));
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {imageFile === null && (
          <Grid item xs={12}>
            <ImageUpload image={imageFile} setImage={handleImage} />
          </Grid>
        )}
        <Grid item container justify='center' xs={12}>
          <div id='image-helper'></div>
        </Grid>
        {croppie && (
          <Grid container item xs={12} justifyContent='center'>
            <Button color='primary' variant='contained' type='submit'>
              Submit
            </Button>
          </Grid>
        )}
        <Grid container item xs={12} justifyContent='center'>
          {croppedImage && <img src={croppedImage} />}
        </Grid>

        {croppedImage && (
          <Grid container item xs={12} justifyContent='center'>
            <Button onClick={() => navigate("/download")}>Download</Button>
          </Grid>
        )}
      </Grid>
    </form>
  );
}
