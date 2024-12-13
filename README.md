# URL Shortener

Розробник: Маркелов Іван

Група: ІО-21

## Швидкий запуск

```bash
docker build -t localhost/shortener -f Dockerfile .
docker run --rm -it -p 8000:8000 localhost/shortener
npm run build
npm start
```

Відкриється сторінка з функціоналом створення скорочених посилань.

Проєкт зберігає усі дані у пам'яті, тому **між перезапусками дані не
зберігаються**. Проєкт стартує з певною
кількістю ініціалізованих даних. Зокрема, він вже містить трьох користувачів:
`user_1`, `user_2`, `user_3`. Усі заздалегідь створені користувачі
використовують пароль `12345678`.


## Технології проекту

Проєкт використовує [uv](https://docs.astral.sh/uv/) для управління залежностями.

Backend:[fastapi](https://fastapi.tiangolo.com/uk/).

Технологія Frontend:[React](https://react.dev/learn).

