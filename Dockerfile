# =========================
# FRONTEND BUILD STAGE
# =========================
FROM node:20-alpine AS frontend-builder

WORKDIR /frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend .

RUN npm run build


# =========================
# BACKEND STAGE
# =========================
FROM python:3.12-slim

WORKDIR /backend

COPY backend/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY backend/app ./app
COPY backend/.env .

# frontend artifacts
COPY --from=frontend-builder /frontend/.next ./frontend/.next
COPY --from=frontend-builder /frontend/public ./frontend/public
COPY --from=frontend-builder /frontend/package.json ./frontend/package.json

EXPOSE 8000
EXPOSE 3000

CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000"]