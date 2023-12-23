import {
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
  CardFooter,
  AspectRatio,
} from "@chakra-ui/react";

export function MainCard() {
  return (
    <>
      <Card maxW="sm">
          <AspectRatio ratio={16/9}>
            <Image
              src="https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn"
              alt="A big octopus managing containers"
              borderRadius="lg"
              objectFit="cover"
            />
          </AspectRatio>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="lg">Orquestando conteiners com Kubernets</Heading>
              <Text>
                Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas
                agora como de fato orquestrar conteiners com ele e fazer a
                diferenca é algo que pou...
              </Text>
            </Stack>
          </CardBody>
          <CardFooter justify="space-between">
            <Text fontSize="sm" color="gray.500">
              02-12-2022
            </Text>
            <Text fontSize="sm" color="gray.500">
              writed by @ivan_miranda
            </Text>
          </CardFooter>
      </Card>
    </>
  );
}
