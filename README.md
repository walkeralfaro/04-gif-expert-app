# Gif Expert App

Es una página web que utiliza la API de [Giphy][link_giphy] que permite consumir gif animados. La app está desarrollada con [React][link_react].

[link_giphy]: https://developers.giphy.com
[link_react]: https://es.react.dev



## Demo

[Link][link_app] de la app web

[link_app]: https://gifexpertapp.walkeralfaro.com
## Giphy API Reference

#### Get category items

```http
  GET api.giphy.com/v1/gifs/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. GIPHY API Key |
| `q` | `string` | **Required**. Search query term or phrase |
| `limit` | `INT(32)` | The maximum number of objects to return |



