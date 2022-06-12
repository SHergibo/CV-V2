import { FC, ReactElement, Dispatch, SetStateAction, useEffect } from 'react';
import { useAxios } from '../Hooks/useAxiosHooks';
import { apiDomain, apiVersion } from '../config/environment.config';
import { IEducExpResume, ISkillResume } from '../interfaces';
import { IFetchLoaded } from '../Pages/HomePage';

export interface IResumeProps {
  fetchLoaded: IFetchLoaded;
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const Resume: FC<IResumeProps> = ({ fetchLoaded, setFetchLoaded }): ReactElement => {
  const {
    response: responseEducExp,
    loading: loadingEducExp,
    error: errorEducExp
  } = useAxios<IEducExpResume[]>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/educs-exps/educs-exps-list`
  });

  const {
    response: responseSkill,
    loading: loadingSkill,
    error: errorSkill
  } = useAxios<ISkillResume[]>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/skills/skills-list`
  });

  useEffect(() => {
    if (!loadingEducExp && !errorEducExp && !loadingSkill && !errorSkill) {
      setFetchLoaded({
        ...fetchLoaded,
        resume: { isLoaded: true, error: false }
      });
    }
    if (errorEducExp || errorSkill) {
      setFetchLoaded({
        ...fetchLoaded,
        resume: { isLoaded: false, error: true }
      });
    }
  }, [loadingEducExp, errorEducExp, loadingSkill, errorSkill, fetchLoaded, setFetchLoaded]);

  return (
    <div>
      <h3>Resume</h3>
      <p>{responseEducExp?.[0].dateStart}</p>
      <p>{responseSkill?.[0].nameSkill}</p>
    </div>
  );
};

export default Resume;
