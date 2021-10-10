const fastify = require("fastify")();
const path = require("path");

fastify.register(require("fastify-static"), {
	root: path.join(__dirname, "dst"),
});

fastify.listen(8080, (err, address) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	
	console.log(`listening on ${address}`);
});