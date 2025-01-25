const arrPositionModel = [
  {
    id: 'fv',
    desktop: {
      position: {
        x: 5,
        y: 2,
        z: 1
      },
      rotation: {
        x: 0,
        y: -0.9,
        z: 0
      },
      scale: {
        x: 0.02,
        y: 0.02,
        z: 0.02
      },
    },
    tablet: {
      position: {
        x: 5 * 0.8,
        y: 2,
        z: 1
      },
      rotation: {
        x: 0,
        y: -0.9,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
    mobile: {
      position: {
        x: 5 * 0.6,
        y: 2 * 1.6,
        z: 0.6
      },
      rotation: {
        x: 0,
        y: -0.9,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
  },
  {
    id: 'featured',
    desktop: {
      position: {
        x: 8,
        y: -4,
        z: 1.2
      },
      rotation: {
        x: -1.6,
        y: -1.2,
        z: -2
      },
      scale: {
        x: 0.02,
        y: 0.02,
        z: 0.02
      },
    },
    tablet: {
      position: {
        x: 5 * 0.8,
        y: -4,
        z: 1.2
      },
      rotation: {
        x: -1.6,
        y: -1.2,
        z: -2
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
    mobile: {
      position: {
        x: 5 * 0.6,
        y: -4 * 1.4,
        z: 0.6
      },
      rotation: {
        x: -1.6,
        y: -1.2,
        z: -2
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
  },
  {
    id: 'video',
    desktop: {
      position: {
        x: -8,
        y: 4,
        z: 1.8
      },
      rotation: {
        x: 1.0,
        y: 0.8,
        z: -0.3
      },
      scale: {
        x: 0.02,
        y: 0.02,
        z: 0.02
      },
    },
    tablet: {
      position: {
        x: -5 * 0.6,
        y: 5,
        z: 1.8
      },
      rotation: {
        x: 1.0,
        y: 0.8,
        z: -0.3
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
    mobile: {
      position: {
        x: -5 * 0.6,
        y: 5 * 0.8,
        z: 1.8
      },
      rotation: {
        x: 1.0,
        y: 0.8,
        z: -0.3
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
  },
  {
    id: 'best-deal',
    desktop: {
      position: {
        x: -5,
        y: -3,
        z: 4
      },
      rotation: {
        x: -0.4,
        y: 0.9,
        z: 0
      },
      scale: {
        x: 0.02,
        y: 0.02,
        z: 0.02
      },
    },
    tablet: {
      position: {
        x: -5 * 0.6,
        y: -3,
        z: 4 * 0.6
      },
      rotation: {
        x: -0.4,
        y: 0.9,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
    mobile: {
      position: {
        x: -4 * 0.6,
        y: -3,
        z: 4 * 0.6
      },
      rotation: {
        x: -0.4,
        y: 0.9,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
  },
  {
    id: 'properties',
    desktop: {
      position: {
        x: 5,
        y: -3,
        z: 5
      },
      rotation: {
        x: 0.5,
        y: -2,
        z: 0
      },
      scale: {
        x: 0.02,
        y: 0.02,
        z: 0.02
      },
    },
    tablet: {
      position: {
        x: 5 * 0.6,
        y: -3 * 0.6,
        z: 5 * 0.6
      },
      rotation: {
        x: 0.5,
        y: -2,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
    mobile: {
      position: {
        x: 5 * 0.6,
        y: -3 * 0.8,
        z: 5 * 0.6
      },
      rotation: {
        x: 0.5,
        y: -2,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
  },
  {
    id: 'contact',
    desktop: {
      position: {
        x: 7,
        y: 3,
        z: 3
      },
      rotation: {
        x: 1,
        y: -1,
        z: 0
      },
      scale: {
        x: 0.02,
        y: 0.02,
        z: 0.02
      },
    },
    tablet: {
      position: {
        x: 7 * 0.4,
        y: 5,
        z: 3 * 0.6
      },
      rotation: {
        x: 1,
        y: -1,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
    mobile: {
      position: {
        x: 5 * 0.6,
        y: 2 * 1.6,
        z: 0.6
      },
      rotation: {
        x: 0,
        y: -0.9,
        z: 0
      },
      scale: {
        x: 0.02 * 0.8,
        y: 0.02 * 0.8,
        z: 0.02 * 0.8
      },
    },
  },
];

export default arrPositionModel;
