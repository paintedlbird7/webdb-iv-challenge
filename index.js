// Manage Recipes (id, name)
const server = require('./api/server.js');


// recipe = tracks
// ingredient = students
// dish = cohort



const port = process.env.PORT || 8000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
