import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MadeByNeonity } from "@/components/made-by-neonity";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ResponsiveTable from "@/components/ResponsiveTable";
import TableInstructions from "@/components/TableInstructions";

const MriSequencesCheatsheet = () => {
  const { t } = useTranslation();

  const sequences = useMemo(() => [
    {
      key: 't1w',
      name: t('mriCheatsheet.sequences.t1w.name'),
      characteristics: t('mriCheatsheet.sequences.t1w.characteristics'),
      appearance: t('mriCheatsheet.sequences.t1w.appearance'),
      use: t('mriCheatsheet.sequences.t1w.use'),
    },
    {
      key: 't2w',
      name: t('mriCheatsheet.sequences.t2w.name'),
      characteristics: t('mriCheatsheet.sequences.t2w.characteristics'),
      appearance: t('mriCheatsheet.sequences.t2w.appearance'),
      use: t('mriCheatsheet.sequences.t2w.use'),
    },
    {
      key: 'flair',
      name: t('mriCheatsheet.sequences.flair.name'),
      characteristics: t('mriCheatsheet.sequences.flair.characteristics'),
      appearance: t('mriCheatsheet.sequences.flair.appearance'),
      use: t('mriCheatsheet.sequences.flair.use'),
    },
    {
      key: 'dwi',
      name: t('mriCheatsheet.sequences.dwi.name'),
      characteristics: t('mriCheatsheet.sequences.dwi.characteristics'),
      appearance: t('mriCheatsheet.sequences.dwi.appearance'),
      use: t('mriCheatsheet.sequences.dwi.use'),
    },
    {
      key: 'stir',
      name: t('mriCheatsheet.sequences.stir.name'),
      characteristics: t('mriCheatsheet.sequences.stir.characteristics'),
      appearance: t('mriCheatsheet.sequences.stir.appearance'),
      use: t('mriCheatsheet.sequences.stir.use'),
    },
    {
      key: 'gre',
      name: t('mriCheatsheet.sequences.gre.name'),
      characteristics: t('mriCheatsheet.sequences.gre.characteristics'),
      appearance: t('mriCheatsheet.sequences.gre.appearance'),
      use: t('mriCheatsheet.sequences.gre.use'),
    },
  ], [t]);

  const tableHeaders = {
    sequence: t('mriCheatsheet.table.sequence'),
    characteristics: t('mriCheatsheet.table.characteristics'),
    appearance: t('mriCheatsheet.table.appearance'),
    commonUse: t('mriCheatsheet.table.commonUse'),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      {/* 语言切换器 */}
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      
      <Card className="w-full max-w-6xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">{t('mriCheatsheet.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            {t('mriCheatsheet.subtitle')}
          </p>
          
          {/* 移动端操作说明 */}
          <TableInstructions />
          
          {/* 使用响应式表格组件 */}
          <ResponsiveTable data={sequences} headers={tableHeaders} />
          
          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="outline">{t('mriCheatsheet.backToHome')}</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      <MadeByNeonity />
    </div>
  );
};

export default MriSequencesCheatsheet;