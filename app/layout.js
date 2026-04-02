import './globals.css';

export const metadata = {
  title: 'GoGlobal | 国际货运代理',
  description: '海运、空运、跨境物流一站式解决方案',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}