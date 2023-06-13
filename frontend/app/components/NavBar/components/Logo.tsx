import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-4">
      <Image
        className="rounded-full"
        src={"/logo.png"}
        alt="Quivr Logo"
        width={150}
        height={30}
      />

    </Link>
  );
};
