module.exports = {
  apps: [
    {
      name: 'sketch',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 45811,
        NODE_ENV: 'production',
      },
    },
  ],
};