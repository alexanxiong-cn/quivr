import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-4">
      <Image
        className="rounded-full"
        src={"/logo.png"}
        alt="Quivr Logo"
        width={160}
        height={48}
      />

    </Link>
  );
};
