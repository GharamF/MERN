const joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
  joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomeJoke = (req , res )=>{
  joke.aggregate([{ $sample: { size: 1 } }])
  .then(randomJoke => res.json({ joke: randomJoke }))
  .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  joke.create(req.body)
    .then(newjoke => res.json({ joke: newjoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedjoke => res.json({ joke: updatedjoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
