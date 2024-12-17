export interface ThemeColors {
  background: string;
  foreground: string;
  selection: string;
  comment: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  purple: string;
  cyan: string;
  pink: string;
}

export interface ThemeVariant {
  name: string;
  colors: ThemeColors;
}

export interface Font {
  name: string;
  family: string;
  ligatureSupport: boolean;
  downloadUrl: string;
}

export interface Application {
  name: string;
  icon: string;
  fileFormat: string;
}