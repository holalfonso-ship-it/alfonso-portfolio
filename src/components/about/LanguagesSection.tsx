
import React from 'react';
import { Languages } from 'lucide-react';

type LanguageItem = {
  title: string;
  institution: string;
  level: number;
};

const languageItems: LanguageItem[] = [
  {
    title: "First Certificate in English (FCE)",
    institution: "British Council Qualifications, Sheffield College, UK",
    level: 1
  },
  {
    title: "English - intermediate level, PET",
    institution: "British Council Qualifications, Sheffield College, UK",
    level: 2
  }
];

const LanguagesSection: React.FC = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-5 flex items-center">
        <Languages className="mr-2 h-5 w-5 text-primary" />
        Languages
      </h3>
      
      <div className="space-y-4">
        {languageItems.map((item) => (
          <div key={item.title} className={`relative pl-5 border-l border-primary/${70 - (item.level - 1) * 30}`}>
            <div className={`absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/${80 - (item.level - 1) * 20}`}></div>
            <p className="font-medium">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
