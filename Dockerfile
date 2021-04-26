FROM node:10.24.1-alpine

ENV NODE_ENV=development

ARG project_dir=/app/
ADD . ${project_dir}
WORKDIR ${project_dir}

RUN set -x && \
    apk upgrade --no-cache && \
    npm i

EXPOSE 3000

CMD ["npm", "run", "start"]