import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTranslation } from 'react-i18next';
import './ResponsiveTable.css';

interface TableData {
  key: string;
  name: string;
  characteristics: string;
  appearance: string;
  use: string;
}

interface ResponsiveTableProps {
  data: TableData[];
  headers: {
    sequence: string;
    characteristics: string;
    appearance: string;
    commonUse: string;
  };
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ data, headers }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* 桌面端表格 */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] min-w-[200px] bg-gray-50 dark:bg-gray-800">{headers.sequence}</TableHead>
              <TableHead className="w-[220px] min-w-[220px] bg-gray-50 dark:bg-gray-800">{headers.characteristics}</TableHead>
              <TableHead className="w-[350px] min-w-[350px] bg-gray-50 dark:bg-gray-800">{headers.appearance}</TableHead>
              <TableHead className="w-[280px] min-w-[280px] bg-gray-50 dark:bg-gray-800">{headers.commonUse}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.key} className="hover:bg-gray-50 dark:hover:bg-gray-800 table-row-hover">
                <TableCell className="font-medium table-cell-text">{row.name}</TableCell>
                <TableCell className="table-cell-text">{row.characteristics}</TableCell>
                <TableCell className="table-cell-text">{row.appearance}</TableCell>
                <TableCell className="table-cell-text">{row.use}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 移动端表格 - 使用单个表格结构确保对齐 */}
      <div className="md:hidden responsive-table-mobile">
        <div className="relative">
          {/* 完整的表格结构 */}
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                {/* 第一列 - 固定显示 */}
                <TableHead className="w-[130px] min-w-[130px] bg-gray-50 dark:bg-gray-800 text-sm font-semibold sticky left-0 z-20 border-r-2 border-gray-200 dark:border-gray-700">
                  {headers.sequence}
                </TableHead>
                {/* 其他列 - 可滑动 */}
                <TableHead className="w-[150px] min-w-[150px] bg-gray-50 dark:bg-gray-800 text-sm font-semibold">
                  {headers.characteristics}
                </TableHead>
                <TableHead className="w-[220px] min-w-[220px] bg-gray-50 dark:bg-gray-800 text-sm font-semibold">
                  {headers.appearance}
                </TableHead>
                <TableHead className="w-[200px] min-w-[200px] bg-gray-50 dark:bg-gray-800 text-sm font-semibold">
                  {headers.commonUse}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.key} className="hover:bg-gray-50 dark:hover:bg-gray-800 table-row-hover">
                  {/* 第一列 - 固定显示 */}
                  <TableCell className="font-medium text-sm bg-white dark:bg-gray-900 table-cell-text sticky left-0 z-20 border-r-2 border-gray-200 dark:border-gray-700 shadow-sm w-[130px] min-w-[130px]">
                    {row.name}
                  </TableCell>
                  {/* 其他列 - 可滑动 */}
                  <TableCell className="text-sm bg-white dark:bg-gray-900 table-cell-text w-[150px] min-w-[150px]">
                    {row.characteristics}
                  </TableCell>
                  <TableCell className="text-sm bg-white dark:bg-gray-900 table-cell-text w-[220px] min-w-[220px]">
                    {row.appearance}
                  </TableCell>
                  <TableCell className="text-sm bg-white dark:bg-gray-900 table-cell-text w-[200px] min-w-[200px]">
                    {row.use}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {/* 滑动指示器 */}
          <div className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
            💡 {t('mriCheatsheet.swipeHint')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
