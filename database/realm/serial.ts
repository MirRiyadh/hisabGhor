export const addNewSerial = (currentSerial: [{}]) => {
  const current = currentSerial.slice(-1);
  const newSerial = current.serial + 1;
  return newSerial;
};
