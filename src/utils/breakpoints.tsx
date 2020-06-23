export interface ValuesInterface {
  [key: string]: number;
}

export interface ThemeInterface {
  breakpoints: BreakpointsInterface;
}
export interface BreakpointsInterface {
  up: Function;
  down: Function;
}

export const values: ValuesInterface = {
  xs: 0,
  sm: 550,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const bpTheme: ThemeInterface = {
  breakpoints: {
    up: (key: any) => `@media (min-width: ${values[key]}px)`,
    down: (key: any) => `@media (max-width: ${values[key]}px)`,
  },
};
