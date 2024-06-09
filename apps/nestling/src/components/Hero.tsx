import { Card, CardMedia } from "@mui/material";
import React from "react";

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Slide } from "yet-another-react-lightbox/dist/types";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { RCAProperty } from "data/reatlorca/types";

interface HeroProps {
  property: RCAProperty;
}

const Hero = ({ property }: HeroProps) => {
  const height = 315;
  const width = 500;
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const slideImage: SlideImage = {
    src: property?.Photo?.[0]?.HighResPath,
    width,
    height,
  };

  const slides: Slide[] = [slideImage, slideImage, slideImage, slideImage];
  return (
    <>
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={slides}
        thumbnails={{
          position: "end",
        }}
        plugins={[Captions, Fullscreen, Thumbnails, Video, Zoom]}
      />
      <div
        className="flex justify-center content-center w-full h-[450px] bg-[#3F3F45]"
        style={{ backgroundColor: "#3F3F45" }}
      >
        <div className="flex max-w-screen-lg">
          <div className="flex content-center flex-wrap mr-1 ">
            <Card
              sx={{ width: 500, height: 315, margin: "2em" }}
              onClick={() => {
                console.log("clicked", setIsLightboxOpen(true));
              }}
            >
              <CardMedia
                title="Relaxing app background"
                sx={{ height: 500 }}
                image={property?.Photo?.[0]?.HighResPath}
              />
            </Card>
          </div>
          <div className="flex w-[500px] content-center flex-wrap justify-center ml-1 flex-col">
            <div className="flex m-1 ">
              <Card
                className="m-1 w-[250px] h-[150px]"
                onClick={() => {
                  console.log("clicked", setIsLightboxOpen(true));
                }}
              >
                <CardMedia
                  title="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  image={property?.Photo?.[0]?.HighResPath}
                />
              </Card>
              <Card
                className="m-1 w-[250px] h-[150px] "
                onClick={() => {
                  console.log("clicked", setIsLightboxOpen(true));
                }}
              >
                <CardMedia
                  title="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  image={property?.Photo?.[0]?.HighResPath}
                />
              </Card>
            </div>
            <div className="flex m-1">
              <Card
                className="m-1 w-[250px] h-[150px]"
                onClick={() => {
                  console.log("clicked", setIsLightboxOpen(true));
                }}
              >
                <CardMedia
                  title="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  image={property?.Photo?.[0]?.HighResPath}
                />
              </Card>
              <Card
                className="m-1 w-[250px] h-[150px]"
                onClick={() => {
                  console.log("clicked", setIsLightboxOpen(true));
                }}
              >
                <CardMedia
                  title="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  image={property?.Photo?.[0]?.HighResPath}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
