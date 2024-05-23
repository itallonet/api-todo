ARG NODE_VERSION=20.12.2

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY . .
RUN npm i
RUN npx prisma generate
RUN npx prisma migrate dev --name init

ENV DATABASE_URL=postgresql://docker:docker@pg:5432/tasks?schema=public

EXPOSE 9140

CMD npm run dev
