# React + Express scaffold with Docker, SonarQube, and Kubernetes

Quick commands:

Build Docker images:

```bash
docker compose build
```

Run locally with Docker Compose (includes SonarQube):

```bash
docker compose up
```

Run SonarQube scanner (example using the official scanner image):

```bash
docker run --rm -e SONAR_HOST_URL="http://localhost:9000" -v "${PWD}:/usr/src" sonarsource/sonar-scanner-cli
```

Deploy to Kubernetes (make sure images are pushed to a registry or use kind/minikube local images):

```bash
kubectl apply -f k8s/
```

Files of interest:

- Backend: [backend/src/index.js](backend/src/index.js)
- Frontend: [frontend/src/App.jsx](frontend/src/App.jsx)
- Docker Compose: [docker-compose.yml](docker-compose.yml)
- K8s manifests: [k8s/backend-deployment.yaml](k8s/backend-deployment.yaml) and [k8s/frontend-deployment.yaml](k8s/frontend-deployment.yaml)
