import { extract } from '@extractus/article-extractor'

const input = 'https://www.lacapital.com.ar/motores/jeep-lanza-el-nuevo-grand-cherokee-limited-n10093394.html'

// here we use top-level await, assume current platform supports it
try {
  const article = await extract(input)
  console.log(JSON.stringify(article))
} catch (err) {
  console.error(err)
}