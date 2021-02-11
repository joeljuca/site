const path = require("path");

module.exports = {
  images: {
    domains: ["www.gravatar.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
