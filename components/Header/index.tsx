"use client";
import { Logo } from "./Logo";
import { Hamburguer } from "./Hamburguer";
import { useRouter, usePathname  } from "next/navigation";

const beforeStyle = (
  text: string,
  color: string,
  path: string,
  onClick: () => void
): React.ReactElement => {
  const currentPath = usePathname()
  const isActive = currentPath === path;

  return (
    <span
      className={`${
        !isActive && "header-item"
      } relative cursor-pointer p-1 text-xl text-white`}
      id={text}
      onClick={onClick}
    >
      <span>{text}</span>
      {isActive && <span className={`circle ${color}`}></span>}
    </span>
  );
};

const headerItens = ({ onClick }: { onClick: (path: string) => void }) => {
  const PATHS = {
    ROOT: "/",
    ABOUT: "/about/me",
    WORLD: "/world",
    TAXCO: "/about/taxco"
  }
  return (
    <div className="hidden sm:inline-flex w-1/2 justify-between text-lg">
      {beforeStyle("Me", "bg-purple-700", PATHS.ABOUT, () => onClick(PATHS.ABOUT))}
      {beforeStyle("Posts", "bg-orange-700", PATHS.ROOT, () => onClick(PATHS.ROOT))}
      {beforeStyle("World", "bg-cyan-700", PATHS.WORLD, () => onClick(PATHS.WORLD))}
      {beforeStyle("Taxco", "bg-green-800", PATHS.TAXCO, () => onClick(PATHS.TAXCO))}
    </div>
  );
};

export default function Header() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 inline-flex justify-between px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 place-items-center z-50 bg-he-background`}
    >
      <Logo />

      {headerItens({ onClick: handleClick })}

      <div className="sm:hidden">
        <Hamburguer />
      </div>
    </div>
  );
}
