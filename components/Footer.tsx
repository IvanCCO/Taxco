import { Divider } from "@chakra-ui/react";

export default function Footer() {
  return (
    <div className="py-5 absolute bottom-0 left-0 right-0 space-y-3">
      <Divider />
      <p className={`text-xs md:text-sm lg:text-lg  text-white text-center`}>
        Developed with love by Ivan Freire ❤️
      </p>
    </div>
  );
}