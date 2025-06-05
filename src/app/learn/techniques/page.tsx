import { Heading, Text, Box, Card, Grid } from "@radix-ui/themes";

export default function TechniquesPage() {
  return (
    <Box
      style={{
        viewTransitionName: "learn-techniques",
      }}
    >
      <Heading
        size="8"
        mb="4"
        style={{
          viewTransitionName: "learn-techniques-title",
        }}
      >
        Breathing Techniques
      </Heading>
      <Text
        size="3"
        mb="6"
        style={{
          viewTransitionName: "learn-techniques-desc",
        }}
      >
        Different breathing techniques serve different purposes. Here are some
        of the most effective methods and when to use them. Each technique has
        its own history, benefits, and specific applications.
      </Text>

      <Box mb="8">
        <Heading size="5" mb="4">
          Core Breathing Techniques
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="4" mb="2">
              4-7-8 Breathing
            </Heading>
            <Text size="2" as="p" mb="2">
              • Inhale for 4 seconds
            </Text>
            <Text size="2" as="p" mb="2">
              • Hold for 7 seconds
            </Text>
            <Text size="2" as="p" mb="2">
              • Exhale for 8 seconds
            </Text>
            <Text size="2" as="p" mb="2">
              Best for: Falling asleep, reducing anxiety
            </Text>
            <Text size="2" as="p" mb="2">
              Benefits: Calms the nervous system, promotes relaxation
            </Text>
            <Text size="2" as="p" mb="2">
              History: Developed by Dr. Andrew Weil, based on ancient yogic
              practices
            </Text>
            <Text size="2" as="p" mb="2">
              Variations:
            </Text>
            <Text size="2" as="p" mb="2">
              • Beginner: 4-4-6 pattern
            </Text>
            <Text size="2" as="p" mb="2">
              • Advanced: 4-7-8 with longer holds
            </Text>
            <Text size="2" as="p">
              • Emergency: Quick 2-3-4 pattern
            </Text>
          </Card>

          <Card>
            <Heading size="4" mb="2">
              Box Breathing
            </Heading>
            <Text size="2" as="p" mb="2">
              • Inhale for 4 seconds
            </Text>
            <Text size="2" as="p" mb="2">
              • Hold for 4 seconds
            </Text>
            <Text size="2" as="p" mb="2">
              • Exhale for 4 seconds
            </Text>
            <Text size="2" as="p" mb="2">
              • Hold for 4 seconds
            </Text>
            <Text size="2" as="p" mb="2">
              Best for: Stress management, focus enhancement
            </Text>
            <Text size="2" as="p" mb="2">
              History: Used by Navy SEALs for combat stress management
            </Text>
            <Text size="2" as="p" mb="2">
              Variations:
            </Text>
            <Text size="2" as="p" mb="2">
              • Power Box: 6-6-6-6 pattern
            </Text>
            <Text size="2" as="p" mb="2">
              • Quick Box: 2-2-2-2 pattern
            </Text>
            <Text size="2" as="p">
              • Extended Box: 8-8-8-8 pattern
            </Text>
          </Card>

          <Card>
            <Heading size="4" mb="2">
              Diaphragmatic Breathing
            </Heading>
            <Text size="2" as="p" mb="2">
              • Breathe deeply into your belly
            </Text>
            <Text size="2" as="p" mb="2">
              • Let your diaphragm expand
            </Text>
            <Text size="2" as="p" mb="2">
              • Slow, controlled breaths
            </Text>
            <Text size="2" as="p" mb="2">
              Best for: General relaxation, improving lung capacity
            </Text>
            <Text size="2" as="p" mb="2">
              History: Foundation of many Eastern breathing practices
            </Text>
            <Text size="2" as="p" mb="2">
              Technique Details:
            </Text>
            <Text size="2" as="p" mb="2">
              • Place hand on belly to feel movement
            </Text>
            <Text size="2" as="p" mb="2">
              • Keep chest relatively still
            </Text>
            <Text size="2" as="p">
              • Focus on belly expansion
            </Text>
          </Card>

          <Card>
            <Heading size="4" mb="2">
              Alternate Nostril Breathing
            </Heading>
            <Text size="2" as="p" mb="2">
              • Close right nostril, inhale left
            </Text>
            <Text size="2" as="p" mb="2">
              • Close left nostril, exhale right
            </Text>
            <Text size="2" as="p" mb="2">
              • Reverse the pattern
            </Text>
            <Text size="2" as="p" mb="2">
              Best for: Mental clarity, balancing energy
            </Text>
            <Text size="2" as="p" mb="2">
              History: Ancient yogic practice (Nadi Shodhana)
            </Text>
            <Text size="2" as="p" mb="2">
              Benefits:
            </Text>
            <Text size="2" as="p" mb="2">
              • Balances left and right brain
            </Text>
            <Text size="2" as="p" mb="2">
              • Calms the mind
            </Text>
            <Text size="2" as="p">
              • Improves focus
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          Advanced Techniques
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="4" mb="2">
              Wim Hof Method
            </Heading>
            <Text size="2" as="p" mb="2">
              • 30-40 deep breaths
            </Text>
            <Text size="2" as="p" mb="2">
              • Hold breath after exhalation
            </Text>
            <Text size="2" as="p" mb="2">
              • Recovery breath
            </Text>
            <Text size="2" as="p" mb="2">
              • Repeat 3-4 rounds
            </Text>
            <Text size="2" as="p" mb="2">
              Benefits:
            </Text>
            <Text size="2" as="p" mb="2">
              • Increased energy
            </Text>
            <Text size="2" as="p" mb="2">
              • Stress reduction
            </Text>
            <Text size="2" as="p">
              • Improved immune function
            </Text>
          </Card>

          <Card>
            <Heading size="4" mb="2">
              Kapalabhati
            </Heading>
            <Text size="2" as="p" mb="2">
              • Quick, forceful exhalations
            </Text>
            <Text size="2" as="p" mb="2">
              • Passive inhalations
            </Text>
            <Text size="2" as="p" mb="2">
              • Focus on abdominal movement
            </Text>
            <Text size="2" as="p" mb="2">
              Benefits:
            </Text>
            <Text size="2" as="p" mb="2">
              • Energizing
            </Text>
            <Text size="2" as="p" mb="2">
              • Clears mind
            </Text>
            <Text size="2" as="p">
              • Improves focus
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          When to Use Each Technique
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="3" mb="2">
              Morning Practice
            </Heading>
            <Text size="2" as="p" mb="2">
              • Box Breathing for focus
            </Text>
            <Text size="2" as="p" mb="2">
              • Alternate Nostril for energy
            </Text>
            <Text size="2" as="p" mb="2">
              • Kapalabhati for awakening
            </Text>
            <Text size="2" as="p">
              • Wim Hof for energy boost
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Stress Relief
            </Heading>
            <Text size="2" as="p" mb="2">
              • 4-7-8 Breathing
            </Text>
            <Text size="2" as="p" mb="2">
              • Diaphragmatic Breathing
            </Text>
            <Text size="2" as="p" mb="2">
              • Extended Box Breathing
            </Text>
            <Text size="2" as="p">
              • Alternate Nostril for balance
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Before Sleep
            </Heading>
            <Text size="2" as="p" mb="2">
              • 4-7-8 Breathing
            </Text>
            <Text size="2" as="p" mb="2">
              • Slow Diaphragmatic Breathing
            </Text>
            <Text size="2" as="p" mb="2">
              • Extended exhale pattern
            </Text>
            <Text size="2" as="p">
              • Progressive relaxation breath
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              During Exercise
            </Heading>
            <Text size="2" as="p" mb="2">
              • Rhythmic Breathing
            </Text>
            <Text size="2" as="p" mb="2">
              • Controlled Breath Patterns
            </Text>
            <Text size="2" as="p" mb="2">
              • Power Breathing
            </Text>
            <Text size="2" as="p">
              • Recovery Breathing
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box mb="8">
        <Heading size="5" mb="4">
          Technique Combinations
        </Heading>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="3" mb="2">
              Stress Management Sequence
            </Heading>
            <Text size="2" as="p" mb="2">
              1. Start with 5 minutes of diaphragmatic breathing
            </Text>
            <Text size="2" as="p" mb="2">
              2. Transition to 5 minutes of box breathing
            </Text>
            <Text size="2" as="p" mb="2">
              3. Finish with 5 minutes of 4-7-8 breathing
            </Text>
            <Text size="2" as="p">
              Total time: 15 minutes
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Energy Boost Sequence
            </Heading>
            <Text size="2" as="p" mb="2">
              1. Begin with 3 rounds of Kapalabhati
            </Text>
            <Text size="2" as="p" mb="2">
              2. Follow with 5 minutes of alternate nostril breathing
            </Text>
            <Text size="2" as="p" mb="2">
              3. End with 2 rounds of Wim Hof method
            </Text>
            <Text size="2" as="p">
              Total time: 15-20 minutes
            </Text>
          </Card>
        </Grid>
      </Box>

      <Box>
        <Heading size="5" mb="4">
          Safety and Precautions
        </Heading>
        <Text size="3" mb="4">
          While breathing exercises are generally safe, there are some important
          considerations:
        </Text>
        <Grid columns="2" gap="4">
          <Card>
            <Heading size="3" mb="2">
              When to Avoid
            </Heading>
            <Text size="2" as="p" mb="2">
              • During acute respiratory illness
            </Text>
            <Text size="2" as="p" mb="2">
              • If feeling dizzy or lightheaded
            </Text>
            <Text size="2" as="p" mb="2">
              • During pregnancy (consult doctor)
            </Text>
            <Text size="2" as="p">
              • With certain heart conditions
            </Text>
          </Card>

          <Card>
            <Heading size="3" mb="2">
              Best Practices
            </Heading>
            <Text size="2" as="p" mb="2">
              • Start slowly and build gradually
            </Text>
            <Text size="2" as="p" mb="2">
              • Listen to your body
            </Text>
            <Text size="2" as="p" mb="2">
              • Stay hydrated
            </Text>
            <Text size="2" as="p">
              • Practice in a safe environment
            </Text>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
