const express = require("express");
const app = express();
const faker = require("faker");
class User {
  constructor() {
    this._id = faker.random.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
class Company {
  constructor() {
    this._id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.addres = {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

app.get("/api/users/new", (reg, res) => {
  res.json({ user: new User });
});

app.get('/api/companies/new', (reg, res) => {
  res.json({ company: new Company })
})

app.get('/api/user/company', (reg, res) => {
  res.json({ user: new User, company : new Company });
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

