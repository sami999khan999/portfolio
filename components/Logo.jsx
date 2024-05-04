import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" data-aos="fade-right">
      {/* <Image src="/logo3.png" width={54} height={54} priority alt="logo" /> */}
      <p className="text-primary/80 text-lg md:text-xl font-semibold">
        Sami Khan .
      </p>
    </Link>
  );
};

export default Logo;
