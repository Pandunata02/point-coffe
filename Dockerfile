# ─── Stage 1: Build ───────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy lockfile dan package.json dulu
# Docker layer cache: kalau 2 file ini tidak berubah,
# pnpm install tidak diulang — build lebih cepat
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code dan build
COPY . .
RUN pnpm run build

# ─── Stage 2: Production ──────────────────────────────────
FROM nginx:alpine AS production

# Hanya copy hasil build — node_modules tidak ikut
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]