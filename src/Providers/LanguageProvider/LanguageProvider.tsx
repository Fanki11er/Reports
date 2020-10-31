import React, { createContext, useState } from "react";
import english from "../../Language/English/English";
import polish from "../../Language/Polish/polish";
import { LanguageObject, languages } from "../../typescript/types";
interface Lang {
  lang: LanguageObject;
  selectLanguage: (selection: languages) => void;
}

export const LanguageContext: React.Context<Lang> = createContext({
  lang: english,
  selectLanguage: (selection: languages) => {},
});

const LanguageProvider = (props: React.ComponentProps<any>) => {
  const { children } = props;
  const [language, setLanguage] = useState<LanguageObject>(english);
  const selectLanguage = (selection: languages) => {
    switch (selection) {
      case "PL": {
        setLanguage(polish);
        break;
      }
      default: {
        setLanguage(english);
        break;
      }
    }
  };
  const context: Lang = {
    lang: language,
    selectLanguage,
  };
  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
