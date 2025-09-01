const express = require('express');
const { createBareServer } = require('@tomphttp/bare-server-node');
const uv = require('@titaniumnetwork-dev/ultraviolet');

const app = express();
const bare = createBareServer('/bare/');

// Serve static files from public folder (if any)
app.use(express.static('public'));

// Use Ultraviolet middleware
app.use(uv.middleware());

// Export app so Vercel can run it
module.exports = app;
