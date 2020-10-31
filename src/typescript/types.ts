export interface LanguageObject {
  language: string;
  strings: {
    landingPage: {
      headerSection: {
        firstSpan: string;
        secondSpan: string;
        thirdSpan: string;
        forthSpan: string;
        descriptionParagraph: string;
      };
    };
  };
}

export enum languages {
  polish = "PL",
  english = "EN",
}
