FROM node:20-alpine

ENV PUBLIC_APP_URL http://www.galudaowebstore.local
ENV DB_NAME app_development
ENV DB_USER postgres
ENV DB_PASS postgres
ENV DB_HOST database
ENV DB_DIALECT postgres

COPY . /home/app

WORKDIR /home/app
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev", "--", "--host", "--port", "3000" ]