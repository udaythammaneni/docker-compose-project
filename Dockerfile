# -------------------------
# Build stage
# -------------------------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .


# -------------------------
# Production stage
# -------------------------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder --chown=node:node /app/server.js ./server.js

USER node

EXPOSE 3000

CMD ["node", "server.js"]