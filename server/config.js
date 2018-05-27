export default {
  projectName: 'deql-ms-system',
  redis: {
    host: '10.10.10.20',
    port: 32768,
  },
  sequelize: {
    options: {
      dialect: 'postgres',
      host: '10.10.10.20',
      port: 5445,
      logging: false,
    },
    username: 'mspostgis',
    password: 'mspostgis',
    dbName: 'postgis',
    accessDbSeed: true,
    syncForce: true,
    accessSyncForce: true,
  },
  rabbitmq: {
    connection: {
      name: '',
      user: '',
      pass: '',
      host: '',
      port: '',
      vhost: '%2f',
    },
  },
  NODE_ENV: 'development',
};
