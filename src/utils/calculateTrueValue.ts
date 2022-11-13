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

export const transferDesktopToMobile = (value: number) => {
  switch (value) {
    case 2:
      return 2;
    case 19.5:
      return 19.2;
    case 19.2:
      return 19.2;
    case 35.7:
      return 34;
    case 34:
      return 34;
    case 52.5:
      return 49.3;
    case 49.3:
      return 49.3;
    case 69:
      return 64.9;
    case 64.9:
      return 64.9;
    case 91:
      return 91;
    default:
      return 0;
  }
};

export const transferMobileToDesktop = (value: number) => {
  switch (value) {
    case 2:
      return 2;
    case 19.2:
      return 19.5;
    case 19.5:
      return 19.5;
    case 34:
      return 35.7;
    case 35.7:
      return 35.7;
    case 49.3:
      return 52.5;
    case 52.5:
      return 52.5;
    case 64.9:
      return 69;
    case 69:
      return 69;
    case 91:
      return 91;
    default:
      return 0;
  }
};

export default calculateTrueValueDesktop;
