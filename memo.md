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
@tailwind base;
@tailwind components;
@tailwind utilities;
```

ESLintの設定
```bash
npm install --save-dev prettier eslint typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import
```
.eslintrc.json
```json
{
  "extends": [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "import/order": [
      2,
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "endOfLine": "lf",
        "semi": true,
        "singleQuote": true,
        "printWidth": 80,
        "tabWidth": 2
      }
    ]
  }
}
```
npm script 追加
```json
{
  "name": "my-blog",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --dir src",
    "format": "next lint --fix --dir src"
  },
  "dependencies": {
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/node": "18.7.8",
    "@types/react": "18.0.17",
    "@types/react-dom": "18.0.6",
    "@typescript-eslint/eslint-plugin": "^5.33.1",
    "@typescript-eslint/parser": "^5.33.1",
    "autoprefixer": "^10.4.8",
    "eslint": "^8.22.0",
    "eslint-config-next": "12.2.5",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "postcss": "^8.4.16",
    "prettier": "^2.7.1",
    "tailwindcss": "^3.1.8",
    "typescript": "4.7.4",
    "typescript-eslint": "^0.0.1-alpha.0"
  }
}
```

