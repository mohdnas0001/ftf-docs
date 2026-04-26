# 🌐 Notable Websites to Clone — Student Project List

> Each clone is ranked by difficulty level. Students will use **React + Tailwind CSS** as the base stack, with additional tools specified per project.

---

## 🛠️ Base Stack (All Projects)

| Tool | Purpose |
|------|---------|
| **React** | UI component framework |
| **Tailwind CSS** | Utility-first styling |
| **JavaScript (ES6+)** | Core programming language |
| **HTML5** | Markup structure |
| **CSS3** | Additional custom styles where needed |
| **Git + GitHub** | Version control and collaboration |
| **Netlify / Vercel** | Free deployment |

---

## 🟢 Beginner Level

---

### 1. 🎬 Netflix Landing Page
**URL:** [netflix.com](https://netflix.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Hero section, featured movies grid, FAQ accordion, footer |
| **Difficulty** | ⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic structure for sections |
| **JavaScript (ES6+)** | Accordion toggle logic, dynamic rendering |
| **React (JSX)** | Components: Hero, MovieCard, FAQ, Navbar, Footer |
| **Tailwind CSS** | Dark background, grid layout, hover effects, responsive design |

#### ⚛️ React Concepts Practiced
- `useState` → FAQ accordion open/close toggle
- `props` → Pass movie data into MovieCard component
- `Array.map()` → Render list of movie cards
- Conditional rendering → Show/hide FAQ answer

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── FAQItem.jsx
│   └── Footer.jsx
```

---

### 2. 🐦 Twitter / X Profile Page
**URL:** [x.com](https://x.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Profile header, tweet card list, follow button toggle, tabs |
| **Difficulty** | ⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic layout structure |
| **JavaScript (ES6+)** | Tab switching, follow toggle |
| **React (JSX)** | Components: ProfileHeader, TweetCard, TabBar, FollowButton |
| **Tailwind CSS** | Border styles, responsive layout, hover states |

#### ⚛️ React Concepts Practiced
- `useState` → Follow/unfollow toggle, active tab state
- `props` → Pass tweet data into TweetCard
- `Array.map()` → Render tweet list
- Conditional rendering → Show different tab content

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProfileHeader.jsx
│   ├── TweetCard.jsx
│   ├── TabBar.jsx
│   ├── FollowButton.jsx
│   └── Footer.jsx
```

---

### 3. 🍕 Domino's / Food Delivery Landing Page
**URL:** [dominos.com](https://dominos.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Hero banner, menu grid, deals section, order button |
| **Difficulty** | ⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Page structure and semantic tags |
| **JavaScript (ES6+)** | Cart count logic, menu data |
| **React (JSX)** | Components: Banner, MenuCard, DealBanner, CartButton |
| **Tailwind CSS** | Colorful cards, grid layout, badge styling |

#### ⚛️ React Concepts Practiced
- `useState` → Cart item count
- `props` → Menu item data passed into MenuCard
- `Array.map()` → Render menu items
- Conditional rendering → Show cart badge when count > 0

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroBanner.jsx
│   ├── MenuCard.jsx
│   ├── MenuGrid.jsx
│   ├── DealsSection.jsx
│   └── Footer.jsx
```

---

### 4. 🏨 Airbnb Home Page
**URL:** [airbnb.com](https://airbnb.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Search bar, listing cards, category filters, footer |
| **Difficulty** | ⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic sections for listings and search |
| **JavaScript (ES6+)** | Filter logic, search matching |
| **React (JSX)** | Components: SearchBar, ListingCard, CategoryFilter, Navbar |
| **Tailwind CSS** | Rounded cards, shadow, responsive grid, gradient buttons |

#### ⚛️ React Concepts Practiced
- `useState` → Active filter, search query
- `props` → Listing data passed to ListingCard
- `Array.filter()` → Filter listings by category
- Conditional rendering → Show "no results" message

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── ListingCard.jsx
│   ├── ListingGrid.jsx
│   └── Footer.jsx
```

---

### 5. 👟 Nike Product Page
**URL:** [nike.com](https://nike.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Hero section, product cards, size selector, add to cart |
| **Difficulty** | ⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Sections for hero, products, size selection |
| **JavaScript (ES6+)** | Size selection logic, cart interaction |
| **React (JSX)** | Components: HeroBanner, ProductCard, SizeSelector, CartButton |
| **Tailwind CSS** | Large images, bold typography, button styles |

#### ⚛️ React Concepts Practiced
- `useState` → Selected size, cart items
- `props` → Product data passed to ProductCard
- Conditional rendering → Highlight selected size
- `Array.map()` → Render size options and product list

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroBanner.jsx
│   ├── ProductCard.jsx
│   ├── SizeSelector.jsx
│   ├── CartButton.jsx
│   └── Footer.jsx
```

---

## 🟡 Intermediate Level

---

### 6. 📺 YouTube Home Page
**URL:** [youtube.com](https://youtube.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Sidebar, video thumbnail grid, search bar, channel info |
| **Difficulty** | ⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic layout for sidebar + main content |
| **JavaScript (ES6+)** | Search filter, sidebar toggle |
| **React (JSX)** | Components: Sidebar, VideoCard, SearchBar, Navbar |
| **Tailwind CSS** | Two-column layout, thumbnail styling, hover states |
| **JSON (local data file)** | Mock video data (title, channel, views, thumbnail) |

#### ⚛️ React Concepts Practiced
- `useState` → Search query, sidebar open/close
- `useEffect` → Simulate data load on mount
- `props` → Video data passed to VideoCard
- `Array.filter()` → Filter videos by search term

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── VideoCard.jsx
│   ├── VideoGrid.jsx
│   ├── SearchBar.jsx
│   └── Footer.jsx
├── data/
│   └── videos.js
```

---

### 7. 💼 LinkedIn Profile Page
**URL:** [linkedin.com](https://linkedin.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Profile banner, experience section, skills section, connect button |
| **Difficulty** | ⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Structured sections for profile areas |
| **JavaScript (ES6+)** | Connect toggle, show more logic |
| **React (JSX)** | Components: ProfileBanner, ExperienceCard, SkillBadge, ConnectButton |
| **Tailwind CSS** | Card sections, badge pills, shadow, responsive layout |
| **JSON (local data file)** | Profile data (experience, skills, education) |

#### ⚛️ React Concepts Practiced
- `useState` → Connect/unconnect toggle, show more/less
- `props` → Experience and skills data
- `Array.map()` → Render experience list and skills
- Conditional rendering → Show full or truncated bio

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProfileBanner.jsx
│   ├── AboutSection.jsx
│   ├── ExperienceCard.jsx
│   ├── SkillBadge.jsx
│   ├── ConnectButton.jsx
│   └── Footer.jsx
├── data/
│   └── profile.js
```

---

### 8. 🛒 Amazon Product Listing Page
**URL:** [amazon.com](https://amazon.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Search bar, product cards, star ratings, price display, filter sidebar |
| **Difficulty** | ⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic structure for sidebar + product grid |
| **JavaScript (ES6+)** | Filter, sort, and search logic |
| **React (JSX)** | Components: ProductCard, StarRating, FilterSidebar, SearchBar |
| **Tailwind CSS** | Sidebar layout, product grid, badge styling |
| **JSON (local data file)** | Mock product data (name, price, rating, image) |

#### ⚛️ React Concepts Practiced
- `useState` → Search, active filters, sort option
- `useEffect` → Load product data on mount
- `props` → Product data passed to ProductCard
- `Array.filter() + Array.sort()` → Filter and sort products

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── FilterSidebar.jsx
│   ├── ProductCard.jsx
│   ├── StarRating.jsx
│   ├── SortDropdown.jsx
│   └── Footer.jsx
├── data/
│   └── products.js
```

---

### 9. 🎵 Spotify Home Page
**URL:** [spotify.com](https://spotify.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Dark sidebar, album cards, featured playlist grid, music controls UI |
| **Difficulty** | ⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Layout for sidebar, main, and player |
| **JavaScript (ES6+)** | Play/pause toggle, active song state |
| **React (JSX)** | Components: Sidebar, AlbumCard, PlaylistGrid, MusicPlayer |
| **Tailwind CSS** | Dark theme (`bg-black`, `bg-gray-900`), grid, progress bar styling |
| **JSON (local data file)** | Mock playlist and album data |

#### ⚛️ React Concepts Practiced
- `useState` → Play/pause state, active song, active nav item
- `props` → Album and playlist data
- `Array.map()` → Render album cards and playlist items
- Conditional rendering → Show playing vs paused icon

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── AlbumCard.jsx
│   ├── PlaylistGrid.jsx
│   ├── FeaturedBanner.jsx
│   ├── MusicPlayer.jsx
│   └── Footer.jsx
├── data/
│   └── playlists.js
```

---

### 10. 📸 Instagram Profile Page
**URL:** [instagram.com](https://instagram.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Profile header, post grid, story circles, follow button |
| **Difficulty** | ⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic layout for profile and grid |
| **JavaScript (ES6+)** | Follow toggle, tab switching |
| **React (JSX)** | Components: ProfileHeader, StoryCircle, PostGrid, PostCard, TabBar |
| **Tailwind CSS** | Circular avatars, 3-column grid, gradient story ring |
| **JSON (local data file)** | Mock posts and stories data |

#### ⚛️ React Concepts Practiced
- `useState` → Follow toggle, active tab (Posts/Reels/Tagged)
- `props` → Post and story data
- `Array.map()` → Render post grid and story circles
- Conditional rendering → Show different tab content

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProfileHeader.jsx
│   ├── StoryCircle.jsx
│   ├── StoriesRow.jsx
│   ├── PostCard.jsx
│   ├── PostGrid.jsx
│   └── TabBar.jsx
├── data/
│   └── posts.js
```

---

### 11. 💳 Stripe Landing Page
**URL:** [stripe.com](https://stripe.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Hero section, features section, pricing table, gradient backgrounds |
| **Difficulty** | ⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Clean semantic section structure |
| **JavaScript (ES6+)** | Monthly/yearly pricing toggle logic |
| **React (JSX)** | Components: Hero, FeatureCard, PricingCard, PricingToggle |
| **Tailwind CSS** | Gradient backgrounds, pricing table, responsive grid |
| **JSON (local data file)** | Pricing and feature data |

#### ⚛️ React Concepts Practiced
- `useState` → Monthly vs yearly billing toggle
- `props` → Pricing and feature data
- Conditional rendering → Show different price based on toggle
- `Array.map()` → Render feature and pricing cards

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeatureCard.jsx
│   ├── FeaturesGrid.jsx
│   ├── PricingToggle.jsx
│   ├── PricingCard.jsx
│   └── Footer.jsx
├── data/
│   └── pricing.js
```

---

### 12. 📰 BBC / CNN News Homepage
**URL:** [bbc.com](https://bbc.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Breaking news banner, article cards, category tabs, top stories |
| **Difficulty** | ⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic news article structure |
| **JavaScript (ES6+)** | Category filtering, tab switching |
| **React (JSX)** | Components: BreakingBanner, ArticleCard, CategoryTabs, TopStory |
| **Tailwind CSS** | News grid layout, category badges, responsive columns |
| **JSON (local data file)** | Mock article data (title, category, image, date) |

#### ⚛️ React Concepts Practiced
- `useState` → Active category/tab
- `useEffect` → Simulate loading articles on mount
- `props` → Article data passed to ArticleCard
- `Array.filter()` → Filter articles by category

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
��   ├── BreakingNewsBanner.jsx
│   ├── CategoryTabs.jsx
│   ├── ArticleCard.jsx
│   ├── TopStory.jsx
│   ├── ArticleGrid.jsx
│   └── Footer.jsx
├── data/
│   └── articles.js
```

---

## 🔴 Advanced Level

---

### 13. 🐙 GitHub Profile Page
**URL:** [github.com](https://github.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Profile sidebar, repo list, contribution graph, pinned repos |
| **Difficulty** | ⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Semantic layout for sidebar + main content |
| **JavaScript (ES6+)** | API data processing, date formatting |
| **React (JSX)** | Components: ProfileSidebar, RepoCard, ContributionGraph, PinnedRepo |
| **Tailwind CSS** | Split layout, repo cards, contribution grid cells |
| **GitHub REST API** | Fetch real user repos and profile data (free, no auth needed for public) |

#### ⚛️ React Concepts Practiced
- `useState` → Active tab, search query
- `useEffect` → Fetch real GitHub API data on mount
- `props` → Repo data passed to RepoCard
- `Array.filter() + Array.sort()` → Filter and sort repos
- Error handling → Show error state if API fails

#### 🌐 Free API Used
```
https://api.github.com/users/{username}
https://api.github.com/users/{username}/repos
```

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProfileSidebar.jsx
│   ├── RepoCard.jsx
│   ├── RepoList.jsx
│   ├── PinnedRepo.jsx
│   ├── ContributionGraph.jsx
│   └── Footer.jsx
```

---

### 14. 🎮 Twitch Home Page
**URL:** [twitch.tv](https://twitch.tv)

| Detail | Info |
|--------|------|
| **What to Clone** | Dark sidebar, live stream cards, viewer counts, category browse |
| **Difficulty** | ⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Sidebar + content area structure |
| **JavaScript (ES6+)** | Live/offline toggle, viewer count formatting |
| **React (JSX)** | Components: Sidebar, StreamCard, CategoryCard, LiveBadge |
| **Tailwind CSS** | Dark theme, purple accents, sidebar layout, grid |
| **JSON (local data file)** | Mock stream and category data |

#### ⚛️ React Concepts Practiced
- `useState` → Sidebar collapsed/expanded, active category
- `useEffect` → Simulate live viewer count updates
- `props` → Stream data passed to StreamCard
- Conditional rendering → Show LIVE badge when stream is live
- `Array.map()` → Render stream and category lists

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── StreamCard.jsx
│   ├── StreamGrid.jsx
│   ├── CategoryCard.jsx
│   ├── LiveBadge.jsx
│   └── Footer.jsx
├── data/
│   └── streams.js
```

---

### 15. ✈️ Booking.com Hotel Listing Page
**URL:** [booking.com](https://booking.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Search form, hotel listing cards, price filters, star ratings |
| **Difficulty** | ⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Form structure, listing layout |
| **JavaScript (ES6+)** | Form validation, filter + sort logic |
| **React (JSX)** | Components: SearchForm, HotelCard, FilterSidebar, StarRating, PriceRange |
| **Tailwind CSS** | Form styling, card layout, filter sidebar |
| **JSON (local data file)** | Mock hotel data (name, price, rating, image, location) |

#### ⚛️ React Concepts Practiced
- `useState` → Form inputs, filters, sort option
- `useEffect` → Filter results when state changes
- `props` → Hotel data passed to HotelCard
- Controlled inputs → All form fields controlled
- `Array.filter() + Array.sort()` → Filter by price, rating

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchForm.jsx
│   ├── FilterSidebar.jsx
│   ├── HotelCard.jsx
│   ├── StarRating.jsx
│   ├── SortDropdown.jsx
│   ├── PriceRangeSlider.jsx
│   └── Footer.jsx
├── data/
│   └── hotels.js
```

---

### 16. 🧑‍💻 Notion Dashboard
**URL:** [notion.so](https://notion.so)

| Detail | Info |
|--------|------|
| **What to Clone** | Sidebar navigation, page content area, block-style sections |
| **Difficulty** | ⭐⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Sidebar + content split layout |
| **JavaScript (ES6+)** | Page switching, editable text logic |
| **React (JSX)** | Components: Sidebar, PageBlock, EditableText, ContentArea |
| **Tailwind CSS** | Minimal clean layout, hover-reveal actions, sidebar styling |
| **JSON (local data file)** | Mock pages and blocks data |

#### ⚛️ React Concepts Practiced
- `useState` → Active page, editing mode, block content
- `useEffect` → Load page content when active page changes
- `props` → Page and block data
- Controlled inputs → Editable text blocks
- Conditional rendering → Show edit mode vs view mode

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── PageBlock.jsx
│   ├── EditableText.jsx
│   ├── ContentArea.jsx
│   ├── BreadCrumb.jsx
│   └── Footer.jsx
├── data/
│   └── pages.js
```

---

### 17. 🗺️ Google Maps UI Clone
**URL:** [maps.google.com](https://maps.google.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Search sidebar, location cards, directions panel |
| **Difficulty** | ⭐⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Split sidebar + map area layout |
| **JavaScript (ES6+)** | Search logic, selected location state |
| **React (JSX)** | Components: SearchSidebar, LocationCard, DirectionsPanel, MapPlaceholder |
| **Tailwind CSS** | Split layout, card list, search input, direction steps |
| **Leaflet.js** *(optional bonus)* | Embed a real interactive map |
| **JSON (local data file)** | Mock location data |

#### ⚛️ React Concepts Practiced
- `useState` → Search query, selected location, directions visible
- `useEffect` → Filter locations when search changes
- `props` → Location data passed to LocationCard
- Conditional rendering → Show directions panel when location selected

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchSidebar.jsx
│   ├── LocationCard.jsx
│   ├── DirectionsPanel.jsx
│   ├── MapPlaceholder.jsx
│   └── Footer.jsx
├── data/
│   └── locations.js
```

---

### 18. 💬 WhatsApp Web UI
**URL:** [web.whatsapp.com](https://web.whatsapp.com)

| Detail | Info |
|--------|------|
| **What to Clone** | Chat list sidebar, message bubbles, message input bar |
| **Difficulty** | ⭐⭐⭐⭐⭐ |
| **Wow Factor** | ⭐⭐⭐⭐⭐ |

#### 💻 Languages & Tools
| Language / Tool | How It's Used |
|----------------|--------------|
| **HTML5** | Chat layout structure |
| **JavaScript (ES6+)** | Message send logic, timestamp formatting |
| **React (JSX)** | Components: ChatList, ChatWindow, MessageBubble, MessageInput, ContactCard |
| **Tailwind CSS** | Green/white chat bubbles, split layout, scrollable panels |
| **JSON (local data file)** | Mock contacts and message history |

#### ⚛️ React Concepts Practiced
- `useState` → Active chat, message input, messages array
- `useEffect` → Auto-scroll to latest message
- `props` → Message and contact data
- `Array.map()` → Render message list and contact list
- Conditional rendering → Sent vs received bubble styling

#### 📦 Suggested Components
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ChatList.jsx
│   ├── ContactCard.jsx
│   ├── ChatWindow.jsx
│   ├── MessageBubble.jsx
│   ├── MessageInput.jsx
│   └── StatusBar.jsx
├── data/
│   └── chats.js
```

---

## 📊 Full Comparison Table

| # | Website | Level | Languages / Tools | Difficulty | Wow Factor |
|---|---------|-------|------------------|-----------|-----------|
| 1 | Netflix Landing | 🟢 Beginner | React, Tailwind, JS, HTML | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| 2 | Twitter Profile | 🟢 Beginner | React, Tailwind, JS, HTML | ⭐⭐ | ⭐⭐⭐⭐ |
| 3 | Domino's Landing | 🟢 Beginner | React, Tailwind, JS, HTML | ⭐⭐ | ⭐⭐⭐⭐ |
| 4 | Airbnb Home | 🟢 Beginner | React, Tailwind, JS, HTML | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 5 | Nike Product Page | 🟢 Beginner | React, Tailwind, JS, HTML | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| 6 | YouTube Home | 🟡 Intermediate | React, Tailwind, JS, JSON data | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 7 | LinkedIn Profile | 🟡 Intermediate | React, Tailwind, JS, JSON data | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 8 | Amazon Listing | 🟡 Intermediate | React, Tailwind, JS, JSON data | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 9 | Spotify Home | 🟡 Intermediate | React, Tailwind, JS, JSON data | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 10 | Instagram Profile | 🟡 Intermediate | React, Tailwind, JS, JSON data | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 11 | Stripe Landing | 🟡 Intermediate | React, Tailwind, JS, JSON data | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 12 | BBC/CNN News | 🟡 Intermediate | React, Tailwind, JS, JSON data | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 13 | GitHub Profile | 🔴 Advanced | React, Tailwind, JS, GitHub API | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 14 | Twitch Home | 🔴 Advanced | React, Tailwind, JS, JSON data | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 15 | Booking.com | 🔴 Advanced | React, Tailwind, JS, JSON data | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 16 | Notion Dashboard | 🔴 Advanced | React, Tailwind, JS, JSON data | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 17 | Google Maps UI | 🔴 Advanced | React, Tailwind, JS, Leaflet.js | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 18 | WhatsApp Web | 🔴 Advanced | React, Tailwind, JS, JSON data | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎯 How to Assign Projects

### Option A — Student Choice
> Let each student pick ONE website matching their current level

### Option B — Team Assignment
> Assign one website per team of 3, each student builds a different section:
```
Example: Spotify Clone
├── Student A → Sidebar + Navbar
├── Student B → Album Cards + Playlist Grid
└── Student C → Music Player Controls + Footer
```

### Option C — Leveled Progression
> All students clone the same site but requirements scale by level:
```
🟢 Beginner     → Static layout only (no interactivity)
🟡 Intermediate → Add search, filter, and interactive buttons
🔴 Advanced     → Add form, API data, and full navigation
```

---

## 📤 Submission Requirements

- [ ] Public GitHub repository link
- [ ] Live deployed link (Netlify or Vercel)
- [ ] Side-by-side screenshot (original site vs your clone)
- [ ] Mobile responsive screenshot (DevTools)
- [ ] Short write-up answering:
  - *Which website did you choose and why?*
  - *What was the hardest part to replicate?*
  - *Which React concepts did you use and where?*

---

## 🚀 Free Deployment Guide

```bash
# ── Option 1: Netlify (Easiest) ─────────────────────
npm run build
# Drag and drop the /build folder to netlify.com/drop

# ── Option 2: Vercel (CLI) ──────────────────────────
npm install -g vercel
vercel

# ── Option 3: GitHub Pages ──────────────────────────
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://yourusername.github.io/repo-name"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 🏆 Grading Rubric (All Projects)

| Criteria | Points |
|---------|--------|
| Visual resemblance to original site | 25pts |
| React components properly structured | 20pts |
| Tailwind CSS used correctly (no inline styles) | 15pts |
| At least 2 interactive features (useState) | 15pts |
| Fully responsive (mobile + desktop) | 10pts |
| Deployed and accessible via live link | 5pts |
| Clean Git history with meaningful commits | 5pts |
| README with setup instructions + screenshots | 5pts |
| **Total** | **100pts** |

---

*Built with React + Tailwind CSS | Curriculum designed for beginner to advanced students*
