FROM node:9
RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN apt-get update -qq && apt-get -y install nodejs build-essential git nano
RUN npm install -g yarn && \
    chmod +x /usr/local/bin/yarn && \
    yarn install --network-timeout 1000000

RUN chmod +rwx /app/deployment/init.sh

EXPOSE 8442
