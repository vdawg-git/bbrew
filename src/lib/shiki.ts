import { compile } from "@catppuccin/vscode"
import { createRgbaVar } from "./utils"
import type { ThemeRegistration } from "shiki"
import { mocha } from "./presets"
import type { ColorName } from "@catppuccin/palette"

const shiki = compile("mocha", {
	colorOverrides: {
		all: Object.fromEntries(
			Object.keys(mocha.colors).map((name_) => {
				return [name_, createRgbaVar(name_ as ColorName)]
			})
		)
	}
})

export const shikiTheme: ThemeRegistration = {
	...shiki,
	fg: createRgbaVar("text"),
	bg: createRgbaVar("background"),
	type: "dark",
	name: "theme",
	semanticTokenColors: {}
}
