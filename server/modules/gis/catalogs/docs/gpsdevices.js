export default [
  {
    body: {
      primaryKey: '1440',
      properties: {
        controllerId: '1440',
        ukName: 'УК ООО Строй транс',
        gosNum: '03-34 НН',
        note: '(К)(ПО)',
      },
      props: {},
    },
    addTo: [
      {
        modelName: 'Catalog',
        where: {
          name: 'gpsdevices',
        },
      },
    ],
  },
  {
    body: {
      primaryKey: '00871',
      properties: {
        controllerId: '00871',
        ukName: 'УК ПИК',
        gosNum: '07-48 УР',
        note: '(К)',
      },
      props: {},
    },
    addTo: [
      {
        modelName: 'Catalog',
        where: {
          name: 'gpsdevices',
        },
      },
    ],
  },
];
