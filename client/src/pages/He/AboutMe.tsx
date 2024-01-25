import { Button, Icon, Link } from "@chakra-ui/react";
import { IoMdPaper } from "react-icons/io";
import RESUME from "../../assets/Resume.pdf";

export default function AboutMe() {
  return (
    <div className="text-white font-inter space-y-4">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit pr-4">
        About me
      </h1>
      {/* TODO: Colocar um texto verdadeiro  */}
      <div>
        <p className="text-md font-light leading-relaxed text-justify xl:text-lg">
          {" "}
          Hello, my name is Ivan, i am a software developer inspired to conquer
          adipisicing elit. Voluptas maiores veniam voluptatem? Sequi debitis
          placeat doloremque quaerat! Repellendus, et nobis, illum maiores
          iusto, quasi rem cupiditate consectetur at ab expedita! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ut saepe quidem magnam
          totam modi rem accusantium corrupti vitae sunt dolore quas ea nemo,
          nam sint repellendus maxime hic inventore ab. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Amet iusto blanditiis magni
          voluptates, alias pariatur est rerum explicabo, rem recusandae autem,
          placeat aliquid architecto ab aperiam sed quod. Similique, suscipit.
        </p>
      </div>

      <div className="w-full grid place-items-center pt-5">
        <Link href={RESUME} isExternal>
          <Button
            leftIcon={<Icon as={IoMdPaper} />}
            size={{ base: "md", xl: "lg" }}
            colorScheme="teal"
          >
            See my Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
