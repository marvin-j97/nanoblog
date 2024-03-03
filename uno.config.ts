import { defineConfig } from "unocss";
import unocss from "unocss/preset-uno";
import typography from "unocss/preset-typography";

export default defineConfig({
  presets: [unocss(), typography()],
});
