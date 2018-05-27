import Sequelize from 'sequelize';
import dbseedSchema from './dbseed-schema';
import { syncModels } from 'tools/db/sequelize/init/utils';

const localSyncForce = true;
const isNeedDbSeed = true;
const dbSeedOrderWeight = 10;

export default function(sequelize, syncForce) {
  sequelize.User = sequelize.define('User', {
    login: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    props: Sequelize.JSON,
  });

  sequelize.UserGroup = sequelize.define('UserGroup', {
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    props: Sequelize.JSON,
  });

  sequelize.Role = sequelize.define('Role', {
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    props: {
      type: Sequelize.JSON,
    },
  });

  sequelize.Rule = sequelize.define('Rule', {
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    props: {
      type: Sequelize.JSON,
    },
  });

  sequelize.UserRole = sequelize.define('UserRole', {});
  sequelize.UserGroupRole = sequelize.define('UserGroupRole', {});
  sequelize.UserGroupUser = sequelize.define('UserGroupUser', {});
  sequelize.Role.belongsToMany(sequelize.User, { through: 'UserRole' });
  sequelize.Role.belongsToMany(sequelize.UserGroup, {
    through: 'UserGroupRole',
  });
  sequelize.User.belongsToMany(sequelize.Role, { through: 'UserRole' });
  sequelize.User.belongsToMany(sequelize.UserGroup, {
    through: 'UserGroupUser',
  });
  sequelize.UserGroup.belongsToMany(sequelize.Role, {
    through: 'UserGroupRole',
  });
  sequelize.UserGroup.belongsToMany(sequelize.User, {
    through: 'UserGroupUser',
  });

  sequelize.RoleRule = sequelize.define('RoleRule', {});
  sequelize.Role.belongsToMany(sequelize.Rule, { through: 'RoleRule' });
  sequelize.Rule.belongsToMany(sequelize.Role, { through: 'RoleRule' });

  return syncModels({
    models: [
      sequelize.Role,
      sequelize.Rule,
      sequelize.User,
      sequelize.UserGroup,
      sequelize.UserGroupUser,
      sequelize.UserGroupRole,
      sequelize.UserRole,
      sequelize.RoleRule,
    ],
    force: syncForce || localSyncForce,
  }).then(() => {
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
