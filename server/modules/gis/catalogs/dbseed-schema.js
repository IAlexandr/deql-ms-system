import gpscatalog from './docs/gpscatalog';
import gpsdevices from './docs/gpsdevices';

const catalogs = {
  modelName: 'Catalog',
  docs: gpscatalog,
};

const catalogDocs = {
  modelName: 'CatalogDoc',
  docs: gpsdevices,
};

export default [catalogs, catalogDocs];
