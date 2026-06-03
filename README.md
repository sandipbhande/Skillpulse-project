# React + Express scaffold with Docker, SonarQube, and Kubernetes
<img width="1686" height="757" alt="Capture5" src="https://github.com/user-attachments/assets/2ab2791c-18b0-4c17-99ce-69f010c70448" />
<img width="1155" height="551" alt="Capture3" src="https://github.com/user-attachments/assets/19002684-945f-4ef9-a57e-d78e2fb6de76" />
<img width="1885" height="826" alt="Capture2" src="https://github.com/user-attachments/assets/c901bf14-e374-4b85-bb7b-37c318c160a0" />
<img width="1155" height="551" alt="Capture" src="https://github.com/user-attachments/assets/a2be3cd3-9e53-4281-893a-2f1c7443c0b6" />
<img width="1470" height="824" alt="Capture10" src="https://github.com/user-attachments/assets/8e522463-24dc-4e33-ae7e-5dfa17fc4acb" />


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
