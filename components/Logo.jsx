import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo3.png" width={54} height={54} priority alt="logo" />
    </Link>
  );
};

export default Logo;
