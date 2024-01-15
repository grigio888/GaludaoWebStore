FROM node:20-alpine

COPY . /home/frontend

WORKDIR /home/frontend
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev", "--", "--host", "--port", "3000" ]