# Use Nginx to serve static frontend
FROM nginx:alpine

# Copy frontend files
COPY . /usr/share/nginx/html

# Replace default nginx.conf with one that uses $PORT
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the default port (optional)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
