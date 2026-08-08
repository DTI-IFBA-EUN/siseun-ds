import type { ComponentType } from "react";
import { Box, Card, Stack, Text, Title } from "@mantine/core";

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
    <Card withBorder radius="md" padding="lg" shadow="sm" style={{ backgroundColor: args.isDark ? 'var(--siseun-color-blue-warm-vivid-90)' : 'var(--siseun-color-pure-0)' }}>
      <Stack gap="xs">
        <Title order={3}>{name}</Title>
        <Text c="dimmed" size="sm">
          {description}
        </Text>
        
        <Box style={{ marginTop: '1rem', minHeight: '80px' }}>
          <Component {...args} />
        </Box>
      </Stack>
    </Card>
  );
}
