FROM alpine:3.18

RUN apk --no-cache add postfix
COPY main.cf /etc/postfix

EXPOSE 25

CMD ["postfix", "start-fg"]
