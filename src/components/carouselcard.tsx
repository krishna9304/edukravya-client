import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export interface CarouselCardData {
  src: string;
  title: string;
  description: string;
  to: string;
}

function CarouselCard({
  carouselCardData,
}: {
  carouselCardData: CarouselCardData;
}) {
  return (
    <div
      className={`min-w-[calc(100vw-5rem)] hover:ring-8 snap-center lg:min-w-[calc(44vw)] rounded-3xl bg-primary-600 flex duration-300`}
    >
      <div
        className="sm:w-1/2 flex px-8 lg:px-12 py-4 lg:py-6"
        style={{ justifyContent: "flex-end" }}
      >
        <div className="flex flex-col grow space-y-1">
          <div className="text-white text-xl md:text-3xl font-bold">
            {carouselCardData.title}
          </div>
          <hr className="w-5/6 border-secondary-400" />
          <div className="text-white text-lg">
            {carouselCardData.description}
          </div>
          <div className="flex h-full justify-center items-end p-2">
            <Link to={carouselCardData.to}>
              <Button
                color="info"
                sx={{
                  fontWeight: 600,
                }}
                variant="contained"
              >
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 sm:flex space-x-[-100%]">
        <img
          style={{
            objectFit: "cover",
          }}
          className="w-full rounded-r-3xl bg-gradient-to-l from-gray-400"
          src={carouselCardData.src}
          alt={carouselCardData.title}
        />
        <div className="bg-gradient-to-r via-transparent from-primary-600 w-full grow bg" />
      </div>
    </div>
  );
}

export default CarouselCard;
