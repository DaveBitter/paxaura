import { Heading, Text, Card, Grid, Box } from "@radix-ui/themes";
import Link from "next/link";

export default function LearnPage() {
  return (
    <Box>
      <Heading size="8" mb="4">
        Understanding Breathing Techniques
      </Heading>
      <Text size="3" mb="6">
        Breathing exercises are powerful tools for managing stress, improving
        focus, and enhancing overall well-being. Learn about different
        techniques and how they can benefit your life.
      </Text>

      <Grid columns="2" gap="4">
        <Link href="/learn/benefits">
          <Card>
            <Heading size="4" mb="2">
              Benefits of Breathing Exercises
            </Heading>
            <Text size="2">
              Discover how regular breathing practice can improve your physical
              and mental health.
            </Text>
          </Card>
        </Link>

        <Link href="/learn/techniques">
          <Card>
            <Heading size="4" mb="2">
              Breathing Techniques
            </Heading>
            <Text size="2">
              Explore different breathing methods and when to use them.
            </Text>
          </Card>
        </Link>

        <Link href="/learn/science">
          <Card>
            <Heading size="4" mb="2">
              The Science Behind Breathing
            </Heading>
            <Text size="2">
              Learn about the physiological and psychological effects of
              breathing exercises.
            </Text>
          </Card>
        </Link>

        <Link href="/learn/practice">
          <Card>
            <Heading size="4" mb="2">
              Getting Started
            </Heading>
            <Text size="2">
              Tips and best practices for incorporating breathing exercises into
              your daily routine.
            </Text>
          </Card>
        </Link>
      </Grid>
    </Box>
  );
}
