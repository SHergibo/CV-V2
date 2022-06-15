import { IGeneralInfo } from '../interfaces';

interface IContactProps {
  generalInfo: IGeneralInfo | null;
}

const Contact = ({ generalInfo }: IContactProps) => {
  return (
    <div>
      <h3>Contact</h3>
      {generalInfo?.firstname}
    </div>
  );
};

export default Contact;
