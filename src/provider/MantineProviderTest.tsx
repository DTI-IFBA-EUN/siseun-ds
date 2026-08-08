import { MantineProvider } from "@mantine/core";
import theme from "../styles/theme";

import { Test } from "../app/Test";

export function MantineProviderTest() {
  return (
    <MantineProvider theme={theme}>
      <Test />
    </MantineProvider>
  );
}
