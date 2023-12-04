module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run public -- --disableLiveReload --minify",
      startServerReadyPattern: "Web Server is available",
      url: ["http://localhost:8008/congo/samples/emoji/"],
      settings: {
        skipAudits: ["uses-text-compression", "uses-long-cache-ttl"],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
