import { Button, Image, SimpleGrid } from "@chakra-ui/react";
import { Reveal } from "../../../components/Reveal";

interface Props {
  title: string;
  author: string;
  imageUrl: string;
  buyUrl: string;
}

export default function Suggestions() {
  function goToUrl(url: string) {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  const Recomendation = ({ title, author, imageUrl: url, buyUrl }: Props) => (
    <div className="flex flex-col justify-center place-items-center space-y-3 self-center lg:flex-row  lg:justify-start lg:space-x-4">
      <Image
        src={url}
        boxSize={"180px"}
        objectFit={"contain"}
        maxW={"150px"}
        alt={`Book: ${title}`}
      />
      <div className="flex justify-between flex-col space-y-5">
        <div className="text-center lg:text-start">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-base text-low-text-black">{author}</p>
        </div>
        <Button
          onClick={() => goToUrl(buyUrl)}
          className="self-center lg:self-start"
          color={"black"}
          w={"max-content"}
          bg={"white"}
          _hover={{
            bg: "silver",
          }}
        >
          Compre na Amazon
        </Button>
      </div>
    </div>
  );

  const books = [
    <Recomendation
      key={0}
      title="The Millionaire Fastlane"
      author="M. J. DeMarco"
      imageUrl="https://m.media-amazon.com/images/I/616BYPbOCyL._SL1500_.jpg"
      buyUrl="https://amzn.to/3YEnpvW"
    />,
    <Recomendation
      key={1}
      title="Guia do Mochileiro das Galáxias"
      author="Douglas Adams"
      imageUrl="https://m.media-amazon.com/images/I/81s2iRXDDSL._SL1500_.jpg"
      buyUrl="https://amzn.to/3T4Iv2Q"
    />,
    <Recomendation
      key={2}
      title="Mostre seu trabalho!"
      author=" Austin Kleon"
      imageUrl="https://m.media-amazon.com/images/I/71vKQ7MJm-L._SL1500_.jpg"
      buyUrl="https://amzn.to/4dUwGF4"
    />,
    <Recomendation
      key={3}
      title="Design Patterns"
      author="Erich Gamma"
      imageUrl="https://prodimage.images-bn.com/pimages/9780201633610_p0_v5_s1200x630.jpg"
      buyUrl="https://amzn.to/4cJj7H9"
    />,
    <Recomendation
      key={4}
      title="Traction: How Any Startup Can Achieve Explosive Customer Growth"
      author="Gabriel Weinberg"
      imageUrl="https://m.media-amazon.com/images/I/81zyjfthhcL._SL1500_.jpg"
      buyUrl="https://amzn.to/4e7gWOo"
    />,
    <Recomendation
      key={5}
      title="How to Write Copy That Sells"
      author="Ray Edwards"
      imageUrl="https://taxco-bucket.s3.us-east-2.amazonaws.com/default/books/how-to-write-copy.png"
      buyUrl="https://amzn.to/4eyLoRN"
    />,
  ];

  return (
    <div className="text-white font-inter flex flex-col items-center space-y-4 h-full lg:items-start ">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
        Leituras do momento
      </h1>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacingY={10} w={"full"}>
        {books.map((value, index) => (
          <Reveal
            key={index}
            animation={{ delay: index / 8 }}
            position={{ x: -75 }}
          >
            {value}
          </Reveal>
        ))}
      </SimpleGrid>
    </div>
  );
}
