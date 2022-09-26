import CarouselCard, { CarouselCardData } from "./carouselcard";
import batchThumbnail from "../assets/boxes.svg";

const data: CarouselCardData[] = [
  {
    src: batchThumbnail,
    title: "Night view",
    description: "4.21M views",
    to: "/dashboard/home",
  },
  {
    src: batchThumbnail,
    title: "Prayas 2.0",
    description: "India's most powerful batch for IIT JEE 2023.",
    to: "/dashboard/home",
  },
  {
    src: batchThumbnail,
    title: "Lake view",
    description: "4.74M views",
    to: "/dashboard/home",
  },
  {
    src: batchThumbnail,
    title: "Mountain view",
    description: "3.98M views",
    to: "/dashboard/home",
  },
  {
    src: batchThumbnail,
    title: "Mountain view1",
    description: "3.98M views",
    to: "/dashboard/home",
  },
  {
    src: batchThumbnail,
    title: "Mountain view2",
    description: "3.98M views",
    to: "/dashboard/home",
  },
];

export default function Carousel({
  carouselCardsData = data,
}: {
  carouselCardsData?: CarouselCardData[];
}) {
  return (
    <div className="snap-x w-screen snap-mandatory overflow-auto flex gap-14 px-10 py-6">
      {carouselCardsData.map((cd: CarouselCardData, idx: number) => {
        return <CarouselCard key={idx} carouselCardData={cd} />;
      })}
    </div>
  );
}
