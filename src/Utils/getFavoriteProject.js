export const getMostFrequentOffsetUuid = (transactions) => {
  const count = {};
  let mostFrequent = null;
  let maxCount = 0;

  transactions.forEach((transaction) => {
    const offsetUuid = transaction.offset_uuid;
    count[offsetUuid] = (count[offsetUuid] || 0) + 1;
    if (count[offsetUuid] > maxCount) {
      mostFrequent = offsetUuid;
      maxCount = count[offsetUuid];
    }
  });

  return mostFrequent;
};

export const getProjectByUuid = (id, array) => {
  return array.find((obj) => obj.uuid === id);
};
