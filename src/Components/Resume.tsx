import { FC, ReactElement, Dispatch, SetStateAction, useEffect } from 'react';
import { useRequest } from '../Hooks/useRequestHooks';
import { apiDomain, apiVersion } from '../config/environment.config';
import { IEducExpResume, ISkillResume } from '../interfaces';
import { IFetchLoaded } from '../Pages/HomePage';

export interface IResumeProps {
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const Resume: FC<IResumeProps> = ({ setFetchLoaded }): ReactElement => {
  const { data: dataEducExp, error: errorEducExp } = useRequest<IEducExpResume[]>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/educs-exps/educs-exps-list`
  });

  const { data: dataSkill, error: errorSkill } = useRequest<ISkillResume[]>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/skills/skills-list`
  });

  useEffect(() => {
    if (dataEducExp && !errorEducExp && dataSkill && !errorSkill) {
      setFetchLoaded((prevState) => ({
        ...prevState,
        resume: { isLoaded: true, error: false }
      }));
    }
    if (errorEducExp || errorSkill) {
      setFetchLoaded((prevState) => ({
        ...prevState,
        resume: { isLoaded: false, error: true }
      }));
    }
  }, [dataEducExp, errorEducExp, dataSkill, errorSkill, setFetchLoaded]);

  return (
    <div>
      <h3>Resume</h3>
      <p>{dataEducExp?.[0].dateStart}</p>
      <p>{dataSkill?.[0].nameSkill}</p>
    </div>
  );
};

export default Resume;
