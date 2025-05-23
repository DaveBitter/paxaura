import { Heading, Text, Box, Card, Grid } from "@radix-ui/themes";

export default function PracticePage() {
  return (
    <Box>
      <Heading size="8" mb="4">
        Getting Started with Breathing Practice
      </Heading>
      <Text size="3" mb="6">
        Incorporating breathing exercises into your daily routine can be simple
        and rewarding. Here&apos;s a comprehensive guide to help you establish
        and maintain your practice, with detailed instructions and practical
        tips for success.
      </Text>

      <Box mb="8">
        <Heading size="5" mb="4">
          Creating Your Practice Space
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="4" mb="2">
              Physical Environment
            </Heading>
            <Text size="2" as="p" mb="2">
              • Choose a quiet, well-ventilated room
            </Text>
            <Text size="2" as="p" mb="2">
              • Ensure comfortable temperature
            </Text>
            <Text size="2" as="p" mb="2">
              • Minimize external distractions
            </Text>
            <Text size="2" as="p" mb="2">
              • Consider natural lighting
            </Text>
            <Text size="2" as="p">
              • Keep the space clean and organized
            </Text>
          </Card>

          <Card>
            <Heading size="4" mb="2">
              Essential Equipment
            </Heading>
            <Text size="2" as="p" mb="2">
              • Comfortable cushion or chair
            </Text>
            <Text size="2" as="p" mb="2">
              • Timer or meditation app
            </Text>
            <Text size="2" as="p" mb="2">
              • Optional: calming music
            </Text>
            <Text size="2" as="p" mb="2">
              • Optional: essential oils
            </Text>
            <Text size="2" as="p">
              • Optional: blanket for comfort
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          Establishing Your Routine
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="4" mb="2">
              Time Management
            </Heading>
            <Text size="2" as="p" mb="2">
              • Start with 5 minutes daily
            </Text>
            <Text size="2" as="p" mb="2">
              • Choose a consistent time
            </Text>
            <Text size="2" as="p" mb="2">
              • Set reminders or alarms
            </Text>
            <Text size="2" as="p" mb="2">
              • Gradually increase duration
            </Text>
            <Text size="2" as="p">
              • Be flexible when needed
            </Text>
          </Card>

          <Card>
            <Heading size="4" mb="2">
              Creating Habits
            </Heading>
            <Text size="2" as="p" mb="2">
              • Link to existing routines
            </Text>
            <Text size="2" as="p" mb="2">
              • Use habit tracking apps
            </Text>
            <Text size="2" as="p" mb="2">
              • Celebrate small wins
            </Text>
            <Text size="2" as="p" mb="2">
              • Stay consistent
            </Text>
            <Text size="2" as="p">
              • Be patient with progress
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          Proper Posture and Alignment
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="4" mb="2">
              Seated Position
            </Heading>
            <Text size="2" as="p" mb="2">
              • Sit with straight spine
            </Text>
            <Text size="2" as="p" mb="2">
              • Relaxed shoulders
            </Text>
            <Text size="2" as="p" mb="2">
              • Hands on lap or knees
            </Text>
            <Text size="2" as="p" mb="2">
              • Chin slightly tucked
            </Text>
            <Text size="2" as="p">
              • Comfortable position
            </Text>
          </Card>

          <Card>
            <Heading size="4" mb="2">
              Body Awareness
            </Heading>
            <Text size="2" as="p" mb="2">
              • Check for tension
            </Text>
            <Text size="2" as="p" mb="2">
              • Relax facial muscles
            </Text>
            <Text size="2" as="p" mb="2">
              • Soften the jaw
            </Text>
            <Text size="2" as="p" mb="2">
              • Release shoulder tension
            </Text>
            <Text size="2" as="p">
              • Maintain comfort
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          Progression Guide
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="3" mb="2">
              Week 1-2: Foundation
            </Heading>
            <Text size="2" as="p" mb="2">
              • 5 minutes daily
            </Text>
            <Text size="2" as="p" mb="2">
              • Basic breathing awareness
            </Text>
            <Text size="2" as="p" mb="2">
              • Focus on posture
            </Text>
            <Text size="2" as="p">
              • Establish routine
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Week 3-4: Building
            </Heading>
            <Text size="2" as="p" mb="2">
              • 10 minutes daily
            </Text>
            <Text size="2" as="p" mb="2">
              • Introduce basic techniques
            </Text>
            <Text size="2" as="p" mb="2">
              • Practice consistency
            </Text>
            <Text size="2" as="p">
              • Track progress
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Month 2: Deepening
            </Heading>
            <Text size="2" as="p" mb="2">
              • 15-20 minutes daily
            </Text>
            <Text size="2" as="p" mb="2">
              • Combine techniques
            </Text>
            <Text size="2" as="p" mb="2">
              • Explore variations
            </Text>
            <Text size="2" as="p">
              • Notice benefits
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Long-term: Mastery
            </Heading>
            <Text size="2" as="p" mb="2">
              • 20-30 minutes daily
            </Text>
            <Text size="2" as="p" mb="2">
              • Advanced techniques
            </Text>
            <Text size="2" as="p" mb="2">
              • Customize practice
            </Text>
            <Text size="2" as="p">
              • Share knowledge
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          Common Challenges and Solutions
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="3" mb="2">
              Mental Challenges
            </Heading>
            <Text size="2" as="p" mb="2">
              • Wandering mind
            </Text>
            <Text size="2" as="p" mb="2">
              • Impatience
            </Text>
            <Text size="2" as="p" mb="2">
              • Self-doubt
            </Text>
            <Text size="2" as="p">
              • Expectations
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Physical Challenges
            </Heading>
            <Text size="2" as="p" mb="2">
              • Discomfort
            </Text>
            <Text size="2" as="p" mb="2">
              • Restlessness
            </Text>
            <Text size="2" as="p" mb="2">
              • Sleepiness
            </Text>
            <Text size="2" as="p">
              • Tension
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Practical Challenges
            </Heading>
            <Text size="2" as="p" mb="2">
              • Finding time
            </Text>
            <Text size="2" as="p" mb="2">
              • Maintaining consistency
            </Text>
            <Text size="2" as="p" mb="2">
              • Creating space
            </Text>
            <Text size="2" as="p">
              • Staying motivated
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Solutions
            </Heading>
            <Text size="2" as="p" mb="2">
              • Start small
            </Text>
            <Text size="2" as="p" mb="2">
              • Be flexible
            </Text>
            <Text size="2" as="p" mb="2">
              • Track progress
            </Text>
            <Text size="2" as="p">
              • Seek support
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          Tips for Success
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="3" mb="2">
              Daily Practice
            </Heading>
            <Text size="2" as="p" mb="2">
              • Start small and build gradually
            </Text>
            <Text size="2" as="p" mb="2">
              • Be consistent rather than perfect
            </Text>
            <Text size="2" as="p" mb="2">
              • Track your progress
            </Text>
            <Text size="2" as="p">
              • Celebrate small wins
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Long-term Success
            </Heading>
            <Text size="2" as="p" mb="2">
              • Adjust practice as needed
            </Text>
            <Text size="2" as="p" mb="2">
              • Stay curious and open
            </Text>
            <Text size="2" as="p" mb="2">
              • Learn from challenges
            </Text>
            <Text size="2" as="p">
              • Share your journey
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box>
        <Heading size="5" mb="4">
          Remember
        </Heading>
        <Text size="3" mb="4">
          The goal is not to achieve perfect breathing but to develop a
          sustainable practice that enhances your well-being. Be patient with
          yourself and enjoy the journey of discovery and improvement. Every
          breath is an opportunity to connect with yourself and cultivate
          greater awareness and peace.
        </Text>
        <Text size="3">
          Your breathing practice is unique to you. Listen to your body, honor
          your needs, and allow your practice to evolve naturally over time. The
          benefits will come not from forcing progress, but from consistent,
          mindful practice.
        </Text>
      </Box>
    </Box>
  );
}
