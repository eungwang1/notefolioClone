let jsonFile = require("jsonfile");
let faker = require("@faker-js/faker").faker;
const notefolioLength = 10000;
const creatorListLength = 10;
const recruitListLength = 3;
const academyListLength = 10;
const categoryList = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
const randomNumber = (start, end) => {
  const length = end - start + 1;
  return parseInt(start + Math.random() * length);
};

const notefolio = Array.from({ length: notefolioLength }, (v, i) => {
  const random1to9 = randomNumber(0, 9);
  return {
    username: faker.name.middleName(),
    profile: faker.image.avatar(),
    title: faker.lorem.sentence(),
    contentimg: faker.image.animals(480, 480, true),
    pdfsrc: "/pdf/sample.pdf",
    viewcount: parseInt(Math.random() * 100),
    likecount: parseInt(Math.random() * 100),
    id: i + 1 + "",
    category: categoryList[random1to9],
  };
});
const creatorList = Array.from({ length: creatorListLength }, (v, i) => ({
  coverImage: [faker.image.fashion(480, 480, true), faker.image.animals(480, 480, true)],
  profileImage: faker.image.avatar(),
  username: faker.lorem.word(),
  category: faker.lorem.words(2),
}));
const recruitList = Array.from({ length: recruitListLength }, (v, k) => ({
  image: faker.image.city(480, 480, true),
  title: faker.lorem.words(2),
  name: faker.lorem.word(),
}));
const academyList = Array.from({ length: academyListLength }, (v, k) => ({
  image: faker.image.city(480, 480, true),
  title: faker.lorem.words(2),
  content: faker.lorem.words(2),
}));

jsonFile.writeFile("./db.json", { notefolio, creatorList, recruitList, academyList });
