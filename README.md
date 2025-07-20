# 🐦 ChirpQL

A bidirectional parser for Twitter's search syntax. Transform plain Twitter search queries into structured objects and vice versa with a beautiful, interactive web interface.

## ✨ Features

- **🔄 Bidirectional Parsing**: Convert Twitter search queries to structured JSON and back to plain text
- **🎨 Beautiful Interface**: Modern, responsive design with smooth animations and gradients
- **📋 One-Click Copy**: Instantly copy results to clipboard
- **💡 Smart Examples**: Pre-loaded examples to get you started quickly
- **🔍 Real-time Processing**: Instant feedback as you type
- **📱 Mobile Optimized**: Fully responsive design that works on all devices
- **🛠️ Developer Friendly**: Perfect for building Twitter integrations and understanding search syntax

## 🎯 Use Cases

- **API Development**: Build Twitter search integrations with structured query objects
- **Learning Tool**: Understand Twitter's advanced search syntax
- **Query Debugging**: Validate and troubleshoot complex search queries
- **Documentation**: Generate examples for Twitter search API documentation
- **Automation**: Convert user-friendly queries into API-ready formats

## 🛠️ Supported Twitter Search Features

### Basic Operators
- `from:username` - Tweets from a specific user
- `to:username` - Tweets mentioning a specific user
- `#hashtag` - Tweets containing hashtags
- `@mention` - Tweets mentioning users
- `"exact phrase"` - Exact phrase matching

### Advanced Filters
- `lang:en` - Language filtering (ISO 639-1 codes)
- `since:2023-01-01` - Start date (YYYY-MM-DD)
- `until:2024-01-01` - End date (YYYY-MM-DD)
- `min_retweets:10` - Minimum retweets
- `min_faves:5` - Minimum favorites/likes
- `min_replies:2` - Minimum replies

### Boolean Logic & Modifiers
- `OR` - Boolean OR operator
- `-term` - Exclude terms (NOT operator)
- `()` - Grouping operators for complex logic
- `filter:verified` - Verified accounts only
- `filter:media` - Tweets with media

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chirpql.git
   cd chirpql
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage Examples

### Parse Query String → JSON Object

**Input:**
```
from:twitter #react OR #vue lang:en since:2023-01-01 -spam min_retweets:5
```

**Output:**
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

### Stringify JSON Object → Query String

**Input:**
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

**Output:**
```
javascript tutorial #coding #webdev from:github lang:en min_faves:10 filter:verified
```

## 🏗️ Built With

- **[React 18](https://reactjs.org/)** - Modern UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[twitter-search-query-parser](https://github.com/tweetdeck/twitter-search-query-parser)** - Core parsing engine

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component with parsing logic
├── main.tsx         # Application entry point
├── index.css        # Global Tailwind CSS styles
└── vite-env.d.ts    # Vite TypeScript definitions
```

## 🚀 Deployment

### Build for Production

```bash
yarn build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deploy to Netlify

1. **Build the project**
   ```bash
   yarn build
   ```

## 🙏 Acknowledgments

- **[TweetDeck Team](https://github.com/tweetdeck)** for the original [twitter-search-query-parser] library
