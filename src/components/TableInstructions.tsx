import React from 'react';
import { useTranslation } from 'react-i18next';
import { Info } from 'lucide-react';

const TableInstructions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="md:hidden mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
      <div className="flex items-start gap-2">
        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <p className="font-medium mb-1">💡 {t('mriCheatsheet.mobileTips.title')}</p>
          <p>{t('mriCheatsheet.mobileTips.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default TableInstructions;
