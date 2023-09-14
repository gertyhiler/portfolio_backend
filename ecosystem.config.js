module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: "production"
      }
    },
  ],
};
