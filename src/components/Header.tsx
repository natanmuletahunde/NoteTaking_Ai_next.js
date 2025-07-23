import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />
      </Link>
    </div>
  );
};

export default Header;
