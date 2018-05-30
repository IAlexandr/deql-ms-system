import Sequelize from 'sequelize';
import { syncModels } from 'tools/db/sequelize/init/utils';
import dbseedSchema from './dbseed-schema';

const localSyncForce = true;
const isNeedDbSeed = true;
const dbSeedOrderWeight = 20;

export default function(sequelize, syncForce) {
  sequelize.Project = sequelize.define('Project', {
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    displayName: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    public: {
      type: Sequelize.BOOLEAN,
    },
    order: {
      defaultValue: 50,
      type: Sequelize.INTEGER, //вес в списке
    },
    props: Sequelize.JSON,
  });

  sequelize.ProjectLayer = sequelize.define('ProjectLayer', {
    public: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  sequelize.Project.belongsToMany(sequelize.Layer, {
    through: 'ProjectLayer',
  });

  //sequelize.User.belongsToMany(sequelize.Role, { through: "UserRole" });

  return sequelize
    .syncModels({
      models: [sequelize.Project, sequelize.ProjectLayer], //sequelize.UserRole
      force: syncForce || localSyncForce,
    })
    .then(() => {
      let schema = []; /*() => Promise.resolve();*/
      if (isNeedDbSeed) {
        schema = dbseedSchema;
      }

      return Promise.resolve({
        dbseedSchema: schema,
        orderWeight: dbSeedOrderWeight,
      });
    });
}
