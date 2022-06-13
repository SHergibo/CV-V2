import { FC, ReactElement, Dispatch, SetStateAction } from 'react';
import { useRequest } from '../Hooks/useRequestHooks';
import useIsLoaded from '../Hooks/useIsLoadedHook';
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

  useIsLoaded({ data: dataEducExp, error: errorEducExp, setStateFunc: setFetchLoaded, objectKey: 'educExp' });
  useIsLoaded({ data: dataSkill, error: errorSkill, setStateFunc: setFetchLoaded, objectKey: 'skill' });

  return (
    <div>
      <h3>Resume</h3>
      <p>{dataEducExp?.[0].dateStart}</p>
      <p>{dataSkill?.[0].nameSkill}</p>
    </div>
  );
};

export default Resume;
