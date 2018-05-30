import Sequelize from 'sequelize';
import dbseedSchema from './dbseed-schema';

const localSyncForce = true;
const isNeedDbSeed = true;
const dbSeedOrderWeight = 40;

export default function(sequelize, syncForce) {
  console.log('define Catalog CatalogDoc');
  sequelize.Catalog = sequelize.define('Catalog', {
    name: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    props: Sequelize.JSON,
  });

  sequelize.CatalogDoc = sequelize.define(
    'CatalogDoc',
    {
      primaryKey: {
        type: Sequelize.STRING,
      },
      properties: Sequelize.JSON,
      props: Sequelize.JSON,
    },
    {
      indexes: [
        {
          name: 'segment_index',
          method: 'BTREE',
          fields: [{ attribute: 'primaryKey', order: 'ASC' }],
        },
      ],
    }
  );

  sequelize.Catalog.hasMany(sequelize.CatalogDoc, { as: 'CatalogDocs' });
  sequelize.CatalogDoc.belongsTo(sequelize.Catalog, { as: 'Catalog' });

  sequelize.LayerCatalog = sequelize.define('LayerCatalog');
  sequelize.Layer.belongsToMany(sequelize.Catalog, {
    through: sequelize.LayerCatalog,
  });
  sequelize.Catalog.belongsToMany(sequelize.Layer, {
    through: sequelize.LayerCatalog,
  });
  // sequelize.Feature.hasMany(sequelize.CatalogDoc, { as: 'CatalogDoc' });
  // sequelize.CatalogDoc.belongsTo(sequelize.Feature, { as: 'Feature' });

  return sequelize
    .syncModels({
      models: [
        sequelize.Catalog,
        sequelize.CatalogDoc,
        sequelize.LayerCatalog,
      ],
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
