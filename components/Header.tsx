import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/images/logo.jpg"
          alt="SynkPad"
          width={60}
          height={60}
          className="hidden md:block rounded-full"
        />
        <Image
          src="/assets/images/logo.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="mr-2 md:hidden rounded-full"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
