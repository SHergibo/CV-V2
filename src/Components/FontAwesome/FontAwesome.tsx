import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface IFontAwesomeProps {
  prefix: string;
  value: string;
}

const FontAwesome = ({ prefix, value }: IFontAwesomeProps) => {
  return <FontAwesomeIcon icon={[prefix as IconPrefix, value as IconName]} />;
};

export default FontAwesome;
