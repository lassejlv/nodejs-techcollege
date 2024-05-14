FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install
RUN bun build --compile --minify ./src/index.ts --outfile ./build/server

CMD [ "./build/server" ]