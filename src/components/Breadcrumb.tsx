"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { Flex, Text } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { exercises } from "@/data/exercises";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const pathLabels: Record<string, string> = {
  "": "Home",
  learn: "Learn",
  benefits: "Benefits",
  techniques: "Techniques",
  science: "Science",
  practice: "Practice",
  exercises: "Exercises",
};

export function Breadcrumb() {
  const pathname = usePathname();

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null;
  }

  // Split the pathname and build breadcrumb items
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbItems: BreadcrumbItem[] = [];

  // Always include Home
  breadcrumbItems.push({ label: "Home", href: "/" });

  // Build breadcrumb items from path segments
  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // For dynamic routes like /exercises/[id], show the actual exercise name
    let label = pathLabels[segment] || segment;

    // If this is an exercise ID, find the actual exercise name
    if (pathSegments[index - 1] === "exercises") {
      const exercise = exercises.find((ex) => ex.id === segment);
      if (exercise) {
        label = exercise.name;
      } else {
        label = `Exercise ${segment}`;
      }
    }

    breadcrumbItems.push({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      href: currentPath,
    });
  });

  return (
    <div className="overflow-x-auto mb-4">
      <Flex align="center" gap="2" className="whitespace-nowrap min-w-fit">
        {breadcrumbItems.map((item, index) => (
          <Flex
            key={item.href}
            align="center"
            gap="2"
            className="flex-shrink-0"
          >
            {index === breadcrumbItems.length - 1 ? (
              // Current page - not clickable, purple color
              <Text
                size="2"
                className="text-purple-600 dark:text-purple-400 font-medium"
              >
                {item.label}
              </Text>
            ) : (
              // Clickable breadcrumb item - dark colors
              <Link href={item.href} className="hover:underline">
                <Text
                  size="2"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {item.label}
                </Text>
              </Link>
            )}

            {/* Separator - don't show after last item */}
            {index < breadcrumbItems.length - 1 && (
              <ChevronRightIcon className="w-3 h-3 text-gray-400 flex-shrink-0" />
            )}
          </Flex>
        ))}
      </Flex>
    </div>
  );
}
