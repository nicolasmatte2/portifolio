import { createGlobalStyle } from "styled-components";
type Props = {darkmode: string | null}

export default createGlobalStyle<Props>`
body {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
}
:root {
  ${props => (props.darkmode === 'true' ? `
  --primary-color: #1f1f1f;
  ` : `
  --primary-color: white;
  `)}
}

`