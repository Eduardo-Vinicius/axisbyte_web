import "server-only"
import type { Locale } from "./config"

const dictionaries = {
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
  us: () => import("./dictionaries/us.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
