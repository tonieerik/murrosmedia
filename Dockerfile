FROM node:18-alpine
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL=https://mandariinimedia.fi

RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
