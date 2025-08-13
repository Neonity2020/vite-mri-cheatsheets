import { MadeByNeonity } from "@/components/made-by-neonity";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "/mri_cheatsheet_logo.png";
const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      {/* 语言切换器 */}
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t('index.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          {t('index.subtitle')}
        </p>
        <Link to="/mri-cheatsheet">
          <Button size="lg" className="px-8 py-4 text-lg">{t('index.viewCheatsheet')}</Button>
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="w-[150px] mt-4" />
          </div>
        </Link>

      </div>
      <MadeByNeonity />
    </div>
  );
};

export default Index;