# Rebuilding the pm2 image for ARM architecture
FROM arm64v8/node:current-alpine3.14
# FROM node:current

# Install pm2
RUN npm install pm2@3 -g

WORKDIR /usr/genshin-reverse-artifact

# Node dependencies / install
COPY package*.json ./
RUN npm install --production

# Bundle APP files
COPY ./ ./
RUN npm run build

CMD [ "pm2-runtime", "npm", "--", "start" ]