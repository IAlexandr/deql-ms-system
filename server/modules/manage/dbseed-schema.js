import { configDbSeed } from 'tools/db/sequelize/init/utils';

function createUserGroups() {
  let arr = [
    {
      body: {
        name: 'administrators',
        props: { displayName: 'Супер-администраторы' },
      },
    },
    {
      body: {
        name: 'users',
        props: { displayName: 'Пользователи' },
      },
    },
    {
      body: {
        name: 'guests',
        props: { displayName: 'Гости' },
      },
    },
  ];

  return arr;
}

const userGroups = {
  modelName: 'UserGroup',
  docs: createUserGroups(),
};

const roles = {
  modelName: 'Role',
  docs: [
    {
      body: {
        name: 'system',
        props: { displayName: 'Системная' },
      },
    },
    {
      body: {
        name: 'administrator',
        props: { displayName: 'Администратор' },
      },
      addTo: [
        {
          modelName: 'UserGroup',
          where: { name: 'administrators' },
        },
      ],
    },
    {
      body: {
        name: 'all_layers',
        props: { displayName: 'Все слои' },
      },
      addTo: [
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        name: 'layer1',
        props: { displayName: 'layer1' },
      },
    },
    {
      body: {
        name: 'layer2',
        props: { displayName: 'layer2' },
      },
    },
  ],
};

const rules = {
  modelName: 'Rule',
  docs: [
    {
      body: {
        name: 'viewUserList',
        props: { displayName: 'Просмотр списка пользователей' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'system' },
        },
      ],
    },
    {
      body: {
        name: 'createUser',
        props: { displayName: 'Создать нового пользователя' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'system' },
        },
      ],
    },
    {
      body: {
        name: 'updateUser',
        props: { displayName: 'Изменить существующего пользователя' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'administrator' },
        },
      ],
    },
    {
      body: {
        name: 'deleteUser',
        props: { displayName: 'Удалить существующего пользователя' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'administrator' },
        },
      ],
    },
  ],
};

function createUsers() {
  let arr = [
    {
      body: {
        login: 'super',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Супер-администратор' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'system' },
        },
      ],
    },
    {
      body: {
        login: 'admin',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Администратор' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'administrator' },
        },
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'administrators' },
        },
      ],
    },
    {
      body: {
        login: 'user-1',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 1' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-2',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 2' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-3',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 3' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-4',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 4' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-5',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 5' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-6',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 6' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-7',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 7' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-8',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 8' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-9',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 9' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-10',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 10' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-11',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 11' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-12',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 12' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-13',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 13' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-14',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 14' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-15',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 15' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-16',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 16' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-17',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 17' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-18',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 18' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-19',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 19' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
    {
      body: {
        login: 'user-20',
        password: '098f6bcd4621d373cade4e832627b4f6', // "test"
        props: { displayName: 'Пользователь 20' },
      },
      addTo: [
        {
          modelName: 'Role',
          where: { name: 'all_layers' },
        },
        {
          modelName: 'UserGroup',
          where: { name: 'users' },
        },
      ],
    },
  ];

  return arr;
}

const users = {
  modelName: 'User',
  docs: createUsers(),
};
/*
export default function() {
  debug('manage dbseed');
  return configDbSeed([roles, users]);
}*/

export default [userGroups, roles, rules, users];
