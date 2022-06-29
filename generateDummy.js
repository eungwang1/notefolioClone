let jsonFile = require("jsonfile");
let faker = require("@faker-js/faker").faker;
const data = {
  data: [
    {
      name: "123",
      age: 123,
    },
    {
      name: "123",
      age: 123,
    },
  ],
};
const notefolioLength = 93;
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
const cardList = Array.from({ length: 8 }, (v, i) => ({
  coverImage: [faker.image.fashion(480, 480, true), faker.image.animals(480, 480, true)],
  profileImage: faker.image.avatar(),
  username: faker.lorem.word(),
  category: faker.lorem.words(2),
}));
const recruitList = Array.from({ length: 3 }, (v, k) => ({
  image: faker.image.city(480, 480, true),
  title: faker.lorem.words(2),
  name: faker.lorem.word(),
}));

// jsonFile.writeFile("./src/assets/db/db.json", { notefolio, cardList, recruitList });
jsonFile.writeFile("./db.json", { notefolio, cardList, recruitList });
