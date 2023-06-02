import { removeWhiteSpace } from "../../../Utils/dataManipulation/removeWhiteSpace";

export const validateEssentials = (origin, destination, project) => {
  if (
    removeWhiteSpace(origin) !== "" &&
    origin.length > 0 &&
    removeWhiteSpace(destination) !== "" &&
    destination.length > 0 
  ) {
    return true;
  }
  return false;
};

export const extractFavorite = (data) => {
  const favorites = data?.filter((project) => project.allowed_for_merchant);
  return favorites;
};


export const findProjectByName = (chosenProjectName, projectsArray) => {
    return projectsArray.find((projects) => projects.name === chosenProjectName);
}

export const removeWhiteSpaces = (string) => {
	return string.replace(/\s/g, "");
};
