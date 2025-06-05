import { Link } from "next-view-transitions";
import { Flex, Text } from "@radix-ui/themes";

export function Navigation() {
  return (
    <Flex gap="4" mb="6">
      <Link href="/" className="hover:underline">
        <Text size="3">Home</Text>
      </Link>
      <Link href="/learn" className="hover:underline">
        <Text size="3">Learn</Text>
      </Link>
    </Flex>
  );
}
