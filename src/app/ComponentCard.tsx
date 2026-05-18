import type { ComponentType } from "react";
import { Box, Card, Divider, Stack, Text, Title } from "@mantine/core";

interface ComponentCardProps {
  name: string;
  description: string;
  component: ComponentType<Record<string, unknown>>;
  args: Record<string, unknown>;
}

export function ComponentCard({
  name,
  description,
  component: Component,
  args,
}: ComponentCardProps) {
  return (
    <Card withBorder radius="md" padding="lg" shadow="sm">
      <Stack gap="xs">
        <Title order={3}>{name}</Title>
        <Text c="dimmed" size="sm">
          {description}
        </Text>
        <Divider />
        <Box>
          <Component {...args} />
        </Box>
      </Stack>
    </Card>
  );
}
