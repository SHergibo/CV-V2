import { useEffect, useCallback, useRef } from 'react';
import { GraphicContainer, GraphicOne, GraphicTwo, Welcome, PageTitle, DataWelcome, WelcomeTitleGradient } from './WelcomeSection.styled';

interface IWelcomeSectionProps {
  pageTitle: string;
  headingText: string;
  children: JSX.Element;
}

const WelcomeSection = ({ pageTitle, headingText, children }: IWelcomeSectionProps) => {
  const graphicOneRef = useRef<HTMLDivElement>(null!);
  const graphicTwoRef = useRef<HTMLDivElement>(null!);
  const pageTitleRef = useRef<HTMLDivElement>(null!);

  let staticWindowCalc: number = (window.innerHeight - Math.round(window.scrollY)) / 100;

  const handleMenuScroll = useCallback(() => {
    let windowHeight: number = window.innerHeight;
    let scroll: number = Math.round(window.scrollY);
    if (scroll < windowHeight) {
      let blur: number = Math.round(staticWindowCalc + 1) - (windowHeight - scroll) / 100;
      graphicOneRef.current.style.filter = `blur(${blur}px)`;
      graphicTwoRef.current.style.filter = `blur(${blur}px)`;
      pageTitleRef.current.style.filter = `blur(${blur}px)`;
    }

    if (scroll === 0) {
      graphicOneRef.current.style.filter = '';
      graphicTwoRef.current.style.filter = '';
      pageTitleRef.current.style.filter = '';
    }
  }, [staticWindowCalc]);

  useEffect(() => {
    window.addEventListener('scroll', handleMenuScroll);
    return () => {
      window.removeEventListener('scroll', handleMenuScroll);
    };
  }, [handleMenuScroll]);

  return (
    <div id="welcome">
      <GraphicContainer>
        <GraphicOne ref={graphicOneRef} />
        <GraphicTwo ref={graphicTwoRef} />
      </GraphicContainer>
      <Welcome>
        <PageTitle ref={pageTitleRef}>{pageTitle}</PageTitle>
        <DataWelcome>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path data-name="layer2" fill="#202020" d="M2 8h60v8H2zm0 20h60v8H2z"></path>
            <path data-name="layer1" fill="#202020" d="M2 48h60v8H2z"></path>
          </svg>
          <WelcomeTitleGradient>{headingText}</WelcomeTitleGradient>
          {children}
        </DataWelcome>
      </Welcome>
    </div>
  );
};

export default WelcomeSection;
