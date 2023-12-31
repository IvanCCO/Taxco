import { Stack, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { Pagination } from "../../components/Pagination";
import { SampleCard } from "../../components/SampleCard";
import { PageType } from "../../data/constants";

export function Home() {
  const sampleCards: JSX.Element[] = [];

  for (let index = 0; index < 2; index++) {
    sampleCards.push(<SampleCard key={index} />);
  }

  const justifyContent =
    sampleCards?.length < 3 ? "flex-start" : "space-between";

  return (
    <>
      <Header type={PageType.HE} />

      <main className="main space-y-8 grid place-items-center sm:px-28 md:px-44 lg:px-72 justify-center bg-he-background">
        <div className="space-y-2 text-white">
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            News
          </Text>
          <MainCard />
        </div>
        <div className="space-y-3 w-full">
          <div className="flex justify-between place-items-center text-white">
            <Text fontSize={"3xl"} fontWeight={"semibold"}>
              Posts
            </Text>
          </div>
          <Stack
            direction={["column", "column", "row"]}
            placeItems={"center"}
            justifyContent={["center", "center", justifyContent]}
            w={"full"}
          >
            {sampleCards}
          </Stack>
          <Pagination />
        </div>
      </main>
    </>
  );
}
{
  /* <a target="_blank" href="https://icons8.com/icon/8rKdRqZFLurS/mongodb-a-cross-platform-document-oriented-database-program">MongoDB a cross-platform document-oriented database program</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
