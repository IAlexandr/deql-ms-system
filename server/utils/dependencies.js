import logger from 'tools/logger';
import { init } from 'tools/db/sequelize';
import options from 'tools/options';

const { debug, time } = logger('project.dependencies');

export const dependencies = async function() {
  const initialized = time('initializing');
  const db = await init({
    dbConfig: options.config.sequelize,
    NODE_ENV: options.config.NODE_ENV,
    modules: options.modules,
  });
  initialized('done.');
  return { db };
};

dependencies();
