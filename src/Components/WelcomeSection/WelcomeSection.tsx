import { useEffect, useCallback, useRef } from 'react';

interface IWelcomeSectionProps {
  pageTitle: string;
  headingText: string;
  children: any;
}

const WelcomeSection = ({ pageTitle, headingText, children }: IWelcomeSectionProps) => {
  const graphicOneRef = useRef<HTMLDivElement>(null!);
  const graphicTwoRef = useRef<HTMLDivElement>(null!);
  const pageTitleRef = useRef<HTMLDivElement>(null!);

  let staticWindowCalc = (window.innerHeight - Math.round(window.scrollY)) / 100;

  const handleMenuScroll = useCallback(() => {
    let windowHeight = window.innerHeight;
    let scroll = Math.round(window.scrollY);
    if (scroll < windowHeight) {
      let blur = Math.round(staticWindowCalc + 1) - (windowHeight - scroll) / 100;
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
      <div>
        <div ref={graphicOneRef} />
        <div ref={graphicTwoRef} />
      </div>
      <div>
        <div ref={pageTitleRef}>{pageTitle}</div>
        <div>
          <svg id="svgHome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path data-name="layer2" fill="#202020" d="M2 8h60v8H2zm0 20h60v8H2z"></path>
            <path data-name="layer1" fill="#202020" d="M2 48h60v8H2z"></path>
          </svg>
          <h1>{headingText}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
