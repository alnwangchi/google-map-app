# Google Map App

此專案在做什麼?

- 資料欄位的確認
- 多組學生
- 類型確認
- url 帶上 sheet id 跟 type
- 建立 gcp 服務取得 private key

## Deploy

deploy on vercel [link](https://google-map-app-lilac.vercel.app/)

## Introduction

## Engines

node version : 16.17.1
npm version : 9.5.1

## Allen Terminal Shortcut

nano ~/.bashrc

source ~/.bashrc

```bash
alias gp='git pull'
alias gs='git stash'
alias gss='git stash save'
alias gpop='git stash pop'
alias grb='git rebase'
alias glo='git log --oneline'
alias gck='git checkout'
alias gckb='git checkout -b'
alias good='git checkout dev;git pull;git checkout -;git rebase dev;git push'

alias ndv='npm run dev'
alias cr='clear'
```

## Strick

一次性整理整個專案格式

```bash
npx prettier --write "**/*.txs"
```

## data flow and fields

| 欄位名稱   | 中文 |
| ---------- | ---- |
| name       | 店名 |
| lat        | 緯度 |
| lng        | 經度 |
| recycleQTY | 數量 |

[google sheet](https://docs.google.com/spreadsheets/d/11eDBfQLmb35Nu3fvps2EgxvtRMoyV5YSlnGhbf3or2Q/edit?usp=sharing)

每次進入應用程式後都會抓取上表的資料將座標 Marker 顯示在對應位置

## Develop with Docker

使用 Docker 來開發 (已實現 Hot Reload 功能)

> Develop

```bash
npm run dev:docker
```

> Build

```bash
npm run build:docker
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
