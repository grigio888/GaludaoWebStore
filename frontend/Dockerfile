FROM node:20-alpine

ENV PUBLIC_APP_URL http://www.galudaowebstore.local
ENV DB_NAME app_development
ENV DB_USER postgres
ENV DB_PASS postgres
ENV DB_HOST localhost
ENV DB_DIALECT postgres

COPY . /home/frontend

WORKDIR /home/frontend
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev", "--", "--host", "--port", "3000" ]