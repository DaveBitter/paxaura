import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Container, Flex } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breathing Exercises",
  description: "Find the perfect breathing exercise for your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Container size="2" py="6">
            <Flex justify="end" mb="4">
              <ThemeToggle />
            </Flex>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
