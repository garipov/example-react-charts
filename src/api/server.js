export default function (path, options) {
  return fetch(`https://api.fixer.io/` + path)
    .then(data=> data.json())
}
