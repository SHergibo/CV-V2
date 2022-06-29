export interface IFontAwesomeIcon {
  label: string;
  value: string;
  prefix: string;
}

interface IProfTitle {
  id: string;
  nameProfessionTitle: string;
  fontAwesomeIcon: IFontAwesomeIcon;
  svgIconProfTitle: string;
}

interface IImage {
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
  profilePic: IImage;
  description: string;
  hasPortfolio: boolean;
  hasResume: boolean;
}

interface ITechnoUsed {
  value: string;
  label: string;
}

export interface IProject {
  _id: string;
  urlWeb: string;
  urlGithub: string;
  projectName: string;
  pageIndex: string;
  description: string;
  technoUsedFront: Array<ITechnoUsed>;
  technoUsedBack: Array<ITechnoUsed>;
  images: Array<IImage>;
}

export interface IPortfolio {
  arrayData: Array<IProject>;
  totalData: number;
}

export interface IEducExpResume {
  dateEnd: string;
  dateStart: string;
  educExpe: string;
  placeEducExpe: string;
  titleEducExpe: string;
  _id: string;
}

export interface ISkillResume {
  fontAwesomeIcon: IFontAwesomeIcon;
  nameSkill: string;
  skillCategory: string;
  svgIcon: string;
  _id: string;
}
