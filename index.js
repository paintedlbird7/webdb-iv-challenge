// Manage Recipes (id, name)
const server = require('./api/server.js');


// recipes = tracks
// ingredients = students
// dish = cohort



const port = process.env.PORT || 8000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
