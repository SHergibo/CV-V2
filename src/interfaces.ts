export interface IFontAwesomeIncon {
  label: string;
  value: string;
  prefix: string;
}

interface IProfTitle {
  id: string;
  nameProfessionTitle: string;
  fontAwesomeIcon: {
    [key: string]: IFontAwesomeIncon;
  };
  svgIconProfTitle: string;
}

interface IprofPic {
  id: string;
  fileName: string;
  alt: string;
}

export interface IGeneralInfo {
  firstname: string;
  lastname: string;
  address: {
    street: string;
    number: string;
    zip: string;
    city: string;
  };
  phone: string;
  email: string;
  birthdate: string;
  licence: string;
  professionTitles: Array<IProfTitle>;
  profilePic: IprofPic;
  hasPortfolio: boolean;
  hasResume: boolean;
}
