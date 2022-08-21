# my-blogのメモ

## 環境設定
create next app
```bash
npx create-next-app@latest --ts
```
srcディレクトリへpagesディレクトリとsrcディレクトリを移動
```bash
.
├── README.md
├── memo.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── api
│   │   │   └── hello.ts
│   │   └── index.tsx
│   └── styles
│       ├── Home.module.css
│       └── globals.css
├── tsconfig.json
└── yarn.lock
```
tsconfig.jsonを修正
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": "src" // <- 追加
  },
  "include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx"], // <- src/に変更
  "exclude": ["node_modules"]
}
```
環境設定branchで設定
```bash
git branch "環境設定"
git checkout 環境設定
```
Tailwind CSS の導入
```bash
npm install -D tailwindcss postcss autoprefixer
```
設定ファイルの作成
```bash
npx tailwindcss init -p
```
postcss.config.js
tailwind.config.js
が作成される

tailwind.config.jsのcontentに追記
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

src/styles/globals.cssに追記
```css

```

