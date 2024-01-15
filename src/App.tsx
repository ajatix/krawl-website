import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";

import { Box, Button, Grommet, Heading, Image, grommet } from "grommet";
import { Github } from "grommet-icons";

hljs.registerLanguage("kotlin", kotlin);

const App = () => {
  return (
    <Grommet theme={grommet} full>
      <Box align="center" pad="xlarge" height="small" gap="xsmall" fill>
        <Image src="/logo.png" fit="contain" />
        <Heading level={1}>krawl.it</Heading>
        <Button icon={<Github />} href="https://github.com/ajatix/krawl" label="GitHub" primary />
      </Box>
    </Grommet>
  );
};

export default App;
