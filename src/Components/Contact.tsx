import { FC, ReactElement } from 'react';
import { IGeneralInfo } from '../interfaces';

interface IContactProps {
  generalInfo: IGeneralInfo | null;
}

const Contact: FC<IContactProps> = ({ generalInfo }): ReactElement => {
  return (
    <div>
      <h3>Contact</h3>
      {generalInfo?.firstname}
    </div>
  );
};

export default Contact;
