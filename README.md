<h1 align="center">Learning Redis</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/learning-redis.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/learning-redis.svg"
  />
  <a href="https://github.com/kauefraga/learning-redis/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/learning-redis.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/learning-redis.svg"
  />
</p>

<h4 align="center">🔴 Trying out key-value using Redis 🔴</h4>

## 📝 Table of contents
- What do you need to run it
  - [nodejs](https://nodejs.org/en) (prefer lts version)
    - [pnpm](https://pnpm.io)
  - [docker](https://www.docker.com)
- How to download
- How to set up Redis (with docker)

## ⬇️ How to download and run

```bash
git clone https://github.com/kauefraga/learning-redis.git
cd learning-redis
npm install
npm run build
npm run start

# if you want to develop
npm run dev
```
Or downloading with yarn? `yarn && yarn build && yarn start`
<br/>
Sincerely, i prefer pnpm so: `pnpm i && pnpm build && pnpm start`

## 🐳 How to set up Redis (docker image -> bitnami/redis)
```sh
# if you get an error try sudo mode
docker run --name redis bitnami/redis:latest
docker-compose up -d
```
source: https://hub.docker.com/r/bitnami/redis

## 💻 Technologies

- 🎟️ [CUID](https://www.npmjs.com/package/cuid) - Generating unique identifiers
- 🔥 [CORS](https://npmjs.com/package/cors) - Required when we need to control who can access our endpoints
- 🐳 [Docker](https://www.docker.com) - Use virtualization/containerize to turn your "work on my machine" into "our machine"
- 🤫 [Dotenv](https://npmjs.com/package/dotenv) - We must hide our secret keys, with dotenv we can load env variables into `process.env` more easily
- 🔮 [Express](https://expressjs.com) - "Fast, minimalist web framework for Nodejs..."
- 💄 [Eslint](https://eslint.org)
  - https://www.npmjs.com/package/eslint-config-airbnb-base
  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
- 🔴 [Redis](https://www.npmjs.com/package/ioredis) - Redis is a NoSQL database. It is the driver implementation for nodejs
- 🧑‍💻 [Typescript](https://typescriptlang.org) + [TS-Node-Dev](https://npmjs.com/package/ts-node-dev) - Improve dev experience by adding type safety

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/learning-redis/blob/main/LICENSE) for more information.

---

<div align="center">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
