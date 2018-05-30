//import { configDbSeed } from '../../../../tools/db/sequelize/init/utils';
//import { debug } from 'debug';
const projects = {
  modelName: 'Project',
  docs: [
    {
      body: {
        name: 'project1',
        displayName: 'pr1',
        description: '',
        order: 100,
        public: true,
        props: {},
      },
    },
    {
      body: {
        name: 'project2',
        displayName: 'pr2',
        description: '',
        order: 40,
        public: true,
        props: {},
      },
    },
  ],
};

export default [projects];
