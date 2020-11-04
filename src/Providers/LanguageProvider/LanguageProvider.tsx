import React, { createContext, useState } from "react";
import english from "../../Language/English/English";
import polish from "../../Language/Polish/polish";
import { LanguageObject, Languages } from "../../typescript/types";
interface Lang {
  lang: LanguageObject;
  selectLanguage: (selection: Languages) => void;
}

export const LanguageContext: React.Context<Lang> = createContext({
  lang: english,
  selectLanguage: (selection: Languages) => {},
});

const LanguageProvider = (props: React.ComponentProps<any>) => {
  const { children } = props;
  const [language, setLanguage] = useState<LanguageObject>(english);
  const selectLanguage = (selection: Languages) => {
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
