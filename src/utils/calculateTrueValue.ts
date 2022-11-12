export const calculateTrueValueDesktop = (value: number) => {
  switch (value) {
    case 2:
      return 3;
    case 19.5:
      return 6;
    case 35.7:
      return 9;
    case 52.5:
      return 12;
    case 69:
      return 15;
    case 91:
      return 50;
    default:
      return 0;
  }
};

export const calculateTrueValueMobile = (value: number) => {
  switch (value) {
    case 2:
      return 3;
    case 19.2:
      return 6;
    case 34:
      return 9;
    case 49.3:
      return 12;
    case 64.9:
      return 15;
    case 91:
      return 50;
    default:
      return 0;
  }
};

export default calculateTrueValueDesktop;
