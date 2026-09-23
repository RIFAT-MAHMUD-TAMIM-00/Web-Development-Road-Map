function woodQuantityCalcu(ChairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const chairTotalQuantity = ChairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalQuantity + tableTotalWood + bedTotalWood;
  return totalWood;
}

const wood = woodQuantityCalcu(40,20,15);
console.log("Wood needed:", wood)
