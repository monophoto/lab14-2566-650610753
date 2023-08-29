"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Rating,
  Text,
  Textarea,
  Title,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating size="lg" />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>

      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>

      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination mt="md" color="orange" total={20} position="center" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Jetsadawut Papherata 650610753
      </Text>
    </Container>
  );
}
