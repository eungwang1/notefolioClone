let jsonFile = require("jsonfile");
let faker = require("@faker-js/faker").faker;
const notefolioLength = 10000;
const creatorListLength = 10;
const recruitListLength = 3;
const notefolio = Array.from({ length: notefolioLength }, (v, i) => ({
  username: faker.name.middleName(),
  profile: faker.image.avatar(),
  title: faker.lorem.sentence(),
  contentimg: faker.image.animals(480, 480, true),
  pdfsrc: "/pdf/sample.pdf",
  viewcount: parseInt(Math.random() * 100),
  likecount: parseInt(Math.random() * 100),
  id: i + 1 + "",
}));
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

jsonFile.writeFile("./db.json", { notefolio, creatorList, recruitList });
