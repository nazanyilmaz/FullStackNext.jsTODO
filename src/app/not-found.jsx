import { Delius } from "next/font/google";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});

const notFound = () => {
  return (
    <div
      style={delius.style}
      className="h-full grid place-items-center text-gray-500 text-3xl"
    >
      Aradiginiz Sayfa Mevcut Degil
    </div>
  );
};

export default notFound;
