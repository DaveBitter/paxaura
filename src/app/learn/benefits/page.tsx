import { Heading, Text, Box } from "@radix-ui/themes";

export default function BenefitsPage() {
  return (
    <Box
      style={{
        viewTransitionName: "learn-benefits",
      }}
    >
      <Heading
        size="8"
        mb="4"
        style={{
          viewTransitionName: "learn-benefits-title",
        }}
      >
        Benefits of Breathing Exercises
      </Heading>
      <Text
        size="3"
        mb="6"
        style={{
          viewTransitionName: "learn-benefits-desc",
        }}
      >
        Discover how regular breathing practice can improve your physical and
        mental health. In our fast-paced world, finding moments of calm and
        clarity can seem like an impossible task. Yet, the solution might be as
        simple as taking a deep breath.
      </Text>

      <Box mb="6">
        <Heading size="5" mb="3">
          Physical Transformation Through Breath
        </Heading>
        <Text size="3" mb="4">
          The impact of breathing exercises on our physical health is nothing
          short of remarkable. Through regular practice, you can experience a
          natural reduction in blood pressure, improved lung function, and
          enhanced sleep quality. Your immune system becomes more robust, and
          you&apos;ll notice a significant boost in your energy levels
          throughout the day. These physical benefits create a foundation for
          overall wellness that supports every aspect of your life.
        </Text>
      </Box>

      <Box mb="6">
        <Heading size="5" mb="3">
          Mental Clarity and Emotional Balance
        </Heading>
        <Text size="3" mb="4">
          Perhaps even more profound are the mental benefits that breathing
          exercises bring. As you develop your practice, you&apos;ll find
          yourself better equipped to handle stress and anxiety. Your focus and
          concentration will improve, allowing you to be more present in your
          daily activities. The practice naturally enhances your emotional
          regulation, leading to greater mindfulness and mental clarity.
          It&apos;s like having a mental reset button that you can access
          whenever needed.
        </Text>
      </Box>

      <Box mb="6">
        <Heading size="5" mb="3">
          Long-term Benefits: A Journey of Growth
        </Heading>
        <Text size="3" mb="4">
          The true magic of breathing exercises reveals itself over time. With
          consistent practice, you&apos;ll develop better stress management
          skills that serve you in all aspects of life. Your overall health will
          improve, leading to an enhanced quality of life. Perhaps most
          importantly, you&apos;ll build greater emotional resilience, allowing
          you to navigate life&apos;s challenges with more grace and composure.
        </Text>
      </Box>

      <Box mb="6">
        <Heading size="5" mb="3">
          Enhancing Daily Life
        </Heading>
        <Text size="3" mb="4">
          The benefits of breathing exercises extend into every corner of your
          daily life. You&apos;ll notice improved performance at work, as your
          enhanced focus and reduced stress levels allow you to tackle
          challenges more effectively. Your relationships will benefit from your
          increased emotional awareness and stability. You might even find
          yourself more creative and better at making decisions, as your mind
          becomes clearer and more balanced.
        </Text>
      </Box>

      <Box mt="6">
        <Heading size="5" mb="3">
          Beginning Your Journey
        </Heading>
        <Text size="3">
          The path to experiencing these benefits begins with a simple
          commitment to regular practice. Start with just a few minutes each
          day, perhaps in the morning or before bed. As you become more
          comfortable, gradually increase your practice time. Remember that
          consistency is key – even a few minutes of daily practice can lead to
          significant improvements over time. The journey of a thousand breaths
          begins with a single inhale.
        </Text>
      </Box>
    </Box>
  );
}
