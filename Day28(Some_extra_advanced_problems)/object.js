const student = {
  name: "sakib Khan",
  id: 121,
  address: "movie Cinema",
  isSingle: true,
  friends: ["apu", "raz", "Salman", "amin"],
  movies: [
    { name: "no-01", year: 2015 },
    { name: "kingKhan", year: 2018 },
  ],
  act: function () {
    console.log("acting like sakib khan");
  },
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: "tesla",
      ceo: "elon musk",
      country: "usa",
    },
  },
};
student.act()
// console.log(student.friends);
// console.log(student.car);

