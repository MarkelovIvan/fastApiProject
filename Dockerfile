
FROM python:3.12


COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/


COPY . /app


WORKDIR /app


RUN python -m venv .venv


RUN ./.venv/bin/pip install --upgrade pip && uv sync --frozen --no-cache


ENV PATH="/app/.venv/bin:$PATH"


CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
