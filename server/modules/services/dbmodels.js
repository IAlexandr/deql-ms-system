import Sequelize from 'sequelize';
import dbseedSchema from './dbseed-schema';
import { SERVFAIL } from 'dns';

const localSyncForce = true;
const isNeedDbSeed = true;
const dbSeedOrderWeight = 100;

export default function(sequelize, syncForce) {
  sequelize.ServiceType = sequelize.define('ServiceType', {
    name: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    description: Sequelize.STRING,
    schemaProps: Sequelize.JSON,
  });

  sequelize.Service = sequelize.define('Service', {
    connection: Sequelize.JSON,
    props: Sequelize.JSON,
  });

  sequelize.ServiceType.hasMany(sequelize.Service, { as: 'Services' });
  sequelize.Service.belongsTo(sequelize.ServiceType, { as: 'ServiceType' });

  return sequelize
    .syncModels({
      models: [sequelize.ServiceType, sequelize.Service],
      force: syncForce || localSyncForce,
    })
    .then(() => {
      let schema = [];
      if (isNeedDbSeed) {
        schema = dbseedSchema;
      }

      return Promise.resolve({
        dbseedSchema: schema,
        orderWeight: dbSeedOrderWeight,
      });
    });
}
