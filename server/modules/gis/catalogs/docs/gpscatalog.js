export default [
  {
    body: {
      name: 'gpsdevices',
      props: {
        title: 'Каталог gps-устройств техники',
        featurePrimaryKeyNames: ['properties.controllerId'],
        fieldsSchema: {
          controllerId: {
            name: 'Идентификатор',
            type: 'text',
            showInTable: true,
            showInPopup: true,
            editable: true,
            hidden: false,
          },
          ukName: {
            name: 'Управляющая компания',
            type: 'text',
            showInTable: true,
            showInPopup: true,
            editable: true,
            hidden: false,
          },
          gosNum: {
            name: 'Госномер',
            type: 'text',
            showInTable: true,
            showInPopup: true,
            editable: true,
            hidden: false,
          },
          note: {
            name: 'Дополнительная инф.',
            type: 'text',
            showInTable: true,
            showInPopup: true,
            editable: true,
            hidden: false,
          },
          techType: {
            name: 'Тип техники',
            type: 'text',
            showInTable: true,
            showInPopup: true,
            editable: true,
            hidden: false,
          },
        },
      },
    },
  },
  {
    body: {
      name: 'test1',
      props: {
        title: 'Каталог 1',
        featurePrimaryKeyNames: ['properties.controllerId'],
      },
    },
  },
  {
    body: {
      name: 'test2',
      props: {
        title: 'Каталог 2',
        featurePrimaryKeyNames: ['properties.controllerId'],
      },
    },
  },
  {
    body: {
      name: 'test3',
      props: {
        title: 'Каталог 3',
        featurePrimaryKeyNames: ['properties.controllerId'],
      },
    },
  },
];
