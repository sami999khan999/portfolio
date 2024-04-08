import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      {/* <Image src={imgSrc} fill priority alt="Developer Image"></Image> */}
    </div>
  );
};

export default DevImg;
