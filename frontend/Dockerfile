FROM node:20-alpine

ENV PUBLIC_APP_URL http://www.galudaowebstore.local

COPY . /home/frontend

WORKDIR /home/frontend
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev", "--", "--host", "--port", "3000" ]