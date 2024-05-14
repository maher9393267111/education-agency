import { buildLegacyTheme } from 'sanity';

const props = {
  "--clr-white": "#fff",
  "--clr-black": "#1a1a1a",
  "--clr-brand": "#F7AB0A",
  "--clr-red": "#db4437",
  "--clr-yellow": "#f4b400",
  "--clr-green": "#0f9d58"
}

export const myTheme = buildLegacyTheme({
  "--black": props['--clr-black'],
  "--white": props['--clr-white'],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props['--clr-black'],
  "--component-text-color": props['--clr-white'],

  "--brand-primary": props['--clr-brand'],

  "--default-button-color": "#666",
  "--default-button-primary-color": props['--clr-brand'],
  "--default-button-success-color": props['--clr-green'],
  "--default-button-warning-color": props['--clr-yellow'],
  "--default-button-danger-color": props['--clr-red'],

  "--state-info-color": props['--clr-brand'],
  "--state-success-color": props['--clr-green'],
  "--state-warning-color": props['--clr-yellow'],
  "--state-danger-color": props['--clr-red'],

  "--main-navigation-color": props['--clr-black'],
  "--main-navigation-color--inverted": props['--clr-white'],

  "--focus-color": props['--clr-brand']
})