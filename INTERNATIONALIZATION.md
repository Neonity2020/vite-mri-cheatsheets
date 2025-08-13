# 国际化功能说明

本应用已成功添加中英文切换功能，支持完整的双语界面。

## 功能特性

- 🌐 支持中文和英文两种语言
- 🔄 实时语言切换，无需刷新页面
- 💾 语言选择会保存到本地存储
- 📱 响应式设计，适配各种设备
- 🎯 自动检测浏览器语言偏好

## 使用方法

### 语言切换
1. 在页面右上角找到语言切换按钮
2. 点击按钮显示语言选项
3. 选择"English"或"中文"即可切换语言

### 语言设置
- 首次访问时会自动检测浏览器语言
- 语言选择会保存到本地存储
- 下次访问时会自动使用上次选择的语言

## 技术实现

### 依赖包
- `react-i18next`: React国际化核心库
- `i18next`: 国际化框架
- `i18next-browser-languagedetector`: 浏览器语言检测

### 文件结构
```
src/
├── i18n/
│   ├── index.ts              # 国际化配置
│   └── locales/
│       ├── en.json           # 英文语言包
│       └── zh.json           # 中文语言包
├── components/
│   └── LanguageSwitcher.tsx  # 语言切换组件
└── pages/
    ├── Index.tsx             # 首页（已国际化）
    └── MriSequencesCheatsheet.tsx # MRI速查表（已国际化）
```

### 添加新翻译
1. 在 `src/i18n/locales/en.json` 中添加英文文本
2. 在 `src/i18n/locales/zh.json` 中添加对应的中文翻译
3. 在组件中使用 `t('key.path')` 获取翻译文本

### 示例
```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('common.title')}</h1>;
};
```

## 已国际化的页面

1. **首页** (`/`)
   - 欢迎标题
   - 副标题
   - 按钮文本

2. **MRI序列速查表** (`/mri-cheatsheet`)
   - 页面标题和副标题
   - 表格列标题
   - 所有MRI序列信息
   - 按钮文本

## 注意事项

- 确保所有用户可见的文本都使用翻译函数
- 保持中英文语言包的结构一致
- 测试不同语言下的界面布局和文本长度
- 考虑添加更多语言支持（如需要）

## 扩展功能

如需添加更多语言支持，只需：
1. 在 `src/i18n/locales/` 目录下添加新的语言文件
2. 在 `src/i18n/index.ts` 中注册新语言
3. 在 `LanguageSwitcher` 组件中添加新语言选项
