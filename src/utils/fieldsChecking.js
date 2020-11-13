
export const emptyFieldsChecking = (fields) => {
    const emptyIndex = Object.values(fields).findIndex((value) => !value);
    if (~emptyIndex) {
      return true;
    }
    return false;
};


export const emptyAllFieldsChecking = (fields) => {
    const emptyIndex = Object.values(fields).findIndex((value) => value);
    if (~emptyIndex) {
      return false;
    }
    return true;
};
