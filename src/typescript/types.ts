export interface LanguageObject {
  language: string;
  strings: {
    navigation: {
      signInButton: string;
      joinButton: string;
    };
    landingPage: {
      headerSection: {
        firstSpan: string;
        secondSpan: string;
        thirdSpan: string;
        forthSpan: string;
        descriptionParagraph: string;
      };
      buttonsSection: {
        joinButton: string;
        demoButton: string;
      };
    };
  };
}

export enum Languages {
  polish = "PL",
  english = "EN",
}
