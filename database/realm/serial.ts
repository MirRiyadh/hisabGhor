export const addNewSerial = (currentSerial: [{}]) => {
  const current = currentSerial.slice(-1);
  const newSerial = Number(current[0].serial) + 1;
  return newSerial;
};
