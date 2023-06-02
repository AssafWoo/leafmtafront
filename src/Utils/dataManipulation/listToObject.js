// convert a list to a object, for better performance.
// the byKey prop is used to determine what should we call our key
export const listToObject = (list) => {
    let newObject = {};
      list.forEach((item) => {
        Object.assign(newObject, {
            [item.name]: item.uuid,
        });
      });
    return newObject;
  };
  