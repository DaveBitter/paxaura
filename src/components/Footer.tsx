import { Flex, Text, Link } from "@radix-ui/themes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <Flex
      direction="column"
      align="center"
      gap="2"
      className="mt-20 pt-16 pb-16 border-t border-neutral-200 dark:border-neutral-700"
    >
      <Text size="2" color="gray" align="center">
        Made with ❤️ by{" "}
        <Link
          href="https://www.linkedin.com/in/davebitter/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
        >
          Dave Bitter
        </Link>
      </Text>
      <Flex align="center" gap="2">
        <GitHubLogoIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <Link
          href="https://github.com/DaveBitter/paxaura"
          target="_blank"
          rel="noopener noreferrer"
          size="2"
          className="hover:underline text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
        >
          View on GitHub
        </Link>
      </Flex>
    </Flex>
  );
}
