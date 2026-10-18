import { AppTemplate } from '../types';

export const TEMPLATES: AppTemplate[] = [
  {
    id: 'buno-coffee',
    name: 'Buno Specialty Coffee & Roastery',
    nameAm: 'ቡኖ የኢትዮጵያ ስፔሻሊቲ ቡና እና ማዘዣ',
    tagline: 'Premium single-origin Ethiopian coffee with live cart & Telebirr checkout',
    taglineAm: 'ምርጥ የኢትዮጵያ ቡናዎች ከነ ቀጥታ ማዘዣ እና የቴሌብር ክፍያ',
    category: 'E-Commerce',
    categoryAm: 'የኢ-ኮሜርስ የገበያ መድረክ',
    description: 'A full-featured coffee e-commerce store with bean selector, bag size, currency toggle (ETB/USD), shopping cart, and mock checkout.',
    descriptionAm: 'ሙሉ የቡና መሸጫ ድረገፅ ከነ የቡና አይነት መምረጫ፣ የከረጢት መጠን፣ የብርና ዶላር መቀየሪያ፣ የዕቃ ቅርጫት እና የክፍያ ስርአት።',
    iconName: 'Coffee',
    badge: 'Popular E-Commerce',
    badgeAm: 'ተመራጭ ኢ-ኮሜርስ',
    features: [
      'Interactive Shopping Cart with LocalStorage',
      'Roast origin filters (Yirgacheffe, Sidama, Guji, Harar)',
      'Multi-currency support (ETB Birr / USD)',
      'Working Telebirr / CBE / Card checkout dialog',
      'Coffee brewing ratio calculator tool'
    ],
    featuresAm: [
      'የዕቃ ቅርጫት (Cart) ከነ ድምር ማስያዣ',
      'የቡና መነሻ ማጣሪያ (ይርጋጨፌ፣ ሲዳማ፣ ጉጂ፣ ሐረር)',
      'የብርና የዶላር ገንዘብ መለወጫ',
      'የቴሌብርና የባንክ ክፍያ ማጠናቀቂያ',
      'የቡና ማፍያ የውሃና የቡና መጠን አስሊ'
    ],
    html: `<!DOCTYPE html>
<html lang="am">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ቡኖ ስፔሻሊቲ ቡና | Buno Coffee Roasters</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Noto Sans Ethiopic', 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-amber-950/5 text-stone-800 antialiased min-h-screen flex flex-col">
  <!-- Top Banner -->
  <div class="bg-stone-900 text-amber-200 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
    <span>☕ ለአዲስ አበባ ከተማ ፈጣን ዴሊቨሪ በነፃ! Free shipping in Addis Ababa</span>
    <span class="bg-amber-700/60 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">ኮድ: BUNO2026</span>
  </div>

  <!-- Navigation -->
  <header class="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 bg-amber-800 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-900/20 font-bold text-xl">
          ቡ
        </div>
        <div>
          <span class="text-xl font-extrabold text-stone-900 tracking-tight block">BUNO <span class="text-amber-800">ROASTERS</span></span>
          <span class="text-xs text-amber-800 font-semibold block -mt-1">ቡኖ የኢትዮጵያ ስፔሻሊቲ ቡና</span>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
        <a href="#coffees" class="hover:text-amber-800 transition">ቡናዎች (Coffees)</a>
        <a href="#origin" class="hover:text-amber-800 transition">ስለ ቡና መነሻ (Origins)</a>
        <a href="#brew-calc" class="hover:text-amber-800 transition">የማፍያ መመሪያ (Brew Guide)</a>
        <a href="#reviews" class="hover:text-amber-800 transition">አስተያየቶች (Reviews)</a>
      </nav>

      <div class="flex items-center gap-3">
        <select id="currency-select" class="text-xs font-bold bg-stone-100 border border-stone-200 rounded-lg px-2.5 py-1.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-800">
          <option value="ETB">ብር (ETB)</option>
          <option value="USD">$ (USD)</option>
        </select>

        <button id="cart-btn" class="relative p-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-xl transition flex items-center gap-2 font-bold text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span class="hidden sm:inline">ቅርጫት</span>
          <span id="cart-badge" class="bg-amber-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">0</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-stone-900 via-stone-850 to-amber-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div class="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs px-3.5 py-1.5 rounded-full mb-6 font-semibold">
          <span>✨ 100% ንፁህ የኢትዮጵያ አረቢካ ቡና</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          የቡና መገኛ ምድር <span class="text-amber-400">እውነተኛ ጣዕም</span> በቤትዎ
        </h1>
        <p class="text-stone-300 text-base sm:text-lg mb-8 leading-relaxed">
          ከይርጋጨፌ፣ ሲዳማ፣ ጉጂ እና ሐረር ተራሮች በእጅ የተለቀሙና በጥንቃቄ የተቆሉ የዓለም ቁንጮ ስፔሻሊቲ ቡናዎች።
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#coffees" class="bg-amber-600 hover:bg-amber-500 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-amber-900/40 transition">
            አሁን ይዘዙ (Shop Beans)
          </a>
          <a href="#brew-calc" class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 text-white px-7 py-3.5 rounded-xl font-bold transition">
            የማፍያ መጠን አስላ
          </a>
        </div>
      </div>
      <div class="relative">
        <div class="bg-gradient-to-tr from-amber-600/30 to-amber-300/10 p-4 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
          <div class="bg-stone-900/90 p-6 rounded-2xl border border-stone-800">
            <div class="flex items-center justify-between pb-4 border-b border-stone-800">
              <span class="text-amber-400 font-bold text-sm">የዛሬው ምርጥ ምርጫ (Featured)</span>
              <span class="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full">Grade 1</span>
            </div>
            <div class="py-6 text-center">
              <div class="w-24 h-24 mx-auto bg-amber-800/40 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">
                🌱
              </div>
              <h3 class="text-2xl font-bold text-white mb-1">ይርጋጨፌ ናቹራል (Yirgacheffe G1)</h3>
              <p class="text-amber-200/80 text-sm mb-4">የጃስሚን አበባ፣ ቤሪ እና የሎሚ ደማቅ ማስታወሻዎች</p>
              <div class="flex items-center justify-center gap-4 text-xs text-stone-400">
                <span>ከፍታ: 2,100m</span> • <span>ሂደት: ናቹራል</span> • <span>መቆላት: መካከለኛ</span>
              </div>
            </div>
            <div class="pt-4 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span class="text-xs text-stone-400 block">ዋጋ (Price)</span>
                <span class="text-xl font-extrabold text-white" id="hero-price">850 ብር</span>
              </div>
              <button onclick="addToCart('buno-1', 'ይርጋጨፌ ናቹራል (Yirgacheffe G1)', 850, 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=300')" class="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition">
                ቅርጫት ጨምር +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Filter & Coffee Catalog -->
  <section id="coffees" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <h2 class="text-3xl font-extrabold text-stone-900">የቡና ዝርዝር (Our Specialty Beans)</h2>
        <p class="text-stone-500 text-sm mt-1">የሚፈልጉትን የክልል ቡና እና የመቆላት ደረጃ ይምረጡ</p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-center gap-2">
        <button onclick="filterBeans('all')" class="filter-btn active bg-amber-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition">ሁሉም (All)</button>
        <button onclick="filterBeans('yirga')" class="filter-btn bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold px-4 py-2 rounded-xl transition">ይርጋጨፌ</button>
        <button onclick="filterBeans('sidama')" class="filter-btn bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold px-4 py-2 rounded-xl transition">ሲዳማ</button>
        <button onclick="filterBeans('guji')" class="filter-btn bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold px-4 py-2 rounded-xl transition">ጉጂ</button>
        <button onclick="filterBeans('harar')" class="filter-btn bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold px-4 py-2 rounded-xl transition">ሐረር</button>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="coffee-grid">
      <!-- Card 1 -->
      <div class="coffee-card bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between" data-region="yirga">
        <div>
          <div class="flex justify-between items-start mb-4">
            <span class="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Grade 1 Washed</span>
            <span class="text-amber-500 font-bold text-xs flex items-center gap-1">★ 4.9 (128)</span>
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">ይርጋጨፌ ቼልቼሌ (Yirgacheffe Chelchele)</h3>
          <p class="text-stone-600 text-xs mb-4 leading-relaxed">የሎሚ ጭማቂ፣ የፓሽን ፍሩትና የሻይ አበባ መዓዛ ያለው ከፍተኛ ጥራት ያለው የኢትዮጵያ ቡና።</p>
          
          <div class="bg-stone-50 p-3 rounded-xl mb-4 text-xs space-y-1 text-stone-600">
            <div class="flex justify-between"><span>ጣዕም (Notes):</span> <b class="text-stone-800">Peach, Jasmine, Citrus</b></div>
            <div class="flex justify-between"><span>መጠን:</span> <b class="text-stone-800">250g የተቆላ</b></div>
          </div>
        </div>

        <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span class="text-[11px] text-stone-400 block font-medium">ዋጋ</span>
            <span class="text-xl font-extrabold text-stone-900 price-tag" data-etb="850">850 ብር</span>
          </div>
          <button onclick="addToCart('buno-1', 'ይርጋጨፌ ቼልቼሌ', 850)" class="bg-stone-900 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow">
            <span>ማዘዣ ጨምር</span> +
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="coffee-card bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between" data-region="sidama">
        <div>
          <div class="flex justify-between items-start mb-4">
            <span class="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">Sidama Bensa G1</span>
            <span class="text-amber-500 font-bold text-xs flex items-center gap-1">★ 4.95 (96)</span>
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">ሲዳማ ቤንሳ ናቹራል (Sidama Bensa)</h3>
          <p class="text-stone-600 text-xs mb-4 leading-relaxed">የእንጆሪና የቀይ ፕለም ጣዕም ያለው፣ ጥልቅ የሆነ ተፈጥሯዊ ጣፋጭነት ያለው ቡና።</p>
          
          <div class="bg-stone-50 p-3 rounded-xl mb-4 text-xs space-y-1 text-stone-600">
            <div class="flex justify-between"><span>ጣዕም (Notes):</span> <b class="text-stone-800">Strawberry, Milk Chocolate, Honey</b></div>
            <div class="flex justify-between"><span>መጠን:</span> <b class="text-stone-800">250g የተቆላ</b></div>
          </div>
        </div>

        <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span class="text-[11px] text-stone-400 block font-medium">ዋጋ</span>
            <span class="text-xl font-extrabold text-stone-900 price-tag" data-etb="900">900 ብር</span>
          </div>
          <button onclick="addToCart('buno-2', 'ሲዳማ ቤንሳ ናቹራል', 900)" class="bg-stone-900 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow">
            <span>ማዘዣ ጨምር</span> +
          </button>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="coffee-card bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between" data-region="guji">
        <div>
          <div class="flex justify-between items-start mb-4">
            <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Guji Hambela G1</span>
            <span class="text-amber-500 font-bold text-xs flex items-center gap-1">★ 4.88 (84)</span>
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">ጉጂ ሃምቤላ (Guji Hambela)</h3>
          <p class="text-stone-600 text-xs mb-4 leading-relaxed">ከጉጂ ደን ውስጥ የተመረተ ልዩ ማር እና አናናስ መሰል ቅንብር ያለው ልዩ ቡና።</p>
          
          <div class="bg-stone-50 p-3 rounded-xl mb-4 text-xs space-y-1 text-stone-600">
            <div class="flex justify-between"><span>ጣዕም (Notes):</span> <b class="text-stone-800">Bergamot, Pineapple, Cane Sugar</b></div>
            <div class="flex justify-between"><span>መጠን:</span> <b class="text-stone-800">250g የተቆላ</b></div>
          </div>
        </div>

        <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span class="text-[11px] text-stone-400 block font-medium">ዋጋ</span>
            <span class="text-xl font-extrabold text-stone-900 price-tag" data-etb="880">880 ብር</span>
          </div>
          <button onclick="addToCart('buno-3', 'ጉጂ ሃምቤላ', 880)" class="bg-stone-900 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow">
            <span>ማዘዣ ጨምር</span> +
          </button>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="coffee-card bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between" data-region="harar">
        <div>
          <div class="flex justify-between items-start mb-4">
            <span class="bg-rose-100 text-rose-850 text-xs font-bold px-3 py-1 rounded-full">Harar Horse Blend</span>
            <span class="text-amber-500 font-bold text-xs flex items-center gap-1">★ 4.82 (110)</span>
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">ሐረር ወርቃማው ቡና (Harar Longberry)</h3>
          <p class="text-stone-600 text-xs mb-4 leading-relaxed">የጥንታዊው የሐረር ምድር የበሰለ የሞካ ጣዕም፣ ወይን እና የደረቁ ፍራፍሬዎች መዓዛ።</p>
          
          <div class="bg-stone-50 p-3 rounded-xl mb-4 text-xs space-y-1 text-stone-600">
            <div class="flex justify-between"><span>ጣዕም (Notes):</span> <b class="text-stone-800">Dark Mocha, Blueberry, Spices</b></div>
            <div class="flex justify-between"><span>መጠን:</span> <b class="text-stone-800">250g የተቆላ</b></div>
          </div>
        </div>

        <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span class="text-[11px] text-stone-400 block font-medium">ዋጋ</span>
            <span class="text-xl font-extrabold text-stone-900 price-tag" data-etb="950">950 ብር</span>
          </div>
          <button onclick="addToCart('buno-4', 'ሐረር ወርቃማው ቡና', 950)" class="bg-stone-900 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow">
            <span>ማዘዣ ጨምር</span> +
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Brew Ratio Calculator Section -->
  <section id="brew-calc" class="bg-stone-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <span class="text-amber-400 text-xs font-bold uppercase tracking-wider">የባለሙያ መመሪያ (Barista Tool)</span>
        <h2 class="text-3xl font-extrabold mt-1">የቡና እና የውሃ መጠን ማስያዣ (Brew Calculator)</h2>
        <p class="text-stone-400 text-sm mt-2">ለጅበና፣ ለፈረንጅ ማጣሪያ (V60) ወይም ለኤሮፕረስ ተስማሚ መጠን ያግኙ</p>
      </div>

      <div class="bg-stone-800/80 p-6 sm:p-8 rounded-2xl border border-stone-700/60 grid sm:grid-cols-3 gap-6 items-center">
        <div>
          <label class="block text-xs font-semibold text-stone-300 mb-2">የማፍያ ዘዴ (Method)</label>
          <select id="calc-method" onchange="calculateBrew()" class="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option value="15">የባህል ጀበና (1:15 Ratio)</option>
            <option value="16">V60 / Pour-over (1:16 Ratio)</option>
            <option value="12">ኤሮፕረስ / French Press (1:12 Ratio)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-stone-300 mb-2">የሲኒ / የብርጭቆ ብዛት (Cups)</label>
          <input type="number" id="calc-cups" value="2" min="1" max="12" oninput="calculateBrew()" class="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </div>

        <div class="bg-stone-950 p-4 rounded-xl border border-stone-800 text-center">
          <span class="text-xs text-stone-400 block mb-1">የሚያስፈልገው የተፈጨ ቡና</span>
          <span id="calc-result" class="text-2xl font-black text-amber-400">20 ግራም</span>
          <span class="text-[11px] text-stone-500 block mt-1" id="calc-water">ውሃ: 300 ml (92°C)</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Cart Modal -->
  <div id="cart-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex justify-end">
    <div class="bg-white w-full max-w-md h-full shadow-2xl flex flex-col p-6 animate-slide-left">
      <div class="flex items-center justify-between pb-4 border-b border-stone-200">
        <h3 class="text-lg font-extrabold text-stone-900 flex items-center gap-2">
          <span>🛍️ የዕቃ ቅርጫት (Cart)</span>
        </h3>
        <button onclick="toggleCart()" class="text-stone-400 hover:text-stone-800 p-2 rounded-lg">✕</button>
      </div>

      <div id="cart-items" class="flex-1 overflow-y-auto py-4 divide-y divide-stone-100">
        <div class="text-center py-12 text-stone-400 text-sm">ቅርጫትዎ ውስጥ ምንም እቃ የለም።</div>
      </div>

      <div class="pt-4 border-t border-stone-200 space-y-3">
        <div class="flex justify-between text-sm font-semibold text-stone-600">
          <span>ድምር (Subtotal)</span>
          <span id="cart-subtotal" class="text-stone-900 font-extrabold">0 ብር</span>
        </div>
        <div class="flex justify-between text-xs text-stone-500">
          <span>ዴሊቨሪ (Delivery)</span>
          <span class="text-emerald-600 font-bold">በነፃ (FREE)</span>
        </div>
        <div class="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-stone-100">
          <span>ጠቅላላ ክፍያ (Total)</span>
          <span id="cart-total" class="text-amber-800 text-xl font-black">0 ብር</span>
        </div>
        
        <button id="checkout-btn" onclick="openCheckout()" class="w-full bg-amber-800 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition">
          ወደ ክፍያ ይቀጥሉ (Proceed to Checkout)
        </button>
      </div>
    </div>
  </div>

  <!-- Checkout Modal -->
  <div id="checkout-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200">
      <div class="flex justify-between items-start pb-4 border-b border-stone-100 mb-6">
        <div>
          <h3 class="text-xl font-bold text-stone-900">የክፍያና ማዘዣ ማጠናቀቂያ</h3>
          <p class="text-xs text-stone-500 mt-0.5">የመላኪያ አድራሻዎንና የክፍያ መንገድ ይምረጡ</p>
        </div>
        <button onclick="closeCheckout()" class="text-stone-400 hover:text-stone-700 p-1">✕</button>
      </div>

      <form id="order-form" onsubmit="submitOrder(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">ሙሉ ስም (Full Name)</label>
          <input required type="text" placeholder="አበበ በቀለ" class="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">ስልክ ቁጥር (Phone)</label>
            <input required type="tel" placeholder="0911 23 45 67" class="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-700 mb-1">አካባቢ / ከተማ</label>
            <input required type="text" placeholder="ቦሌ፣ አዲስ አበባ" class="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-700 mb-2">የክፍያ ዘዴ ይምረጡ (Payment Method)</label>
          <div class="grid grid-cols-3 gap-2">
            <label class="border-2 border-amber-800 bg-amber-50/50 p-3 rounded-xl flex flex-col items-center cursor-pointer text-center">
              <input type="radio" name="pay-method" value="telebirr" checked class="sr-only" />
              <span class="text-sm font-extrabold text-blue-700">telebirr</span>
              <span class="text-[10px] text-stone-500 mt-1">ቴሌብር</span>
            </label>
            <label class="border border-stone-200 hover:border-amber-700 p-3 rounded-xl flex flex-col items-center cursor-pointer text-center">
              <input type="radio" name="pay-method" value="cbe" class="sr-only" />
              <span class="text-sm font-extrabold text-purple-700">CBE Birr</span>
              <span class="text-[10px] text-stone-500 mt-1">ሲቢኢ ብር</span>
            </label>
            <label class="border border-stone-200 hover:border-amber-700 p-3 rounded-xl flex flex-col items-center cursor-pointer text-center">
              <input type="radio" name="pay-method" value="cash" class="sr-only" />
              <span class="text-sm font-extrabold text-stone-700">Cash</span>
              <span class="text-[10px] text-stone-500 mt-1">በእጅ ሲረከቡ</span>
            </label>
          </div>
        </div>

        <button type="submit" class="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition mt-4">
          ትዕዛዙን አረጋግጥ (Confirm Order)
        </button>
      </form>
    </div>
  </div>

  <!-- Toast Notification -->
  <div id="toast" class="fixed bottom-6 right-6 bg-stone-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-20 opacity-0 z-50">
    <span class="text-amber-400 text-lg">✓</span>
    <span id="toast-msg" class="text-sm font-medium">እቃው ቅርጫት ውስጥ ገብቷል!</span>
  </div>

  <script>
    let cart = [];
    let currentCurrency = 'ETB';
    const rate = 115; // 1 USD = 115 ETB

    function updateCartUI() {
      const badge = document.getElementById('cart-badge');
      const itemsContainer = document.getElementById('cart-items');
      const subtotalEl = document.getElementById('cart-subtotal');
      const totalEl = document.getElementById('cart-total');

      const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
      badge.innerText = totalItems;

      if (cart.length === 0) {
        itemsContainer.innerHTML = '<div class="text-center py-12 text-stone-400 text-sm">ቅርጫትዎ ውስጥ ምንም እቃ የለም።</div>';
        subtotalEl.innerText = formatPrice(0);
        totalEl.innerText = formatPrice(0);
        return;
      }

      let subtotal = 0;
      itemsContainer.innerHTML = cart.map(item => {
        subtotal += item.price * item.qty;
        return \`
          <div class="py-3 flex items-center justify-between">
            <div>
              <h4 class="font-bold text-stone-900 text-sm">\${item.name}</h4>
              <span class="text-xs text-stone-500">\${formatPrice(item.price)} x \${item.qty}</span>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="changeQty('\${item.id}', -1)" class="w-7 h-7 bg-stone-100 rounded-lg font-bold text-stone-700">-</button>
              <span class="text-sm font-bold w-4 text-center">\${item.qty}</span>
              <button onclick="changeQty('\${item.id}', 1)" class="w-7 h-7 bg-stone-100 rounded-lg font-bold text-stone-700">+</button>
            </div>
          </div>
        \`;
      }).join('');

      subtotalEl.innerText = formatPrice(subtotal);
      totalEl.innerText = formatPrice(subtotal);
    }

    function formatPrice(etb) {
      if (currentCurrency === 'USD') {
        return '$' + (etb / rate).toFixed(2);
      }
      return etb + ' ብር';
    }

    function addToCart(id, name, price) {
      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id, name, price, qty: 1 });
      }
      updateCartUI();
      showToast('✓ ' + name + ' ቅርጫት ውስጥ ተጨምሯል!');
    }

    function changeQty(id, delta) {
      const item = cart.find(i => i.id === id);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
      }
      updateCartUI();
    }

    function toggleCart() {
      const modal = document.getElementById('cart-modal');
      modal.classList.toggle('hidden');
    }

    document.getElementById('cart-btn').addEventListener('click', toggleCart);

    function openCheckout() {
      if (cart.length === 0) {
        showToast('እባክዎ መጀመሪያ እቃ ወደ ቅርጫት ያስገቡ!');
        return;
      }
      toggleCart();
      document.getElementById('checkout-modal').classList.remove('hidden');
    }

    function closeCheckout() {
      document.getElementById('checkout-modal').classList.add('hidden');
    }

    function submitOrder(e) {
      e.preventDefault();
      closeCheckout();
      cart = [];
      updateCartUI();
      showToast('🎉 እናመሰግናለን! ትዕዛዝዎ ተቀብለናል፤ በቅርቡ እንደውላለን።');
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      const msgEl = document.getElementById('toast-msg');
      msgEl.innerText = msg;
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3500);
    }

    function calculateBrew() {
      const ratio = parseInt(document.getElementById('calc-method').value);
      const cups = parseInt(document.getElementById('calc-cups').value) || 1;
      const waterMl = cups * 150;
      const coffeeGrams = Math.round(waterMl / ratio);

      document.getElementById('calc-result').innerText = coffeeGrams + ' ግራም';
      document.getElementById('calc-water').innerText = 'ውሃ: ' + waterMl + ' ml (92°C)';
    }

    function filterBeans(region) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-amber-800', 'text-white'));
      event.target.classList.add('bg-amber-800', 'text-white');

      document.querySelectorAll('.coffee-card').forEach(card => {
        if (region === 'all' || card.getAttribute('data-region') === region) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    document.getElementById('currency-select').addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      document.querySelectorAll('.price-tag').forEach(tag => {
        const etb = parseFloat(tag.getAttribute('data-etb'));
        tag.innerText = formatPrice(etb);
      });
      const heroPrice = document.getElementById('hero-price');
      if (heroPrice) heroPrice.innerText = formatPrice(850);
      updateCartUI();
    });
  </script>
</body>
</html>`
  },
  {
    id: 'ethio-health',
    name: 'Tenachin Healthcare & Clinic Portal',
    nameAm: 'ጤናችን የክሊኒክና ታካሚዎች ዲጂታል ፖርታል',
    tagline: 'Modern medical clinic with online doctor appointment, triage, and records',
    taglineAm: 'የሀኪም ቀጠሮ ማስያዣ፣ የበሽታ ምልክቶች መለያ እና የህክምና ሪከርድ ፖርታል',
    category: 'Health & Clinic',
    categoryAm: 'የጤና እና የህክምና አገልግሎት',
    description: 'Comprehensive patient portal with doctor booking by specialty, triage symptom assistant, and lab test status tracker.',
    descriptionAm: 'የተሟላ የክሊኒክ ፖርታል ከነ ሀኪም ቀጠሮ፣ የበሽታ ምልክት መለያ እና የላብራቶሪ ምርመራ ውጤት ማያ።',
    iconName: 'Activity',
    badge: 'Clinical Portal',
    badgeAm: 'ተመራጭ የጤና ፖርታል',
    features: [
      'Doctor appointment booking by department',
      'Interactive patient triage & symptom checker',
      'Doctor profiles with reviews & working slots',
      'Emergency SOS hotline banner',
      'Lab results and prescription inquiry'
    ],
    featuresAm: [
      'በህክምና ዘርፍ የሀኪም ቀጠሮ መያዣ',
      'የበሽታ ምልክት አጣሪና የመጀመሪያ ምክር',
      'የዶክተሮች ዝርዝርና የልምድ መግለጫ',
      'የድንገተኛ ህክምና ስልክ ጥሪ አዝራር',
      'የላብራቶሪ ውጤት መከታተያ'
    ],
    html: `<!DOCTYPE html>
<html lang="am">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ጤናችን ክሊኒክ | Tenachin Clinic & Telehealth</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>body { font-family: 'Noto Sans Ethiopic', 'Plus Jakarta Sans', sans-serif; }</style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col">
  <!-- Emergency Bar -->
  <div class="bg-rose-700 text-white text-xs py-2 px-4 flex items-center justify-between font-semibold">
    <div class="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
      <span>🚨 ድንገተኛ አደጋ? የ24 ሰዓት የህክምና አምቡላንስ ጥሪ: <b class="underline">907 / 0911 00 22 44</b></span>
      <span class="hidden md:inline bg-white/20 px-2 py-0.5 rounded text-[11px]">ቦሌ ሩዋንዳ አደባባይ፣ አዲስ አበባ</span>
    </div>
  </div>

  <!-- Header -->
  <header class="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 bg-teal-600 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
          ✚
        </div>
        <div>
          <span class="text-xl font-black text-slate-900 tracking-tight">TENACHIN <span class="text-teal-600">CLINIC</span></span>
          <span class="text-xs text-teal-700 block font-bold">ጤናችን ልዩ የህክምና ክሊኒክ</span>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <a href="#booking" class="hover:text-teal-600 transition">ቀጠሮ ያስይዙ</a>
        <a href="#doctors" class="hover:text-teal-600 transition">ሀኪሞቻችን</a>
        <a href="#triage" class="hover:text-teal-600 transition">ምልክት አጣሪ (Triage)</a>
        <a href="#services" class="hover:text-teal-600 transition">አገልግሎቶች</a>
      </nav>

      <a href="#booking" class="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-md shadow-teal-700/20">
        የሀኪም ቀጠሮ ይያዙ +
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white py-16 px-4">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <span class="bg-teal-400/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">ለጤናዎ የተሟላ እንክብካቤ</span>
        <h1 class="text-4xl sm:text-5xl font-black mt-4 leading-tight">
          በዘመናዊ ቴክኖሎጂ የታገዘ <span class="text-teal-400">የታመነ ህክምና</span>
        </h1>
        <p class="text-teal-100/90 text-sm sm:text-base mt-4 leading-relaxed">
          ከከፍተኛ እስፔሻሊስት ዶክተሮች ጋር በቀላሉ ቀጠሮ ይያዙ፣ የላብራቶሪ ውጤትዎን በስልክዎ ይመልከቱ።
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#booking" class="bg-white text-teal-900 font-extrabold px-6 py-3 rounded-xl shadow-lg hover:bg-teal-50 transition text-sm">
            ቀጠሮ መያዣ ቅጽ
          </a>
          <a href="#triage" class="bg-teal-700/60 border border-teal-500/30 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition text-sm">
            የምልክት መለያ (Symptom Check)
          </a>
        </div>
      </div>

      <div class="bg-white text-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100">
        <h3 class="font-extrabold text-lg text-slate-900 mb-4 flex items-center justify-between">
          <span>ፈጣን ቀጠሮ መያዣ</span>
          <span class="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">የዛሬ ክፍት ቀጠሮዎች አሉ</span>
        </h3>
        <form onsubmit="quickBook(event)" class="space-y-3">
          <div>
            <label class="block text-xs font-bold text-slate-600 mb-1">የህክምና ዘርፍ</label>
            <select id="quick-dept" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold">
              <option>ጠቅላላ ሀኪም (General Medicine)</option>
              <option>የህፃናት ህክምና (Pediatrics)</option>
              <option>የልብ ህክምና (Cardiology)</option>
              <option>የቆዳ ህክምና (Dermatology)</option>
              <option>የሴቶችና የወሊድ ህክምና (Gynecology)</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">ቀን</label>
              <input type="date" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-600 mb-1">ሰዓት</label>
              <select class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs">
                <option>ጧት 3:00</option>
                <option>ጧት 4:30</option>
                <option>ከሰአት 8:00</option>
                <option>ከሰአት 10:00</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-600 mb-1">ስልክ ቁጥር</label>
            <input required type="tel" placeholder="0911..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs" />
          </div>
          <button type="submit" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-2.5 rounded-xl text-xs transition">
            ቀጠሮውን አረጋግጥ
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Interactive Symptom Triage -->
  <section id="triage" class="max-w-4xl mx-auto px-4 py-16">
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
      <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div class="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold text-xl">💡</div>
        <div>
          <h2 class="text-xl font-black text-slate-900">የመጀመሪያ ምልክት መለያ ረዳት (Symptom Checker)</h2>
          <p class="text-xs text-slate-500">የሚሰማዎትን ምልክት ይምረጡ፤ ተስማሚውን የህክምና ክፍል እንጠቁማለን</p>
        </div>
      </div>

      <div class="grid sm:grid-cols-3 gap-3 mb-6" id="symptom-chips">
        <button onclick="checkSymptom('fever')" class="p-3 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-500 rounded-xl text-xs font-bold text-slate-700 text-left transition">
          🌡️ ከፍተኛ ትኩሳትና ራስ ምታት
        </button>
        <button onclick="checkSymptom('cough')" class="p-3 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-500 rounded-xl text-xs font-bold text-slate-700 text-left transition">
          🫁 ሳል እና የትንፋሽ መጨናነቅ
        </button>
        <button onclick="checkSymptom('stomach')" class="p-3 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-500 rounded-xl text-xs font-bold text-slate-700 text-left transition">
          🤢 የሆድ ህመም እና ማቅለሽለሽ
        </button>
      </div>

      <div id="triage-result" class="bg-teal-50 border border-teal-200 p-4 rounded-2xl hidden">
        <span class="text-xs font-bold text-teal-800 block mb-1">የተጠቆመ የህክምና ክፍል:</span>
        <p id="triage-text" class="text-sm font-semibold text-slate-800"></p>
        <a href="#booking" class="inline-block mt-3 text-xs bg-teal-700 text-white font-bold px-4 py-2 rounded-lg">ቀጠሮ ይያዙ</a>
      </div>
    </div>
  </section>

  <!-- Doctors Directory -->
  <section id="doctors" class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-2xl font-black text-slate-900 mb-8">ስፔሻሊስት ሀኪሞቻችን</h2>
    <div class="grid sm:grid-cols-3 gap-6">
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-3xl mb-4">👨‍⚕️</div>
          <h3 class="font-bold text-base text-slate-900">ዶ/ር ቴዎድሮስ ካሳሁን</h3>
          <p class="text-xs text-teal-700 font-semibold mb-2">የውስጥ ደዌ እስፔሻሊስት (Internal Medicine)</p>
          <p class="text-xs text-slate-500">ከ14 ዓመታት በላይ የህክምና ልምድ ያካበቱ።</p>
        </div>
        <button onclick="selectDoctor('ዶ/ር ቴዎድሮስ')" class="mt-4 w-full bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-800 font-bold text-xs py-2 rounded-xl transition">
          ቀጠሮ ምረጥ
        </button>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mb-4">👩‍⚕️</div>
          <h3 class="font-bold text-base text-slate-900">ዶ/ር ሰላማዊት ታደሰ</h3>
          <p class="text-xs text-rose-700 font-semibold mb-2">የህፃናት ህክምና እስፔሻሊስት (Pediatrician)</p>
          <p class="text-xs text-slate-500">ለህፃናት ሁለንተናዊ ጤናና ክትባት ልዩ ትኩረት።</p>
        </div>
        <button onclick="selectDoctor('ዶ/ር ሰላማዊት')" class="mt-4 w-full bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-800 font-bold text-xs py-2 rounded-xl transition">
          ቀጠሮ ምረጥ
        </button>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4">👨‍⚕️</div>
          <h3 class="font-bold text-base text-slate-900">ዶ/ር ዳዊት መንግስቱ</h3>
          <p class="text-xs text-blue-700 font-semibold mb-2">የልብ ህክምና እስፔሻሊስት (Cardiologist)</p>
          <p class="text-xs text-slate-500">የደም ግፊትና የልብ ጤና ምርመራ ኤክስፐርት።</p>
        </div>
        <button onclick="selectDoctor('ዶ/ር ዳዊት')" class="mt-4 w-full bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-800 font-bold text-xs py-2 rounded-xl transition">
          ቀጠሮ ምረጥ
        </button>
      </div>
    </div>
  </section>

  <!-- Notification Toast -->
  <div id="health-toast" class="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl transition transform translate-y-20 opacity-0 z-50 text-xs font-bold">
    ቀጠሮዎ ተመዝግቧል!
  </div>

  <script>
    function quickBook(e) {
      e.preventDefault();
      const toast = document.getElementById('health-toast');
      toast.innerText = '✓ የቀጠሮ ጥያቄዎ በተሳካ ሁኔታ ተመዝግቧል! በSMS ማረጋገጫ ይላክልዎታል።';
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 4000);
      e.target.reset();
    }

    function checkSymptom(type) {
      const res = document.getElementById('triage-result');
      const text = document.getElementById('triage-text');
      res.classList.remove('hidden');

      if (type === 'fever') {
        text.innerText = 'ለከፍተኛ ትኩሳትና ራስ ምታት ወደ ጠቅላላ ህክምና (General Outpatient) ክፍል ወይም አስቸኳይ ህክምና ክፍል ቀጠሮ ይያዙ።';
      } else if (type === 'cough') {
        text.innerText = 'ለሳልና ትንፋሽ መቆራረጥ ወደ ደረትና ሳንባ እስፔሻሊስት (Pulmonology) ይመከራል።';
      } else if (type === 'stomach') {
        text.innerText = 'ለሆድ ቁርጠትና ህመም የውስጥ ደዌ (Internal Medicine) ወይም የጨጓራ ሀኪም ይመከራል።';
      }
    }

    function selectDoctor(name) {
      const toast = document.getElementById('health-toast');
      toast.innerText = '✓ ' + name + ' ተመርጠዋል! ከላይ ያለውን የቀንና ሰዓት ቅጽ ይሙሉ';
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3500);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  </script>
</body>
</html>`
  },
  {
    id: 'nexus-erp',
    name: 'Nexus Enterprise ERP & Analytics SaaS',
    nameAm: 'ኔክሰስ የቢዝነስ አስተዳደርና አናሊቲክስ ዳሽቦርድ',
    tagline: 'Multi-module SaaS dashboard with KPI metrics, transaction table, and chart',
    taglineAm: 'የተቋም አስተዳደር፣ የገንዘብ ዝውውር መቆጣጠሪያና የቀጥታ ሪፖርት ማዕከል',
    category: 'SaaS & Dashboard',
    categoryAm: 'የንግድና ተቋም አመራር ሲስተም',
    description: 'Enterprise resource dashboard featuring live revenue KPIs, search & filterable transactions table, modal to add records, and system settings.',
    descriptionAm: 'የሽያጭና የወጪ መቆጣጠሪያ፣ የሰራተኞችና የደንበኞች ዝርዝር፣ የገበያ መረጃ ማጠቃለያ ቻርት እና ሪፖርቶች።',
    iconName: 'LayoutDashboard',
    badge: 'Enterprise Suite',
    badgeAm: 'ተመራጭ የቢዝነስ ሲስተም',
    features: [
      'Interactive KPI cards with percentage trends',
      'Dynamic transaction log with search & category filters',
      'Interactive modal to add new sales/expense record',
      'Visual SVG revenue & performance chart',
      'Role-based permissions & audit log simulation'
    ],
    featuresAm: [
      'የቢዝነስ እድገት መለኪያ ቁልፍ ካርዶች',
      'የሽያጭና የክፍያ ዝርዝር መዝገብ ከነ ፈጣን ፍለጋ',
      'አዲስ የሽያጭ መረጃ መመዝገቢያ ፎርም',
      'የወርሃዊ ትርፍና ገቢ ማጠቃለያ ግራፍ',
      'የሰራተኞች የስራ ድርሻ እና ፈቃድ መቆጣጠሪያ'
    ],
    html: `<!DOCTYPE html>
<html lang="am">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nexus ERP Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+Ethiopic:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>body { font-family: 'Plus Jakarta Sans', 'Noto Sans Ethiopic', sans-serif; }</style>
</head>
<body class="bg-slate-900 text-slate-100 antialiased min-h-screen flex flex-col">
  <!-- Top Navigation -->
  <header class="bg-slate-950 border-b border-slate-800 sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <div class="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white text-lg">
        N
      </div>
      <div>
        <span class="font-extrabold text-base tracking-wide text-white">NEXUS <span class="text-indigo-400">ERP</span></span>
        <span class="text-[10px] text-slate-400 block -mt-1 font-medium">የተቋም አስተዳደርና አናሊቲክስ</span>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <button onclick="openNewRecordModal()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-lg shadow-indigo-600/30">
        <span>+ አዲስ ግብይት መዝግብ</span>
      </button>
      <div class="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-indigo-300">
        ZA
      </div>
    </div>
  </header>

  <div class="flex flex-1">
    <!-- Sidebar -->
    <aside class="w-60 bg-slate-950/70 border-r border-slate-800/80 p-4 hidden md:flex flex-col justify-between">
      <div class="space-y-1">
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 font-bold text-xs">
          📊 አጠቃላይ እይታ (Dashboard)
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white font-medium text-xs transition">
          💳 የገንዘብ ዝውውር (Finance)
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white font-medium text-xs transition">
          📦 እቃዎችና ክምችት (Inventory)
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-900 hover:text-white font-medium text-xs transition">
          👥 ደንበኞችና ሽያጭ (CRM)
        </a>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        <span>ደመና አገልጋይ:</span> <b class="text-emerald-400 block">የተገናኘ (Active 99.98%)</b>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 space-y-6 max-w-7xl">
      <!-- KPI Stats -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
          <span class="text-xs text-slate-400 font-medium">ጠቅላላ ወርሃዊ ገቢ</span>
          <div class="text-2xl font-black text-white mt-1" id="kpi-rev">1,480,250 ብር</div>
          <span class="text-[11px] text-emerald-400 font-bold mt-2 inline-flex items-center gap-1">↑ +18.4% ካለፈው ወር</span>
        </div>

        <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
          <span class="text-xs text-slate-400 font-medium">የተጠናቀቁ ትዕዛዞች</span>
          <div class="text-2xl font-black text-white mt-1">3,420</div>
          <span class="text-[11px] text-emerald-400 font-bold mt-2 inline-flex items-center gap-1">↑ +12.1% ጭማሪ</span>
        </div>

        <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
          <span class="text-xs text-slate-400 font-medium">አማካይ የትርፍ ህዳግ</span>
          <div class="text-2xl font-black text-white mt-1">34.8%</div>
          <span class="text-[11px] text-indigo-400 font-bold mt-2 inline-flex items-center gap-1">የተረጋጋ ደረጃ</span>
        </div>

        <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
          <span class="text-xs text-slate-400 font-medium">አክቲቭ ደንበኞች</span>
          <div class="text-2xl font-black text-white mt-1">1,894</div>
          <span class="text-[11px] text-emerald-400 font-bold mt-2 inline-flex items-center gap-1">↑ +95 አዳዲስ</span>
        </div>
      </div>

      <!-- Chart Simulation Section -->
      <div class="bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="font-bold text-sm text-white">የገቢና የሽያጭ አዝማሚያ (Annual Revenue Trajectory)</h3>
            <span class="text-xs text-slate-400">የ2026 በጀት አመት ወርሃዊ አፈፃፀም</span>
          </div>
          <div class="flex gap-2">
            <span class="text-[11px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-lg font-bold">ገቢ</span>
            <span class="text-[11px] bg-slate-800 text-slate-400 px-2.5 py-1 rounded-lg">ዒላማ</span>
          </div>
        </div>

        <!-- SVG Interactive Bar Graph -->
        <div class="h-44 w-full flex items-end justify-between gap-3 pt-6 px-2">
          <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <div class="w-full bg-indigo-600/40 group-hover:bg-indigo-500 rounded-t-lg transition-all" style="height: 45%;"></div>
            <span class="text-[10px] text-slate-400">መስ</span>
          </div>
          <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <div class="w-full bg-indigo-600/40 group-hover:bg-indigo-500 rounded-t-lg transition-all" style="height: 60%;"></div>
            <span class="text-[10px] text-slate-400">ጥቅ</span>
          </div>
          <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <div class="w-full bg-indigo-600/40 group-hover:bg-indigo-500 rounded-t-lg transition-all" style="height: 55%;"></div>
            <span class="text-[10px] text-slate-400">ህዳ</span>
          </div>
          <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <div class="w-full bg-indigo-600/40 group-hover:bg-indigo-500 rounded-t-lg transition-all" style="height: 75%;"></div>
            <span class="text-[10px] text-slate-400">ታህ</span>
          </div>
          <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <div class="w-full bg-indigo-600/40 group-hover:bg-indigo-500 rounded-t-lg transition-all" style="height: 70%;"></div>
            <span class="text-[10px] text-slate-400">ጥር</span>
          </div>
          <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <div class="w-full bg-indigo-500 group-hover:bg-indigo-400 rounded-t-lg shadow-lg shadow-indigo-500/20 transition-all" style="height: 90%;"></div>
            <span class="text-[10px] text-indigo-300 font-bold">የካ</span>
          </div>
        </div>
      </div>

      <!-- Transactions Table -->
      <div class="bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden">
        <div class="p-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 class="font-bold text-sm text-white">የቅርብ ግብይቶች መዝገብ</h3>
          <div class="flex items-center gap-2">
            <input id="tx-search" oninput="filterTransactions()" placeholder="በደንበኛ ስም ፈልግ..." class="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-900/60 text-slate-400 uppercase font-bold text-[10px] border-b border-slate-800">
              <tr>
                <th class="px-5 py-3">መለያ</th>
                <th class="px-5 py-3">ደንበኛ</th>
                <th class="px-5 py-3">አይነት</th>
                <th class="px-5 py-3">መጠን</th>
                <th class="px-5 py-3">ሁኔታ</th>
                <th class="px-5 py-3">ቀን</th>
              </tr>
            </thead>
            <tbody id="tx-body" class="divide-y divide-slate-800/60 font-medium">
              <tr>
                <td class="px-5 py-3 text-slate-400">#TX-9481</td>
                <td class="px-5 py-3 text-white font-bold">አልፋ ኢምፖርት ኃላ/የተ/የግ/ማ</td>
                <td class="px-5 py-3 text-slate-300">ጅምላ ሽያጭ</td>
                <td class="px-5 py-3 text-emerald-400 font-extrabold">+145,000 ብር</td>
                <td class="px-5 py-3"><span class="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold">የተከፈለ</span></td>
                <td class="px-5 py-3 text-slate-400">ዛሬ 4:12</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-slate-400">#TX-9480</td>
                <td class="px-5 py-3 text-white font-bold">ዳንኤል ወርቁ</td>
                <td class="px-5 py-3 text-slate-300">የአገልግሎት ክፍያ</td>
                <td class="px-5 py-3 text-emerald-400 font-extrabold">+24,500 ብር</td>
                <td class="px-5 py-3"><span class="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold">የተከፈለ</span></td>
                <td class="px-5 py-3 text-slate-400">ትናንት</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-slate-400">#TX-9479</td>
                <td class="px-5 py-3 text-white font-bold">አዲስ ሎጅስቲክስ</td>
                <td class="px-5 py-3 text-slate-300">የስራ ማስኬጃ ወጪ</td>
                <td class="px-5 py-3 text-rose-400 font-extrabold">-38,000 ብር</td>
                <td class="px-5 py-3"><span class="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-bold">በሂደት ላይ</span></td>
                <td class="px-5 py-3 text-slate-400">የካቲት 15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>

  <!-- New Record Modal -->
  <div id="new-record-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl">
      <div class="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
        <h3 class="font-bold text-white text-base">አዲስ ግብይት መዝግብ</h3>
        <button onclick="closeNewRecordModal()" class="text-slate-400 hover:text-white">✕</button>
      </div>

      <form onsubmit="addTransaction(event)" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">የደንበኛ / ድርጅት ስም</label>
          <input id="rec-client" required placeholder="የደንበኛ ስም..." class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">የግብይት አይነት</label>
            <select id="rec-type" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white">
              <option>ሽያጭ (Sale)</option>
              <option>የአገልግሎት ክፍያ</option>
              <option>ወጪ (Expense)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1">መጠን (ብር)</label>
            <input id="rec-amount" required type="number" placeholder="5000" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white" />
          </div>
        </div>
        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs mt-3 transition">
          መዝግብ
        </button>
      </form>
    </div>
  </div>

  <script>
    function openNewRecordModal() {
      document.getElementById('new-record-modal').classList.remove('hidden');
    }
    function closeNewRecordModal() {
      document.getElementById('new-record-modal').classList.add('hidden');
    }
    function addTransaction(e) {
      e.preventDefault();
      const client = document.getElementById('rec-client').value;
      const type = document.getElementById('rec-type').value;
      const amount = parseFloat(document.getElementById('rec-amount').value);
      const isExpense = type.includes('ወጪ');

      const tr = document.createElement('tr');
      tr.innerHTML = \`
        <td class="px-5 py-3 text-slate-400">#TX-\${Math.floor(Math.random()*8000+1000)}</td>
        <td class="px-5 py-3 text-white font-bold">\${client}</td>
        <td class="px-5 py-3 text-slate-300">\${type}</td>
        <td class="px-5 py-3 \${isExpense ? 'text-rose-400' : 'text-emerald-400'} font-extrabold">\${isExpense ? '-' : '+'}\${amount.toLocaleString()} ብር</td>
        <td class="px-5 py-3"><span class="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold">የተመዘገበ</span></td>
        <td class="px-5 py-3 text-slate-400">አሁን</td>
      \`;

      const tbody = document.getElementById('tx-body');
      tbody.insertBefore(tr, tbody.firstChild);
      closeNewRecordModal();
      e.target.reset();
    }

    function filterTransactions() {
      const q = document.getElementById('tx-search').value.toLowerCase();
      document.querySelectorAll('#tx-body tr').forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    }
  </script>
</body>
</html>`
  },
  {
    id: 'habesha-taste',
    name: 'Habesha Taste Restaurant & Fast Delivery',
    nameAm: 'የሀበሻ ጣዕም ባህላዊና ዘመናዊ ሬስቶራንት',
    tagline: 'Authentic dining with digital food menu, table reservation & takeout cart',
    taglineAm: 'የምግብ ቤት ዲጂታል ሜኑ፣ የጠረጴዛ ማስያዣና የፈጣን ዴሊቨሪ ማዘዣ',
    category: 'Restaurant & Food',
    categoryAm: 'የምግብ ቤትና ፈጣን ዴሊቨሪ',
    description: 'Vibrant dining experience with fasting (የጾም) and non-fasting tabs, dish customization, table booking, and order tracker.',
    descriptionAm: 'የጾምና የፍስክ ምግቦች ዝርዝር፣ የጠረጴዛ ማስያዣ እና የቤት ለቤት ማድረሻ ስርአት።',
    iconName: 'Utensils',
    badge: 'Popular Restaurant',
    badgeAm: 'ተመራጭ ምግብ ቤት',
    features: [
      'Categorized Ethiopian dish menu with fasting/meat toggle',
      'Table reservation booking with time & guest count',
      'Food cart with delivery address & live total',
      'Chef specials and beverage pairing suggestions'
    ],
    featuresAm: [
      'የጾምና የፍስክ ምግቦች መምረጫ',
      'የጠረጴዛ ማስያዣ ቅጽ',
      'የምግብ ቅርጫትና አድራሻ ማስገቢያ',
      'የቀኑ ልዩ ምግቦችና መጠጦች'
    ],
    html: `<!DOCTYPE html>
<html lang="am">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>የሀበሻ ጣዕም | Habesha Taste Restaurant</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>body { font-family: 'Noto Sans Ethiopic', 'Plus Jakarta Sans', sans-serif; }</style>
</head>
<body class="bg-stone-50 text-stone-900 min-h-screen flex flex-col">
  <header class="bg-white border-b border-stone-200 sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 bg-amber-600 rounded-xl text-white flex items-center justify-center font-bold text-xl">🍲</div>
      <h1 class="text-xl font-black">የሀበሻ ጣዕም <span class="text-amber-700 text-sm block font-bold">ምርጥ የባህልና ዘመናዊ ምግቦች</span></h1>
    </div>
    <div class="flex gap-3">
      <button onclick="toggleResModal()" class="bg-stone-900 text-white text-xs font-bold px-4 py-2 rounded-xl">ጠረጴዛ ያስይዙ</button>
      <button onclick="toggleFoodCart()" class="bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-xl">ምግብ ማዘዣ (<span id="food-count">0</span>)</button>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-8 flex-1">
    <div class="flex gap-2 mb-8 overflow-x-auto pb-2">
      <button onclick="filterFood('all')" class="bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-xl">ሁሉም (All)</button>
      <button onclick="filterFood('meat')" class="bg-white border border-stone-200 text-xs font-bold px-4 py-2 rounded-xl">የፍስክ ምግቦች (Meat Dishes)</button>
      <button onclick="filterFood('fasting')" class="bg-white border border-stone-200 text-xs font-bold px-4 py-2 rounded-xl">የጾም በያይነቱ (Fasting)</button>
      <button onclick="filterFood('drinks')" class="bg-white border border-stone-200 text-xs font-bold px-4 py-2 rounded-xl">መጠጦች (Beverages)</button>
    </div>

    <div class="grid sm:grid-cols-3 gap-6">
      <div class="food-item bg-white p-5 rounded-2xl border border-stone-200 shadow-sm" data-type="meat">
        <div class="text-3xl mb-3">🥩</div>
        <h3 class="font-bold text-base">ልዩ የበግ ጥብስ (Special Tibs)</h3>
        <p class="text-xs text-stone-500 mt-1 mb-4">በቅቤና ሮዝመሪ የታሸ የበግ ስጋ ከነ አዋዜና ሰላጣ</p>
        <div class="flex justify-between items-center">
          <span class="font-extrabold text-amber-800">550 ብር</span>
          <button onclick="addFood('ልዩ የበግ ጥብስ', 550)" class="bg-stone-900 hover:bg-amber-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg">+ አዝዝ</button>
        </div>
      </div>

      <div class="food-item bg-white p-5 rounded-2xl border border-stone-200 shadow-sm" data-type="fasting">
        <div class="text-3xl mb-3">🥗</div>
        <h3 class="font-bold text-base">የጾም በያይነቱ (Special Beyaynetu)</h3>
        <p class="text-xs text-stone-500 mt-1 mb-4">ሽሮ፣ ምስር፣ አተር ክክ፣ ጎመን፣ ስልጆ፣ ድንችና አልጫ</p>
        <div class="flex justify-between items-center">
          <span class="font-extrabold text-amber-800">380 ብር</span>
          <button onclick="addFood('የጾም በያይነቱ', 380)" class="bg-stone-900 hover:bg-amber-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg">+ አዝዝ</button>
        </div>
      </div>

      <div class="food-item bg-white p-5 rounded-2xl border border-stone-200 shadow-sm" data-type="meat">
        <div class="text-3xl mb-3">🍗</div>
        <h3 class="font-bold text-base">የሀገር ዶሮ ወጥ (Doro Wot)</h3>
        <p class="text-xs text-stone-500 mt-1 mb-4">በባህላዊ መንገድ የተዘጋጀ የዶሮ ስጋ ከእንቁላል ጋር</p>
        <div class="flex justify-between items-center">
          <span class="font-extrabold text-amber-800">650 ብር</span>
          <button onclick="addFood('የሀገር ዶሮ ወጥ', 650)" class="bg-stone-900 hover:bg-amber-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg">+ አዝዝ</button>
        </div>
      </div>
    </div>
  </main>

  <script>
    let foodCart = [];
    function addFood(name, price) {
      foodCart.push({ name, price });
      document.getElementById('food-count').innerText = foodCart.length;
      alert('✓ ' + name + ' ወደ ማዘዣ ቅርጫት ተጨምሯል!');
    }
    function filterFood(type) {
      document.querySelectorAll('.food-item').forEach(el => {
        el.style.display = (type === 'all' || el.getAttribute('data-type') === type) ? 'block' : 'none';
      });
    }
    function toggleResModal() {
      const name = prompt('እባክዎ ስምዎንና የሚፈልጉትን ሰዓት ያስገቡ:');
      if (name) alert('እናመሰግናለን ' + name + '! ጠረጴዛዎ ተይዟል።');
    }
    function toggleFoodCart() {
      if (foodCart.length === 0) return alert('ቅርጫትዎ ውስጥ ምንም ምግብ የለም!');
      const total = foodCart.reduce((s, i) => s + i.price, 0);
      alert('ጠቅላላ ማዘዣ: ' + foodCart.length + ' ምግቦች \\nድምር ክፍያ: ' + total + ' ብር');
    }
  </script>
</body>
</html>`
  },
  {
    id: 'betoch-addis',
    name: 'Betoch Addis Real Estate & Rental Hub',
    nameAm: 'ቤቶች አዲስ የቤት ኪራይና ሽያጭ መድረክ',
    tagline: 'Modern property finder with price filters, neighborhood tags, and booking',
    taglineAm: 'የአፓርትመንት፣ ቪላና ቢሮ መከራያና መግዣ ከነ ዋጋና አካባቢ ማጣሪያ',
    category: 'Real Estate',
    categoryAm: 'የቤት ኪራይና ሽያጭ',
    description: 'Real estate portal for Addis Ababa properties with bedroom selector, price range in ETB, virtual tours, and agent inquiries.',
    descriptionAm: 'የአዲስ አበባ ቤቶች መፈለጊያ ከነ ፎቶዎች፣ የቦሌ/ሲኤምሲ/ሳርቤት አካባቢ ማጣሪያ እና ከደላላ ጋር መገናኛ።',
    iconName: 'Home',
    badge: 'Property Hub',
    badgeAm: 'ተመራጭ የቤት መድረክ',
    features: [
      'Filter by location (Bole, Kazanchis, CMC, Sarbet)',
      'Bedroom and price range slider in ETB',
      'Mortgage and monthly rental estimator',
      'Schedule a property tour modal'
    ],
    featuresAm: [
      'የአካባቢ መምረጫ (ቦሌ፣ ካዛንቺስ፣ ሲኤምሲ፣ ሳርቤት)',
      'የመኝታ ክፍል ብዛትና የዋጋ ማጣሪያ',
      'የወርሃዊ ኪራይና የባንክ ብድር ማስያዣ',
      'ቤቱን በአካል ለመጎብኘት ቀጠሮ መያዣ'
    ],
    html: `<!DOCTYPE html>
<html lang="am">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ቤቶች አዲስ | Betoch Addis Real Estate</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;600;700;800&display=swap" rel="stylesheet" />
  <style>body { font-family: 'Noto Sans Ethiopic', sans-serif; }</style>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
  <header class="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
    <div class="flex items-center gap-2">
      <span class="text-2xl">🏢</span>
      <h1 class="text-xl font-extrabold text-blue-900">ቤቶች አዲስ <span class="text-slate-500 text-xs font-normal">ሪል እስቴትና ኪራይ</span></h1>
    </div>
    <button onclick="scheduleVisit('አጠቃላይ')" class="bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-xl">ቤት አስጎብኘን +</button>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-8 flex-1">
    <div class="bg-blue-900 text-white p-8 rounded-3xl mb-8">
      <h2 class="text-3xl font-black mb-2">የህልምዎን ቤት በአዲስ አበባ ያግኙ</h2>
      <p class="text-blue-200 text-sm mb-6">ለኪራይ እና ለሽያጭ የተዘጋጁ ጥራት ያላቸው አፓርትመንቶች</p>
      
      <div class="grid sm:grid-cols-3 gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur">
        <select id="loc-filter" onchange="filterProp()" class="bg-white text-slate-800 text-xs font-bold rounded-xl px-3 py-2">
          <option value="all">ሁሉም አካባቢ (All Locations)</option>
          <option value="bole">ቦሌ (Bole)</option>
          <option value="cmc">ሲኤምሲ (CMC)</option>
          <option value="kazanchis">ካዛንቺስ (Kazanchis)</option>
        </select>
        <select class="bg-white text-slate-800 text-xs font-bold rounded-xl px-3 py-2">
          <option>2 መኝታ ቤት</option>
          <option>3 መኝታ ቤት</option>
          <option>4+ መኝታ ቤት / ቪላ</option>
        </select>
        <button onclick="filterProp()" class="bg-amber-500 text-slate-900 font-extrabold text-xs rounded-xl py-2">ቤቶችን አሳይ</button>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="prop-card bg-white p-5 rounded-2xl border border-slate-200 shadow-sm" data-loc="bole">
        <span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded">ቦሌ አትላስ</span>
        <h3 class="font-bold text-base mt-2">ዘመናዊ 3 መኝታ አፓርትመንት</h3>
        <p class="text-xs text-slate-500 mt-1">ሊፍት፣ ጀነሬተር፣ 24 ሰአት ጥበቃ እና የመኪና ማቆሚያ</p>
        <div class="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
          <span class="font-extrabold text-blue-900 text-lg">75,000 ብር /ወር</span>
          <button onclick="scheduleVisit('ቦሌ አትላስ 3 መኝታ')" class="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg font-bold">ጎብኝ</button>
        </div>
      </div>

      <div class="prop-card bg-white p-5 rounded-2xl border border-slate-200 shadow-sm" data-loc="cmc">
        <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">ሲኤምሲ ሚካኤል</span>
        <h3 class="font-bold text-base mt-2">ምቹ 2 መኝታ ኮንዶሚኒየም</h3>
        <p class="text-xs text-slate-500 mt-1">በሰላማዊ መንደር ውስጥ የሚገኝ፣ ንፁህ ውሀ ያለው</p>
        <div class="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
          <span class="font-extrabold text-blue-900 text-lg">35,000 ብር /ወር</span>
          <button onclick="scheduleVisit('ሲኤምሲ 2 መኝታ')" class="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg font-bold">ጎብኝ</button>
        </div>
      </div>

      <div class="prop-card bg-white p-5 rounded-2xl border border-slate-200 shadow-sm" data-loc="kazanchis">
        <span class="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded">ካዛንቺስ ኢሲኤ</span>
        <h3 class="font-bold text-base mt-2">ለንግድ ወይም ለቢሮ ምቹ ፎቅ</h3>
        <p class="text-xs text-slate-500 mt-1">ለዋና መንገድ ቅርብ የሆነ 120 ካሬ ሜትር ቢሮ</p>
        <div class="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
          <span class="font-extrabold text-blue-900 text-lg">110,000 ብር /ወር</span>
          <button onclick="scheduleVisit('ካዛንቺስ ቢሮ')" class="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg font-bold">ጎብኝ</button>
        </div>
      </div>
    </div>
  </main>

  <script>
    function filterProp() {
      const loc = document.getElementById('loc-filter').value;
      document.querySelectorAll('.prop-card').forEach(c => {
        c.style.display = (loc === 'all' || c.getAttribute('data-loc') === loc) ? 'block' : 'none';
      });
    }
    function scheduleVisit(name) {
      const phone = prompt(name + ' ለመጎብኘት ስልክ ቁጥርዎን ያስገቡ:');
      if (phone) alert('እናመሰግናለን! በ ' + phone + ' ደውለን የጉብኝት ሰዓቱን እናሳውቆታለን።');
    }
  </script>
</body>
</html>`
  },
  {
    id: 'apex-saas',
    name: 'Apex Next-Gen AI Cloud Platform',
    nameAm: 'አፔክስ ዘመናዊ የቴክኖሎጂ ሶፍትዌር ማስተዋወቂያ',
    tagline: 'High-converting modern landing page with pricing calculator and interactive FAQ',
    taglineAm: 'ዘመናዊ የሶፍትዌር ማስተዋወቂያ ከነ የዋጋ ዝርዝር፣ የቅናሽ ማስያዣና ጥያቄና መልስ',
    category: 'Portfolio & Agency',
    categoryAm: 'የቴክኖሎጂ ሶፍትዌር ማስተዋወቂያ',
    description: 'Sleek dark-mode landing page for next-generation tech startups with pricing switch, demo sign-up, and animated benefits.',
    descriptionAm: 'ለቴክኖሎጂ ድርጅቶችና ስታርትአፖች የተዘጋጀ ማራኪ ማስተዋወቂያ ከነ ዋጋ ሰንጠረዥና የሙከራ መመዝገቢያ።',
    iconName: 'Sparkles',
    badge: 'Modern Landing',
    badgeAm: 'ዘመናዊ ቴክኖሎጂ',
    features: [
      'Interactive pricing toggle (Monthly vs Annual 20% discount)',
      'Feature comparison grid',
      'Interactive FAQ accordion',
      'Email capture modal for instant product demo access'
    ],
    featuresAm: [
      'የወርሃዊና የአመታዊ 20% ቅናሽ መለወጫ',
      'የአገልግሎት ዝርዝር ንፅፅር',
      'ተደጋግመው የሚጠየቁ ጥያቄዎችና መልሶች',
      'ነጻ የሙከራ መለያ መክፈቻ ቅጽ'
    ],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apex Cloud | The Future of AI Infrastructure</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; }</style>
</head>
<body class="bg-black text-white min-h-screen flex flex-col antialiased">
  <header class="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur z-30">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-lg"></div>
      <span class="font-extrabold text-lg tracking-wider">APEX.AI</span>
    </div>
    <div class="flex items-center gap-4">
      <a href="#pricing" class="text-xs font-semibold text-stone-300 hover:text-white">Pricing</a>
      <button onclick="requestDemo()" class="bg-white text-black font-bold text-xs px-4 py-2 rounded-xl hover:bg-stone-200 transition">Get Started</button>
    </div>
  </header>

  <main class="flex-1 max-w-5xl mx-auto px-4 py-20 text-center">
    <div class="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs px-4 py-1.5 rounded-full mb-6 font-semibold">
      🚀 Version 3.0 Released • Ultra Low Latency
    </div>
    <h1 class="text-5xl sm:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-stone-200 to-stone-500 bg-clip-text text-transparent">
      Scale Your Applications <br />At Light Speed
    </h1>
    <p class="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">
      Build, deploy, and scale intelligent distributed systems across 300+ edge locations with zero devops overhead.
    </p>

    <!-- Pricing Section -->
    <div id="pricing" class="mt-16 text-left">
      <div class="flex justify-center items-center gap-3 mb-8">
        <span class="text-xs font-bold text-stone-400">Monthly</span>
        <button id="billing-toggle" onclick="toggleBilling()" class="w-12 h-6 bg-indigo-600 rounded-full p-1 relative transition">
          <div id="toggle-knob" class="w-4 h-4 bg-white rounded-full transition-transform"></div>
        </button>
        <span class="text-xs font-bold text-indigo-400">Annual (Save 20%)</span>
      </div>

      <div class="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div class="bg-stone-900/60 border border-white/10 p-6 rounded-3xl">
          <h3 class="font-bold text-lg text-white">Starter Cloud</h3>
          <p class="text-xs text-stone-400 mt-1 mb-4">Ideal for indie developers & small teams</p>
          <div class="text-3xl font-black text-white mb-6" id="starter-price">$29 <span class="text-xs font-normal text-stone-400">/mo</span></div>
          <button onclick="requestDemo()" class="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl text-xs">Choose Starter</button>
        </div>

        <div class="bg-gradient-to-b from-indigo-950 to-stone-900 border border-indigo-500/40 p-6 rounded-3xl relative">
          <span class="absolute top-4 right-4 bg-indigo-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">POPULAR</span>
          <h3 class="font-bold text-lg text-white">Enterprise Scale</h3>
          <p class="text-xs text-stone-400 mt-1 mb-4">Unlimited capacity, custom SSL, 99.999% SLA</p>
          <div class="text-3xl font-black text-indigo-300 mb-6" id="pro-price">$99 <span class="text-xs font-normal text-stone-400">/mo</span></div>
          <button onclick="requestDemo()" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs">Start Enterprise Trial</button>
        </div>
      </div>
    </div>
  </main>

  <script>
    let isAnnual = false;
    function toggleBilling() {
      isAnnual = !isAnnual;
      const knob = document.getElementById('toggle-knob');
      knob.style.transform = isAnnual ? 'translateX(24px)' : 'translateX(0)';
      document.getElementById('starter-price').innerHTML = isAnnual ? '$23 <span class="text-xs font-normal text-stone-400">/mo (billed annually)</span>' : '$29 <span class="text-xs font-normal text-stone-400">/mo</span>';
      document.getElementById('pro-price').innerHTML = isAnnual ? '$79 <span class="text-xs font-normal text-stone-400">/mo (billed annually)</span>' : '$99 <span class="text-xs font-normal text-stone-400">/mo</span>';
    }
    function requestDemo() {
      const email = prompt('Enter your business email for instant sandbox access:');
      if (email) alert('Success! Check ' + email + ' for your Apex Cloud login credentials.');
    }
  </script>
</body>
</html>`
  }
];
