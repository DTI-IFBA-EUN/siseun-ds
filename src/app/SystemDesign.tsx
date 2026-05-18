import { Stack } from "@mantine/core";
import { ComponentCard } from "./ComponentCard";
import { listOfComponents } from "./listOfComponents";

export function SystemDesign() {
  return (
    <Stack p="xl" gap="lg">
      {listOfComponents.map((entry) => (
        <ComponentCard
          key={entry.name}
          name={entry.name}
          description={entry.description}
          component={entry.component}
          args={entry.args}
        />
      ))}
    </Stack>
  );
}
