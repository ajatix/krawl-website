import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";

import { Box, Button, Grommet, Heading, grommet } from "grommet";
import { Github } from "grommet-icons";

hljs.registerLanguage("kotlin", kotlin);

const App = () => {
  return (
    <Grommet theme={grommet} full>
      <Box align="center" pad="xlarge" height="small" gap="medium" fill>
        <Box>
          <Heading level={1}>krawl.it</Heading>
          <Button icon={<Github />} label="GitHub" primary />
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
