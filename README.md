# 🐦 ChirpQL

**ChirpQL** is an **interactive playground** for exploring Twitter’s advanced search syntax. Paste in a Twitter-style search query and instantly see a structured JSON output — or build a JSON object and watch it convert into a valid Twitter search string in real-time.

> 🔧 Powered by [`twitter-search-query-parser`](https://github.com/tweetdeck/twitter-search-query-parser), wrapped in a fast, modern UI.

---

## 🌐 Live Demo

👉 [**Try it now**](https://chirpql.rijoanul-shanto.workers.dev)


---

## ✨ Features

* 🔄 **Live Query ↔ JSON Conversion**
  Parse Twitter queries to structured JSON and generate queries from JSON objects.

* ⚡ **Instant Feedback**
  Results update in real time as you type.

* 💡 **Preloaded Examples**
  Explore syntax instantly with built-in, ready-to-run queries.

* 🎯 **Copy With One Click**
  Copy output with ease — for docs, tests, or API calls.

* 📱 **Responsive UI**
  Built with Tailwind CSS, optimized for desktop and mobile.

---

## 🎯 Who’s It For?

* **Developers** building search features or integrations using [`twitter-search-query-parser`](https://github.com/tweetdeck/twitter-search-query-parser).
* **Learners** experimenting with Twitter's search syntax.
* **Power Users** validating or reverse-engineering complex queries.
* **API Users** converting human-readable strings into structured formats.

---

## 🔍 Supported Query Features

### ✅ Basic Operators

* `from:username` — tweets from a user
* `to:username` — replies or mentions
* `#hashtag`, `@mention`, `"exact phrase"`

### ✅ Filters & Constraints

* `lang:en`, `since:YYYY-MM-DD`, `until:YYYY-MM-DD`
* `min_retweets:10`, `min_faves:5`, `min_replies:2`

### ✅ Boolean Logic

* `OR`, `-term`, grouping with `()`
* `filter:verified`, `filter:media`

---

## 🧪 Try It Out

### Example: Query String → JSON

```
from:twitter #react OR #vue lang:en since:2023-01-01 -spam min_retweets:5
```

```json
{
  "text": [],
  "hashtags": ["react", "vue"],
  "from": ["twitter"],
  "lang": ["en"],
  "since": "2023-01-01",
  "exclude": ["spam"],
  "min_retweets": 5
}
```

### Example: JSON → Query String

```json
{
  "text": ["javascript", "tutorial"],
  "hashtags": ["coding", "webdev"],
  "from": ["github"],
  "lang": ["en"],
  "min_faves": 10,
  "filter": ["verified"]
}
```

```
javascript tutorial #coding #webdev from:github lang:en min_faves:10 filter:verified
```

---

## 🚀 Getting Started (Dev Setup)

### Prerequisites

* Node.js 18+
* Yarn (or npm)

### Installation

```bash
git clone https://github.com/yourusername/chirpQL.git
cd chirpql
yarn install
yarn dev
```

Then visit: [http://localhost:5173](http://localhost:5173)

---

## 🧱 Built With

* [React 18](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/)
* [Lucide Icons](https://lucide.dev/)
* [twitter-search-query-parser](https://github.com/tweetdeck/twitter-search-query-parser) (core logic)

---

## 🗂️ Project Structure

```
src/
├── App.tsx          # Main UI logic & state
├── main.tsx         # Entry point
├── index.css        # Tailwind global styles
└── vite-env.d.ts    # Type definitions
```

---

## 📦 Build & Deploy

### Build for Production

```bash
yarn build
```

Output is in the `/dist` folder, ready for deployment (e.g., Netlify, Vercel, GitHub Pages).

---

## 🙏 Acknowledgments

Huge thanks to the [TweetDeck team](https://github.com/tweetdeck) for creating [twitter-search-query-parser](https://github.com/tweetdeck/twitter-search-query-parser), the heart of this tool.
