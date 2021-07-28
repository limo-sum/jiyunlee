import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      main: string;
      sub: string;
    };
  }
}
declare module "@fortawesome/react-fontawesome";
