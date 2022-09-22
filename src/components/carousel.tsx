import CarouselCard, { CarouselCardData } from "./carouselcard";

const data: CarouselCardData[] = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
    to: "/",
  },
  {
    src: "https://www.jeebytes.xyz/wp-content/uploads/2022/08/PW-Prayas-2.0-For-JEE-Main-Advanced-2023.jpg",
    title: "Prayas 2.0",
    description: "India's most powerful batch for IIT JEE 2023.",
    to: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
    to: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
    to: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view1",
    description: "3.98M views",
    to: "/",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view2",
    description: "3.98M views",
    to: "/",
  },
];

export default function Carousel({
  carouselCardsData = data,
}: {
  carouselCardsData?: CarouselCardData[];
}) {
  return (
    <div className="snap-x snap-mandatory overflow-auto flex gap-14 p-10">
      {carouselCardsData.map((cd: CarouselCardData, idx: number) => {
        return <CarouselCard key={idx} carouselCardData={cd} />;
      })}
    </div>
  );
}
