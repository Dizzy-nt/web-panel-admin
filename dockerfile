# image yang mau kita pakai
FROM node:24-slim

# tempat file backend diletakkan di container
WORKDIR /app/backend

# menyalin folder backend ke dalam container
COPY backend ./

# install dependencies di folder backend
RUN npm install

# port yang akan dibuka
EXPOSE 3000

# perintah yang di run ketika container hidup
CMD ["npm", "run", "start"]