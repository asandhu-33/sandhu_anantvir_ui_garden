FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Disable ESLint during production build to avoid plugin compatibility errors
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run build

FROM node:18-alpine
WORKDIR /Sandhu_Anantvir_ui_garden

RUN npm install -g serve
COPY --from=builder /app/build ./build

EXPOSE 8083
CMD ["serve", "-s", "build", "-l", "8083"]