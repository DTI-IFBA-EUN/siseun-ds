import { MantineProvider } from "@mantine/core";
import theme from "../styles/theme";

import { SystemDesign } from "../app/SystemDesign";

export function MantineProviderClient() {
  return (
    <MantineProvider theme={theme}>
      <SystemDesign />
    </MantineProvider>
  );
}
