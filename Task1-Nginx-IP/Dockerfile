FROM ubuntu:latest

LABEL maintainer="Docker Student"

RUN apt-get update && \
    apt-get install -y nginx iproute2 && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 80

CMD ["sh", "-c", "IP=$(hostname -I | awk '{print $1}'); echo \"Container IP Address: $IP\" > /var/www/html/index.html; nginx -g 'daemon off;'"]
