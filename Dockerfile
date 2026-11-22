FROM oven/bun:1.3 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .

# NEXT_PUBLIC_* values are baked into the browser bundle at build time
ARG NEXT_PUBLIC_SPRING_API_URL=http://localhost:8080
ARG NEXT_PUBLIC_EXPRESS_API_URL=http://localhost:5000
ENV NEXT_PUBLIC_SPRING_API_URL=$NEXT_PUBLIC_SPRING_API_URL \
    NEXT_PUBLIC_EXPRESS_API_URL=$NEXT_PUBLIC_EXPRESS_API_URL \
    NEXT_TELEMETRY_DISABLED=1
RUN bun run build

FROM oven/bun:1.3
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./
EXPOSE 3000
CMD ["bun", "run", "start"]
