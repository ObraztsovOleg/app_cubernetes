### app_kubernetes

# Deployment
    For quick start you need to apply mongodb.yaml, web_app.yaml, ingress.yaml files.

# Testing
### Example of the POST request:
        for i in {0..10000}; do curl -0X POST -d "number=$i" http://obraztsov.hse.dc/; done
