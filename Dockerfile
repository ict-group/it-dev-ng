FROM nginx:1.14.1-alpine

## Remove default nginx website
#RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY dist/place4me-ng /usr/share/nginx/html


#CMD ["nginx", "-g", "daemon off;"]
