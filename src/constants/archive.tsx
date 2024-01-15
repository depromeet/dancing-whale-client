export const ASSET_WIDTH = {
  wall: 10,
  marble: 50,
};

export const WALL_OPTIONS = {
  id: -1,
  isStatic: true,
  render: {
    fillStyle: "black",
  },
};

// TODO: height value calculate (visualViewport)
export const WIDTH = window.innerWidth > 480 ? 480 : window.innerWidth;
export const HEIGHT = window.innerHeight + window.innerHeight / 3 - 64;
