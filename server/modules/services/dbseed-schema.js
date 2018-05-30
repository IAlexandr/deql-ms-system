const serviceTypes = {
  modelName: 'ServiceType',
  docs: [
    {
      body: {
        name: 'service1',
        description: 'description of service1',
        schemaProps: {
          typeDefs: 'type Query {...}',
        },
      },
    },
  ],
};

const services = {
  modelName: 'Service',
  docs: [
    {
      body: {
        connection: {
          url: 'akalalal',
        },
      },
      addTo: {
        modelName: 'ServiceType',
        where: { name: 'service1' },
      },
    },
  ],
};

export default [serviceTypes, services];
