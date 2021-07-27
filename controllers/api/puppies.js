const Puppy = require('../../models/puppy');

module.exports = {
	index,
	show,
};

async function index(req, res) {
	const puppies = await Puppy.find({}).sort('name').exec();
	res.json(puppies);
}

async function show(req, res) {
	const puppy = await Puppy.findById(req.params.id);
	res.json(puppy);
}
