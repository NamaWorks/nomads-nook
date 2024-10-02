import { feedImages } from "../../data/constantVariables"

export const getImageById = (id) => {
  const idNumber = Number(id.split("-")[id.split("-").length-1])
  return feedImages[idNumber]
}