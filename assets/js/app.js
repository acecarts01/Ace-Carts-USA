/* ═══════════════════════════════════════════════════════
   ACE ULTRA PREMIUM CARTS — app.js v2.0
   7 categories · 130+ products · real product images
   ═══════════════════════════════════════════════════════ */

const PRODUCTS = [
  /* ── 1. SIGNATURE COLLECTION ── */
  {id:101,img:'ace-ultra-premium-gold-prestige-edition-2g-disposable.webp',cat:'Signature Collection',tag:'signature',name:'Gold Prestige Edition 2G',variant:'Single Unit — Signature Collection',price:25.00,badge:'hot',desc:'The Gold Prestige Edition 2G — flagship of the Ace Ultra Signature Collection. Premium build, elevated finish, exceptional vapor. Ships from LA. Adults 21+.',tags:['gold prestige','signature','2g']},
  {id:102,img:'ace-ultra-premium-signature-gold-retailer-bulk-deals.webp',cat:'Signature Collection',tag:'signature',name:'Signature Gold — Retailer Bulk Deals',variant:'Retailer Bulk Deals',price:200.00,badge:'ws',desc:'Signature Gold retailer bulk deals for licensed dispensaries and resellers.',tags:['signature gold','retailer','bulk']},
  {id:103,img:'ace-ultra-signature-gold-100pcs.webp',cat:'Signature Collection',tag:'signature',name:'Signature Gold — 100 PCS Master Box',variant:'2G · 100 Units Variety',price:1500.00,badge:'ws',desc:'100-unit Signature Gold Collection variety master box. All mixed Signature flavors.',tags:['signature gold','100pcs','master box']},
  {id:104,img:'ace-ultra-signature-gold-10pcs.webp',cat:'Signature Collection',tag:'signature',name:'Signature Gold — 10 PCS Mixed',variant:'2G · 10 Units Mixed Flavors',price:200.00,badge:'ws',desc:'10-unit Signature Gold Collection 2G mixed flavors wholesale box. All Signature flavors — Banana Taffy, Berry Bash, Berry Ice, Bubblegum Burst, Fruit Loops, Grape Stars, Mango Bliss, Peach Paradise. Min order $100 USD.',tags:['signature gold','10pcs','mixed']},
  {id:105,img:'ace-ultra-signature-gold-25pcs.webp',cat:'Signature Collection',tag:'signature',name:'Signature Gold — 25 PCS Master Box',variant:'2G · 25 Units Variety',price:400.00,badge:'ws',desc:'25-unit Signature Gold Collection 2G variety master box. All mixed Signature flavors at wholesale pricing. Perfect for mid-volume dispensary orders. Ships from Los Angeles, CA.',tags:['signature gold','25pcs','master box']},
  {id:106,img:'ace-ultra-signature-gold-50pcs.webp',cat:'Signature Collection',tag:'signature',name:'Signature Gold — 50 PCS Master Box',variant:'2G · 50 Units Variety',price:750.00,badge:'ws',desc:'50-unit Signature Gold Collection variety master box.',tags:['signature gold','50pcs','master box']},
  {id:107,img:'banana-taffy-hybrid.webp',cat:'Signature Collection',tag:'signature',name:'Banana Taffy',variant:'Hybrid — Signature 2G',price:25.00,badge:'new',desc:'Banana Taffy hybrid — sweet banana candy notes with a smooth lingering finish. Signature Collection 2G.',tags:['banana taffy','hybrid','signature']},
  {id:108,img:'berry-bash-hybrid.webp',cat:'Signature Collection',tag:'signature',name:'Berry Bash',variant:'Hybrid — Signature 2G',price:25.00,badge:'new',desc:'Berry Bash hybrid — an explosion of mixed berry flavor. Signature Collection 2G.',tags:['berry bash','hybrid','signature']},
  {id:109,img:'berry-ice-sativa.webp',cat:'Signature Collection',tag:'signature',name:'Berry Ice',variant:'Sativa — Signature 2G',price:25.00,badge:'new',desc:'Berry Ice sativa — crisp berry sweetness with an icy cool finish. Energizing Signature flavor.',tags:['berry ice','sativa','signature']},
  {id:110,img:'bubblegum-burst-hybrid.webp',cat:'Signature Collection',tag:'signature',name:'Bubblegum Burst',variant:'Hybrid — Signature 2G',price:25.00,badge:'new',desc:'Bubblegum Burst hybrid — classic sweet bubblegum in the Signature Collection 2G format.',tags:['bubblegum','hybrid','signature']},
  {id:111,img:'fruit-loops-hybrid.webp',cat:'Signature Collection',tag:'signature',name:'Fruit Loops',variant:'Hybrid — Signature 2G',price:25.00,badge:'new',desc:'Fruit Loops hybrid — playful multi-fruit cereal-inspired flavor. Signature Collection.',tags:['fruit loops','hybrid','signature']},
  {id:112,img:'grape-stars-hybrid.webp',cat:'Signature Collection',tag:'signature',name:'Grape Stars',variant:'Hybrid — Signature 2G',price:25.00,badge:'new',desc:'Grape Stars hybrid — bold grape with a smooth hybrid finish. Signature Collection.',tags:['grape stars','hybrid','signature']},
  {id:113,img:'mango-bliss-hybrid.webp',cat:'Signature Collection',tag:'signature',name:'Mango Bliss',variant:'Hybrid — Signature 2G',price:25.00,badge:'new',desc:'Mango Bliss hybrid — tropical mango sweetness. Signature Collection 2G.',tags:['mango bliss','hybrid','signature']},
  {id:114,img:'peach-paradise-indica.webp',cat:'Signature Collection',tag:'signature',name:'Peach Paradise',variant:'Indica — Signature 2G',price:25.00,badge:'new',desc:'Peach Paradise indica — sweet ripe peach with a relaxing experience. Signature Collection.',tags:['peach paradise','indica','signature']},

  /* ── 2. DISPOSABLE VAPES ── */
  {id:201,img:'watermelon-mint.webp',cat:'Disposable Vapes',tag:'disposable',name:'Watermelon Mint',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Crisp, refreshing Watermelon Mint. Summer essential from the Gen 4 lineup.',tags:['watermelon mint','gen 4','refreshing']},
  {id:202,img:'ace-4-gram-disposable.webp',cat:'Disposable Vapes',tag:'disposable',name:'Ace Ultra 4G Disposable',variant:'4G — Extended Capacity',price:45.00,badge:'hot',desc:'The Ace Ultra 4G disposable — double the capacity with extended battery life.',tags:['4g','disposable','extended']},
  {id:203,img:'vanilla-dream.webp',cat:'Disposable Vapes',tag:'disposable',name:'Vanilla Dream',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:'new',desc:'Vanilla Dream — smooth creamy vanilla in the iconic Ace Ultra Gen 4 format.',tags:['vanilla dream','gen 4','new']},
  {id:204,img:'purple-berry-ice.webp',cat:'Disposable Vapes',tag:'disposable',name:'Purple Berry Ice',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Purple Berry Ice — mixed berry sweetness with an icy finish. Gen 4 2G.',tags:['purple berry ice','gen 4','icy']},
  {id:205,img:'lunar-lychee-ice.webp',cat:'Disposable Vapes',tag:'disposable',name:'Lunar Lychee Ice',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:'new',desc:'Lunar Lychee Ice — exotic lychee with an icy cooldown. New Gen 4 fan favorite.',tags:['lychee ice','gen 4','new']},
  {id:206,img:'jelly-rancher.webp',cat:'Disposable Vapes',tag:'disposable',name:'Jelly Rancher',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Jelly Rancher — bold, candy-sweet multi-fruit flavor. Gen 4 2G.',tags:['jelly rancher','gen 4','candy']},
  {id:207,img:'honeydew-harmony.webp',cat:'Disposable Vapes',tag:'disposable',name:'Honeydew Harmony',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Honeydew Harmony — sweet melon notes in a smooth Gen 4 2G.',tags:['honeydew','gen 4','melon']},
  {id:208,img:'cherry-vanilla-swirl.webp',cat:'Disposable Vapes',tag:'disposable',name:'Cherry Vanilla Swirl',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Cherry Vanilla Swirl — sweet cherry meets creamy vanilla. Gen 4 2G.',tags:['cherry vanilla','gen 4']},
  {id:209,img:'berry-chill-product.webp',cat:'Disposable Vapes',tag:'disposable',name:'Berry Chill',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Berry Chill — cool mixed berry with a refreshing icy finish. Effects: Relaxed, Inspired, Peaceful.',tags:['berry chill','gen 4','icy']},
  {id:210,img:'alien-electric-green-apple.webp',cat:'Disposable Vapes',tag:'disposable',name:'Alien Electric Green Apple',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:'new',desc:'Alien Electric Green Apple — sharp electric green apple. Bold and unique Gen 4.',tags:['green apple','gen 4','bold']},
  {id:211,img:'pink-twisted-tropics.webp',cat:'Disposable Vapes',tag:'disposable',name:'Pink Twisted Tropics',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Pink Twisted Tropics — bright tropical burst in a smooth Gen 4 2G.',tags:['pink tropics','gen 4','tropical']},
  {id:212,img:'ace-ultra-premium-4g-disposable.webp',cat:'Disposable Vapes',tag:'disposable',name:'Ace Ultra Premium 4G Disposable',variant:'4G Extended — Premium Build',price:45.00,badge:'hot',desc:'Ace Ultra Premium 4G — extended 4-gram capacity, premium build and battery.',tags:['4g disposable','extended','premium']},
  {id:213,img:'kiwi-berry-runtz.webp',cat:'Disposable Vapes',tag:'disposable',name:'Kiwi Berry Runtz',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Kiwi Berry Runtz — kiwi, berry, and signature Runtz sweetness. Gen 4 2G.',tags:['kiwi berry','gen 4','runtz']},
  {id:214,img:'cool-breeze.webp',cat:'Disposable Vapes',tag:'disposable',name:'Cool Breeze',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Cool Breeze — crisp minty Gen 4 flavor with a smooth clean finish.',tags:['cool breeze','gen 4','mint']},
  {id:215,img:'aces-sour-fruit-punch.webp',cat:'Disposable Vapes',tag:'disposable',name:'Sour Fruit Punch',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Sour Fruit Punch — tangy, sweet, and balanced. A crowd-pleasing Gen 4 flavor.',tags:['sour punch','gen 4','fruit']},
  {id:216,img:'mojito.webp',cat:'Disposable Vapes',tag:'disposable',name:'Mojito',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Mojito — refreshing lime, mint, and sweetness. Cocktail-inspired Gen 4.',tags:['mojito','gen 4','lime']},
  {id:217,img:'sapphire-lemon.webp',cat:'Disposable Vapes',tag:'disposable',name:'Sapphire Lemon',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Sapphire Lemon — bright, zesty citrus with smooth draw. Gen 4 2G.',tags:['sapphire lemon','gen 4','citrus']},
  {id:218,img:'raspberry-lemonade.webp',cat:'Disposable Vapes',tag:'disposable',name:'Raspberry Lemonade',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Raspberry Lemonade — sweet raspberry meets tangy lemon. Gen 4 2G.',tags:['raspberry lemonade','gen 4','fruity']},
  {id:219,img:'special-raspberry-crave.webp',cat:'Disposable Vapes',tag:'disposable',name:'Special Raspberry Crave',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Special Raspberry Crave — rich, sweet raspberry in premium Gen 4 form.',tags:['raspberry','gen 4','special']},
  {id:220,img:'special-sundrenched-moscato.webp',cat:'Disposable Vapes',tag:'disposable',name:'Special Sundrenched Moscato',variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:null,desc:'Sundrenched Moscato — sophisticated wine-inspired sweetness. Gen 4 2G.',tags:['moscato','gen 4','special']},
  {id:221,img:'tigers-blood.webp',cat:'Disposable Vapes',tag:'disposable',name:"Tiger's Blood",variant:'Ace Ultra Premium 2G — Gen 4',price:25.00,badge:'hot',desc:"Tiger's Blood — bold strawberry, watermelon, coconut blend. Top-selling Gen 4.",tags:["tiger's blood",'gen 4','tropical']},

  /* ── 3. LOVE EDITION ── */
  {id:301,img:'ace-ultra-love-edition-100pcs.webp',cat:'Love Edition',tag:'love',name:'Love Edition — 100 PCS Master Box',variant:'2G · 100 Units Variety',price:1500.00,badge:'ws',desc:'100-unit Love Edition 2G master box — all mixed Love Edition flavors.',tags:['love edition','100pcs','master box']},
  {id:302,img:'ace-ultra-love-edition-25pcs.webp',cat:'Love Edition',tag:'love',name:'Love Edition — 25 PCS Master Box',variant:'2G · 25 Units Variety',price:400.00,badge:'ws',desc:'25-unit Love Edition 2G variety master box. Mixed Love Edition flavors — Dragon Fruit Bliss, Peach Rings, Red Velvet, Muffin Magic, GingerBread, Lychee Blossom, and more. Wholesale pricing.',tags:['love edition','25pcs','master box']},
  {id:303,img:'ace-ultra-love-edition-50pcs.webp',cat:'Love Edition',tag:'love',name:'Love Edition — 50 PCS Master Box',variant:'2G · 50 Units Variety',price:750.00,badge:'ws',desc:'50-unit Love Edition 2G master box. All mixed Love Edition premium flavors for dispensary wholesale. Ghost Train, Dynasty OG, Fire OG, Red Velvet, Peach Rings, and more. Ships from LA.',tags:['love edition','50pcs','master box']},
  {id:304,img:'dragon-fruit-bliss-hybrid.webp',cat:'Love Edition',tag:'love',name:'Dragon Fruit Bliss',variant:'Hybrid — Love Edition 2G',price:25.00,badge:null,desc:'Dragon Fruit Bliss hybrid — rich tropical notes with balanced effects. Love Edition.',tags:['dragon fruit','hybrid','love edition']},
  {id:305,img:'dynasty-og-hybrid.webp',cat:'Love Edition',tag:'love',name:'Dynasty OG',variant:'Hybrid — Love Edition 2G',price:25.00,badge:null,desc:'Dynasty OG hybrid — classic OG with rich terpene profile. Love Edition.',tags:['dynasty og','hybrid','love edition']},
  {id:306,img:'ghost-train-sativa.webp',cat:'Love Edition',tag:'love',name:'Ghost Train',variant:'Sativa — Love Edition 2G',price:25.00,badge:null,desc:'Ghost Train sativa — energizing, clear-headed, bursting with flavor. Top-rated.',tags:['ghost train','sativa','love edition']},
  {id:307,img:'fire-og-hybrid.webp',cat:'Love Edition',tag:'love',name:'Fire OG',variant:'Hybrid — Love Edition 2G',price:25.00,badge:null,desc:'Fire OG hybrid — bold earthy flavor with classic OG balance. Love Edition.',tags:['fire og','hybrid','love edition']},
  {id:308,img:'gingerbread-hybrid.webp',cat:'Love Edition',tag:'love',name:'GingerBread',variant:'Hybrid — Love Edition 2G',price:25.00,badge:null,desc:'GingerBread hybrid — warm, spiced, and unique. A standout Love Edition flavor.',tags:['gingerbread','hybrid','love edition']},
  {id:309,img:'lychee-blossom-indica.webp',cat:'Love Edition',tag:'love',name:'Lychee Blossom',variant:'Indica — Love Edition 2G',price:25.00,badge:null,desc:'Lychee Blossom indica — exotic sweet-floral. One of the most-rated Love Edition flavors.',tags:['lychee blossom','indica','love edition']},
  {id:310,img:'peach-rings-sativa.webp',cat:'Love Edition',tag:'love',name:'Peach Rings',variant:'Sativa — Love Edition 2G',price:25.00,badge:null,desc:'Peach Rings sativa — bright sweet peach. Uplifting Love Edition favorite.',tags:['peach rings','sativa','love edition']},
  {id:311,img:'muffin-magic-indica.webp',cat:'Love Edition',tag:'love',name:'Muffin Magic',variant:'Indica — Love Edition 2G',price:25.00,badge:null,desc:'Muffin Magic indica — sweet bakery-inspired. Perfect for winding down.',tags:['muffin magic','indica','love edition']},
  {id:312,img:'red-velvet-hybrid.webp',cat:'Love Edition',tag:'love',name:'Red Velvet',variant:'Hybrid — Love Edition 2G',price:25.00,badge:null,desc:'Red Velvet hybrid — rich dessert-inspired flavor profile. Love Edition.',tags:['red velvet','hybrid','love edition']},

  /* ── 4. SPRING EDITION ── */
  {id:401,img:'ace-ultra-spring-100pcs.webp',cat:'Spring Edition',tag:'spring',name:'Spring Edition — 100 PCS Master Box',variant:'2G · 100 Units Variety',price:1500.00,badge:'ws',desc:'100-unit Spring Edition 2G master box. All mixed Spring flavors.',tags:['spring edition','100pcs','master box']},
  {id:402,img:'ace-ultra-spring-10pcs.webp',cat:'Spring Edition',tag:'spring',name:'Spring Edition — 10 PCS Variety',variant:'2G · 10 Units Variety',price:200.00,badge:'ws',desc:'10-unit Spring Edition 2G variety flavor pack. Sample all 18 new Spring Edition flavors — Rainbow Sherbet, Zombie Zest, Serenity Cheesecake, Pineapple Twist, Citrus Sunset and more.',tags:['spring edition','10pcs','variety']},
  {id:403,img:'ace-ultra-spring-25pcs.webp',cat:'Spring Edition',tag:'spring',name:'Spring Edition — 25 PCS Master Box',variant:'2G · 25 Units Variety',price:400.00,badge:'ws',desc:'25-unit Spring Edition 2G variety master box. All 18 mixed Spring Edition flavors at wholesale pricing. Rainbow Sherbet, Zombie Zest, Raspberry Kiss, Sour Punch, and more. Ships from LA.',tags:['spring edition','25pcs','master box']},
  {id:404,img:'apple-cooler-hybrid.webp',cat:'Spring Edition',tag:'spring',name:'Apple Cooler',variant:'Hybrid — Spring Edition 2G',price:25.00,badge:'new',desc:'Apple Cooler hybrid — crisp apple with a refreshing cool finish. Spring Edition.',tags:['apple cooler','hybrid','spring']},
  {id:405,img:'berry-burst-hybrid.webp',cat:'Spring Edition',tag:'spring',name:'Berry Burst',variant:'Hybrid — Spring Edition 2G',price:25.00,badge:'new',desc:'Berry Burst hybrid — intense mixed berry burst. Spring Edition 2G.',tags:['berry burst','hybrid','spring']},
  {id:406,img:'berry-punch-indica.webp',cat:'Spring Edition',tag:'spring',name:'Berry Punch',variant:'Indica — Spring Edition 2G',price:25.00,badge:'new',desc:'Berry Punch indica — sweet berry with a relaxing experience. Spring Edition.',tags:['berry punch','indica','spring']},
  {id:407,img:'blueberry-ice-hybrid.webp',cat:'Spring Edition',tag:'spring',name:'Blueberry Ice',variant:'Hybrid — Spring Edition 2G',price:25.00,badge:'new',desc:'Blueberry Ice hybrid — blueberry sweetness with icy finish. Spring Edition.',tags:['blueberry ice','hybrid','spring']},
  {id:408,img:'cherry-vanilla-sky-indica.webp',cat:'Spring Edition',tag:'spring',name:'Cherry Vanilla Sky',variant:'Indica — Spring Edition 2G',price:25.00,badge:'new',desc:'Cherry Vanilla Sky indica — sweet cherry meets creamy vanilla. Spring Edition.',tags:['cherry vanilla sky','indica','spring']},
  {id:409,img:'granny-smith-swirl-indica.webp',cat:'Spring Edition',tag:'spring',name:'Granny Smith Swirl',variant:'Indica — Spring Edition 2G',price:25.00,badge:'new',desc:'Granny Smith Swirl indica — tart green apple with smooth indica experience.',tags:['granny smith','indica','spring','apple']},
  {id:410,img:'citrus-sunset-hybrid.webp',cat:'Spring Edition',tag:'spring',name:'Citrus Sunset',variant:'Hybrid — Spring Edition 2G',price:25.00,badge:'new',desc:'Citrus Sunset hybrid — vibrant citrus blend with warm smooth finish. Spring Edition.',tags:['citrus sunset','hybrid','spring']},
  {id:411,img:'kiwi-berry-mist-indica.webp',cat:'Spring Edition',tag:'spring',name:'Kiwi Berry Mist',variant:'Indica — Spring Edition 2G',price:25.00,badge:'new',desc:'Kiwi Berry Mist indica — kiwi and berry with a soft misted finish.',tags:['kiwi berry mist','indica','spring']},
  {id:412,img:'pineapple-twist-hybrid.webp',cat:'Spring Edition',tag:'spring',name:'Pineapple Twist',variant:'Hybrid — Spring Edition 2G',price:25.00,badge:'new',desc:'Pineapple Twist hybrid — tropical pineapple with a smooth twist. Spring Edition.',tags:['pineapple twist','hybrid','spring']},
  {id:413,img:'lychee-sorbet-hybrid.webp',cat:'Spring Edition',tag:'spring',name:'Lychee Sorbet',variant:'Hybrid — Spring Edition 2G',price:25.00,badge:'new',desc:'Lychee Sorbet hybrid — exotic lychee with light sorbet sweetness. Spring Edition.',tags:['lychee sorbet','hybrid','spring']},
  {id:414,img:'rainbow-sherbet-sativa.webp',cat:'Spring Edition',tag:'spring',name:'Rainbow Sherbet',variant:'Sativa — Spring Edition 2G',price:25.00,badge:'new',desc:'Rainbow Sherbet sativa — vibrant multi-fruit sherbet. Uplifting Spring Edition.',tags:['rainbow sherbet','sativa','spring']},
  {id:415,img:'raspberry-kiss-sativa.webp',cat:'Spring Edition',tag:'spring',name:'Raspberry Kiss',variant:'Sativa — Spring Edition 2G',price:25.00,badge:'new',desc:'Raspberry Kiss sativa — sweet bright raspberry. Energizing Spring Edition.',tags:['raspberry kiss','sativa','spring']},
  {id:416,img:'serenity-cheesecake-indica.webp',cat:'Spring Edition',tag:'spring',name:'Serenity Cheesecake',variant:'Indica — Spring Edition 2G',price:25.00,badge:'new',desc:'Serenity Cheesecake indica — rich creamy cheesecake. Deeply relaxing Spring Edition.',tags:['cheesecake','indica','spring']},
  {id:417,img:'sour-punch-sativa.webp',cat:'Spring Edition',tag:'spring',name:'Sour Punch',variant:'Sativa — Spring Edition 2G',price:25.00,badge:'new',desc:'Sour Punch sativa — sharp tangy sour fruit. Uplifting Spring Edition.',tags:['sour punch','sativa','spring']},
  {id:418,img:'zombie-zest-hybrid.webp',cat:'Spring Edition',tag:'spring',name:'Zombie Zest',variant:'Hybrid — Spring Edition 2G',price:25.00,badge:'new',desc:'Zombie Zest hybrid — bold wild mixed fruit. Spring Edition 2G.',tags:['zombie zest','hybrid','spring']},

  /* ── 5. BLACK BADGE COLLECTION ── */
  {id:501,img:'ace-ultra-black-badge-100pcs.webp',cat:'Black Badge Collection',tag:'black',name:'Black Badge — 100 PCS Master Box',variant:'2G · 100 Units Variety',price:1500.00,badge:'ws',desc:'100-unit Black Badge Collection 2G master box. All mixed Black Badge flavors.',tags:['black badge','100pcs','master box']},
  {id:502,img:'ace-ultra-black-badge-10pcs.webp',cat:'Black Badge Collection',tag:'black',name:'Black Badge — 10 PCS Mixed',variant:'2G · 10 Units Mixed Flavors',price:200.00,badge:'ws',desc:'10-unit Black Badge Collection 2G mixed flavors wholesale pack. All Black Badge premium flavors — Rose Serenade, Strawberry Dream, Lychee Sorbet, Raspberry Kiss, Apple Cooler, Berry Burst.',tags:['black badge','10pcs','mixed']},
  {id:503,img:'ace-ultra-black-badge-25pcs.webp',cat:'Black Badge Collection',tag:'black',name:'Black Badge — 25 PCS Master Box',variant:'2G · 25 Units Variety',price:400.00,badge:'ws',desc:'25-unit Black Badge Collection 2G variety master box.',tags:['black badge','25pcs','master box']},
  {id:504,img:'ace-ultra-black-badge-50pcs.webp',cat:'Black Badge Collection',tag:'black',name:'Black Badge — 50 PCS Master Box',variant:'2G · 50 Units Variety',price:750.00,badge:'ws',desc:'50-unit Black Badge Collection 2G variety master box.',tags:['black badge','50pcs','master box']},
  {id:505,img:'apple-cooler-hybrid.webp',cat:'Black Badge Collection',tag:'black',name:'Apple Cooler',variant:'Hybrid — Black Badge 2G',price:25.00,badge:'new',desc:'Apple Cooler hybrid in the premium Black Badge Collection. Crisp apple, cool finish.',tags:['apple cooler','hybrid','black badge']},
  {id:506,img:'berry-burst-hybrid.webp',cat:'Black Badge Collection',tag:'black',name:'Berry Burst',variant:'Hybrid — Black Badge 2G',price:25.00,badge:'new',desc:'Berry Burst hybrid — intense mixed berry in the Black Badge Collection.',tags:['berry burst','hybrid','black badge']},
  {id:507,img:'cherry-vanilla-sky-indica.webp',cat:'Black Badge Collection',tag:'black',name:'Cherry Vanilla Sky',variant:'Indica — Black Badge 2G',price:25.00,badge:'new',desc:'Cherry Vanilla Sky indica — sweet creamy premium indica. Black Badge.',tags:['cherry vanilla sky','indica','black badge']},
  {id:508,img:'kiwi-berry-mist-indica.webp',cat:'Black Badge Collection',tag:'black',name:'Kiwi Berry Mist',variant:'Indica — Black Badge 2G',price:25.00,badge:'new',desc:'Kiwi Berry Mist indica — kiwi and berry in the premium Black Badge format.',tags:['kiwi berry mist','indica','black badge']},
  {id:509,img:'lychee-sorbet-hybrid.webp',cat:'Black Badge Collection',tag:'black',name:'Lychee Sorbet',variant:'Hybrid — Black Badge 2G',price:25.00,badge:'new',desc:'Lychee Sorbet hybrid — premium lychee sorbet. Black Badge Collection.',tags:['lychee sorbet','hybrid','black badge']},
  {id:510,img:'raspberry-kiss-sativa.webp',cat:'Black Badge Collection',tag:'black',name:'Raspberry Kiss',variant:'Sativa — Black Badge 2G',price:25.00,badge:'new',desc:'Raspberry Kiss sativa — sweet uplifting raspberry. Black Badge Collection.',tags:['raspberry kiss','sativa','black badge']},
  {id:511,img:'rose-serenade-indica.webp',cat:'Black Badge Collection',tag:'black',name:'Rose Serenade',variant:'Indica — Black Badge 2G',price:25.00,badge:'new',desc:'Rose Serenade indica — floral, aromatic, deeply relaxing. Black Badge exclusive.',tags:['rose serenade','indica','black badge']},
  {id:512,img:'strawberry-dream-sativa.webp',cat:'Black Badge Collection',tag:'black',name:'Strawberry Dream',variant:'Sativa — Black Badge 2G',price:25.00,badge:'new',desc:'Strawberry Dream sativa — fresh sweet strawberry, uplifting. Black Badge.',tags:['strawberry dream','sativa','black badge']},

  /* ── 6. 4G GEN 2 ── */
  {id:601,img:'ace-4-gram-disposable.webp',cat:'4G Gen 2',tag:'4g',name:'Ace Ultra 4G Disposable',variant:'Single Unit — 4G Extended',price:45.00,badge:'hot',desc:'Ace Ultra 4G disposable — double the capacity of a standard 2G, extended battery.',tags:['4g','disposable']},
  {id:602,img:'ace-ultra-4g-10pcs.webp',cat:'4G Gen 2',tag:'4g',name:'4G Mixed Flavors — 10 PCS',variant:'4G · 10 Units Mixed',price:350.00,badge:'ws',desc:'10-unit 4G mixed flavors wholesale pack. All Gen 2 4G flavors.',tags:['4g','10pcs','mixed']},
  {id:603,img:'ace-ultra-4g-100pcs.webp',cat:'4G Gen 2',tag:'4g',name:'Ace Ultra 4G — 100 PCS Box',variant:'4G · 100 Units Variety',price:3500.00,badge:'ws',desc:'100-unit 4G Gen 2 variety box. Largest 4G wholesale option.',tags:['4g','100pcs','variety box']},
  {id:604,img:'ace-ultra-4g-25pcs.webp',cat:'4G Gen 2',tag:'4g',name:'Ace Ultra 4G — 25 PCS Box',variant:'4G · 25 Units Variety',price:900.00,badge:'ws',desc:'25-unit 4G Gen 2 variety box. All mixed 4G Gen 2 flavors at competitive wholesale pricing. Extended 4-gram capacity. Blueberry Pancakes, Jolly Rancher, Jungle Juice, and more.',tags:['4g','25pcs','variety box']},
  {id:605,img:'ace-ultra-4g-50pcs.webp',cat:'4G Gen 2',tag:'4g',name:'Ace Ultra 4G — 50 PCS Box',variant:'4G · 50 Units Variety',price:1750.00,badge:'ws',desc:'50-unit 4G Gen 2 variety box. All mixed 4G flavors for dispensary wholesale. Each unit — 4-gram capacity with premium build. Mystic Candy, Peaches and Dream, Pink Panties, and more.',tags:['4g','50pcs','variety box']},
  {id:606,img:'blueberry-pancakes-indica.webp',cat:'4G Gen 2',tag:'4g',name:'Blueberry Pancakes',variant:'Indica — 4G Gen 2',price:45.00,badge:null,desc:'Blueberry Pancakes indica — sweet fluffy blueberry in 4G Gen 2 format.',tags:['blueberry pancakes','indica','4g']},
  {id:607,img:'bluenana-burst-indica.webp',cat:'4G Gen 2',tag:'4g',name:'Bluenana Burst',variant:'Indica — 4G Gen 2',price:45.00,badge:null,desc:'Bluenana Burst indica — blueberry meets banana. Smooth 4G indica.',tags:['bluenana burst','indica','4g']},
  {id:608,img:'chemdawg-skunk-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Chemdawg Skunk',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Chemdawg Skunk sativa — bold classic chem profile. Energizing 4G.',tags:['chemdawg','sativa','4g']},
  {id:609,img:'cherry-coco-mango-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Cherry Coco Mango',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Cherry Coco Mango sativa — tropical fruit trio. Bright, uplifting 4G.',tags:['cherry coco mango','sativa','4g']},
  {id:610,img:'colombian-cookies-indica.webp',cat:'4G Gen 2',tag:'4g',name:'Colombian Cookies',variant:'Indica — 4G Gen 2',price:45.00,badge:null,desc:'Colombian Cookies indica — rich earthy cookie flavor. Relaxing 4G.',tags:['colombian cookies','indica','4g']},
  {id:611,img:'dosi-punch-indica.webp',cat:'4G Gen 2',tag:'4g',name:'Dosi Punch',variant:'Indica — 4G Gen 2',price:45.00,badge:null,desc:'Dosi Punch indica — punchy, fruity, deeply relaxing. 4G Gen 2.',tags:['dosi punch','indica','4g']},
  {id:612,img:'grapple-berry-fritter-indica.webp',cat:'4G Gen 2',tag:'4g',name:'Grapple Berry Fritter',variant:'Indica — 4G Gen 2',price:45.00,badge:null,desc:'Grapple Berry Fritter indica — apple fritter meets grape and berry.',tags:['grapple berry','indica','4g']},
  {id:613,img:'ice-berry-lemo-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Ice Berry Lemo',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Ice Berry Lemo sativa — icy berry lemonade. Refreshing 4G sativa.',tags:['ice berry lemo','sativa','4g']},
  {id:614,img:'jolly-rancher-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Jolly Rancher',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Jolly Rancher sativa — hard candy fruit blast. Sweet and energizing 4G.',tags:['jolly rancher','sativa','4g']},
  {id:615,img:'jungle-juice-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Jungle Juice',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Jungle Juice sativa — vibrant tropical fruit blend. Energizing 4G Gen 2.',tags:['jungle juice','sativa','4g']},
  {id:616,img:'limeade-tsunami-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Limeade Tsunami',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Limeade Tsunami sativa — powerful lime wave. Bright and tart 4G.',tags:['limeade tsunami','sativa','4g']},
  {id:617,img:'orange-crush-pop-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Orange Crush Pop',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Orange Crush Pop sativa — bubbly orange soda flavor. Fun uplifting 4G.',tags:['orange crush pop','sativa','4g']},
  {id:618,img:'mystic-candy-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Mystic Candy',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Mystic Candy sativa — mystery candy with uplifting sativa experience.',tags:['mystic candy','sativa','4g']},
  {id:619,img:'peaches-and-dream-sativa.webp',cat:'4G Gen 2',tag:'4g',name:'Peaches and Dream',variant:'Sativa — 4G Gen 2',price:45.00,badge:null,desc:'Peaches and Dream sativa — sweet peach dream in 4G sativa format.',tags:['peaches and dream','sativa','4g']},
  {id:620,img:'pink-panties-indica.webp',cat:'4G Gen 2',tag:'4g',name:'Pink Panties',variant:'Indica — 4G Gen 2',price:45.00,badge:null,desc:'Pink Panties indica — soft floral indica flavor. Relaxing 4G experience.',tags:['pink panties','indica','4g']},

  /* ── 7. WHOLESALE MASTER BOXES ── */
  {id:701,img:'ace-ultra-2g-mixed-10pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Ace Ultra 2G Mixed — 10 PCS',variant:'2G · 10 Units Mixed',price:200.00,badge:'ws',desc:'10-unit 2G mixed flavors pack. All Gen 4 flavors. Entry-level wholesale.',tags:['2g','10pcs','mixed']},
  {id:702,img:'ace-ultra-4g-10pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Ace Ultra 4G Mixed — 10 PCS',variant:'4G · 10 Units Mixed',price:350.00,badge:'ws',desc:'10-unit 4G Gen 2 mixed flavors wholesale pack. All Gen 2 4G flavors — Blueberry Pancakes, Jolly Rancher, Jungle Juice, Limeade Tsunami, Orange Crush Pop, Mystic Candy, and more.',tags:['4g','10pcs','mixed']},
  {id:703,img:'ace-ultra-4th-gen-2g-100pcs.webp',cat:'Wholesale',tag:'wholesale',name:'4th Gen 2G — 100 PCS Box',variant:'2G · 100 Units Variety',price:1500.00,badge:'ws',desc:'100-unit 4th Gen 2G variety master box. High-volume dispensaries.',tags:['gen4','100pcs','master box']},
  {id:704,img:'ace-ultra-4th-gen-2g-25pcs.webp',cat:'Wholesale',tag:'wholesale',name:'4th Gen 2G — 25 PCS Box',variant:'2G · 25 Units Variety',price:400.00,badge:'ws',desc:'25-unit 4th Gen 2G variety master box. Mixed Gen 4 disposable flavors at wholesale pricing — Tiger\'s Blood, Watermelon Mint, Berry Chill, Lunar Lychee Ice, Vanilla Dream, and 16+ more.',tags:['gen4','25pcs','master box']},
  {id:705,img:'ace-ultra-4th-gen-2g-50pcs.webp',cat:'Wholesale',tag:'wholesale',name:'4th Gen 2G — 50 PCS Box',variant:'2G · 50 Units Variety',price:750.00,badge:'ws',desc:'50-unit 4th Gen 2G variety master box. All mixed Gen 4 flavors for dispensary wholesale. Premium 2G disposable format. Ships from Los Angeles, CA warehouse within 1-2 business days.',tags:['gen4','50pcs','master box']},
  {id:706,img:'ace-ultra-black-badge-100pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Black Badge — 100 PCS',variant:'2G · 100 Units',price:1500.00,badge:'ws',desc:'100-unit Black Badge Collection 2G master box. Maximum wholesale volume — all mixed Black Badge flavors. Rose Serenade, Strawberry Dream, Lychee Sorbet, and more. Best value per unit.',tags:['black badge','100pcs']},
  {id:707,img:'ace-ultra-black-badge-10pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Black Badge — 10 PCS',variant:'2G · 10 Units Mixed',price:200.00,badge:'ws',desc:'10-unit Black Badge Collection 2G mixed flavors wholesale pack. All premium Black Badge flavors — Rose Serenade, Strawberry Dream, Apple Cooler, Berry Burst, Kiwi Berry Mist, and more.',tags:['black badge','10pcs']},
  {id:708,img:'ace-ultra-love-edition-100pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Love Edition — 100 PCS',variant:'2G · 100 Units',price:1500.00,badge:'ws',desc:'100-unit Love Edition 2G master box. Maximum Love Edition wholesale volume. Dragon Fruit Bliss, Peach Rings, Red Velvet, Muffin Magic, GingerBread, Ghost Train, and more included.',tags:['love edition','100pcs']},
  {id:709,img:'ace-ultra-black-badge-50pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Black Badge — 50 PCS',variant:'2G · 50 Units',price:750.00,badge:'ws',desc:'50-unit Black Badge Collection 2G master box. All mixed Black Badge premium flavors for dispensary wholesale. Distinctive branding, consistent premium quality. Ships from LA.',tags:['black badge','50pcs']},
  {id:710,img:'ace-ultra-love-edition-25pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Love Edition — 25 PCS',variant:'2G · 25 Units',price:400.00,badge:'ws',desc:'25-unit Love Edition 2G master box. Mixed Love Edition flavors — Dragon Fruit Bliss, Peach Rings, Red Velvet, Muffin Magic, Lychee Blossom, and more. Competitive wholesale pricing.',tags:['love edition','25pcs']},
  {id:711,img:'ace-ultra-4g-100pcs.webp',cat:'Wholesale',tag:'wholesale',name:'4G Premium — 100 PCS',variant:'4G · 100 Units Variety Box',price:3500.00,badge:'ws',desc:'100-unit 4G Gen 2 variety box. Largest 4G wholesale.',tags:['4g','100pcs']},
  {id:712,img:'ace-ultra-4g-25pcs.webp',cat:'Wholesale',tag:'wholesale',name:'4G Premium — 25 PCS',variant:'4G · 25 Units Variety Box',price:900.00,badge:'ws',desc:'25-unit 4G Gen 2 variety wholesale box. Mixed 4G disposable flavors — Blueberry Pancakes, Jolly Rancher, Jungle Juice, Limeade Tsunami, and more. Premium extended-capacity disposables.',tags:['4g','25pcs']},
  {id:713,img:'ace-ultra-4g-50pcs.webp',cat:'Wholesale',tag:'wholesale',name:'4G Premium — 50 PCS',variant:'4G · 50 Units Variety Box',price:1750.00,badge:'ws',desc:'50-unit 4G Gen 2 variety wholesale box. Best mid-volume 4G option. All mixed Gen 2 flavors included. Extended battery life on each unit. Ships from Los Angeles, CA.',tags:['4g','50pcs']},
  {id:714,img:'ace-ultra-premium-gold-prestige-edition-2g-disposable.webp',cat:'Wholesale',tag:'wholesale',name:'Gold Prestige Edition 2G',variant:'Single · Signature Collection',price:25.00,badge:'new',desc:'Gold Prestige Edition 2G — available single or bulk.',tags:['gold prestige','signature']},
  {id:715,img:'ace-ultra-premium-signature-gold-retailer-bulk-deals.webp',cat:'Wholesale',tag:'wholesale',name:'Signature Gold — Retailer Bulk',variant:'Retailer Bulk Deals',price:200.00,badge:'ws',desc:'Signature Gold retailer bulk deals for licensed dispensaries and resellers. Contact us via WhatsApp for custom volume pricing. All Signature Collection flavors available in bulk.',tags:['signature gold','retailer']},
  {id:716,img:'ace-ultra-signature-gold-100pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Signature Gold — 100 PCS',variant:'2G · 100 Units',price:1500.00,badge:'ws',desc:'100-unit Signature Gold Collection 2G master box. Maximum wholesale volume. All mixed Signature flavors — Banana Taffy, Berry Bash, Berry Ice, Bubblegum Burst, Mango Bliss, and more.',tags:['signature gold','100pcs']},
  {id:717,img:'ace-ultra-signature-gold-10pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Signature Gold — 10 PCS',variant:'2G · 10 Units Mixed',price:200.00,badge:'ws',desc:'10-unit Signature Gold Collection 2G mixed flavors wholesale pack. All Signature flavors at entry wholesale pricing. Perfect for new dispensary accounts. Min order $100 USD.',tags:['signature gold','10pcs']},
  {id:718,img:'ace-ultra-signature-gold-25pcs.webp',cat:'Wholesale',tag:'wholesale',name:'Signature Gold — 25 PCS',variant:'2G · 25 Units',price:400.00,badge:'ws',desc:'25-unit Signature Gold Collection 2G variety master box. All mixed Signature flavors — Banana Taffy, Berry Ice, Fruit Loops, Grape Stars, Mango Bliss, Peach Paradise, and more.',tags:['signature gold','25pcs']},

  /* ── GUMMIES ── */
  {id:801,img:'ace-ultra-premium-gummies.webp',cat:'Ace Ultra Gummies',tag:'gummies',name:'Ace of Spades Ultra Premium Gummies',variant:'Mixed Flavors Pack',price:24.99,badge:'new',desc:'Ace of Spades Ultra Premium Gummies — mixed flavors pack. First edible in the lineup. Adults 21+.',tags:['gummies','edibles','ace of spades']}
];

const FEATURED_IDS = [101,107,201,209,221,304,306,414,501,512,601,614,703,801];

function imgSrc(p){
  if(!p||!p.img)return null;
  return '/assets/images/products/'+p.img;
}

let cart=JSON.parse(sessionStorage.getItem('ace_cart')||'[]');
let currentModal=null,modalQty=1;
function saveCart(){sessionStorage.setItem('ace_cart',JSON.stringify(cart));}

function renderProductCards(list, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.map(p => {
    const src = imgSrc(p);

    // Badge
    let badgeHtml = '';
    if (p.badge) {
      const badgeLabels = { hot:'&#9733; Hot', new:'New', ws:'Wholesale', '4g':'4G Gen 2' };
      const badgeColors = {
        hot:  'background:#c9a84c;color:#080808;',
        new:  'background:#22c55e;color:#080808;',
        ws:   'background:rgba(201,168,76,.15);color:#c9a84c;border:1px solid rgba(201,168,76,.35);',
        '4g': 'background:rgba(120,120,180,.2);color:#aaa;border:1px solid rgba(120,120,180,.3);',
      };
      const lbl = badgeLabels[p.badge] || p.badge.toUpperCase();
      const st  = badgeColors[p.badge] || badgeColors.new;
      badgeHtml = `<span class="pc-badge" style="${st}">${lbl}</span>`;
    }

    // Image
    const imgHtml = src
      ? `<img src="${src}" alt="${p.name} — Ace Ultra Premium Carts" loading="lazy" decoding="async"
              onerror="this.style.opacity='0';this.nextElementSibling&&(this.nextElementSibling.style.display='flex')">
         <span class="pc-img-fallback" style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;font-size:40px;opacity:.2;">&#9824;</span>`
      : `<span class="pc-img-fallback" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:40px;opacity:.2;">&#9824;</span>`;

    // Variant string
    const varStr = p.variant || '';

    return `<div class="product-card" onclick="window.location.href='/products/${PRODUCT_SLUGS[p.id] || ''}/'" style="cursor:pointer;">
      <div class="pc-img">
        ${badgeHtml}
        ${imgHtml}
        <button class="pc-qv" onclick="event.stopPropagation();openQV(${p.id})" aria-label="Quick view">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </button>
      </div>
      <div class="pc-info">
        <div class="pc-cat">${p.cat || ''}</div>
        <a href="/products/${PRODUCT_SLUGS[p.id] || ''}/" class="pc-name" style="color:inherit;text-decoration:none;">${p.name}</a>
        ${varStr ? `<div class="pc-var">${varStr}</div>` : ''}
        <div class="pc-price">$${p.price.toFixed(2)}<small style="font-size:10px;font-weight:400;color:rgba(245,240,232,.3);margin-left:3px;">/ea</small></div>
        <button class="pc-add" onclick="event.stopPropagation();addToCart(${p.id},1)">Add to Cart</button>
      </div>
    </div>`;
  }).join('');
}


const PRODUCT_SLUGS = {101:"gold-prestige-edition-2g", 102:"signature-gold-retailer-bulk-deals", 103:"signature-gold-100-pcs-master-box", 104:"signature-gold-10-pcs-mixed", 105:"signature-gold-25-pcs-master-box", 106:"signature-gold-50-pcs-master-box", 107:"banana-taffy", 108:"berry-bash", 109:"berry-ice", 110:"bubblegum-burst", 111:"fruit-loops", 112:"grape-stars", 113:"mango-bliss", 114:"peach-paradise", 201:"watermelon-mint", 202:"ace-ultra-4g-disposable", 203:"vanilla-dream", 204:"purple-berry-ice", 205:"lunar-lychee-ice", 206:"jelly-rancher", 207:"honeydew-harmony", 208:"cherry-vanilla-swirl", 209:"berry-chill", 210:"alien-electric-green-apple", 211:"pink-twisted-tropics", 212:"ace-ultra-premium-4g-disposable", 213:"kiwi-berry-runtz", 214:"cool-breeze", 215:"sour-fruit-punch", 216:"mojito", 217:"sapphire-lemon", 218:"raspberry-lemonade", 219:"special-raspberry-crave", 220:"special-sundrenched-moscato", 301:"love-edition-100-pcs-master-box", 302:"love-edition-25-pcs-master-box", 303:"love-edition-50-pcs-master-box", 304:"dragon-fruit-bliss", 305:"dynasty-og", 306:"ghost-train", 307:"fire-og", 308:"gingerbread", 309:"lychee-blossom", 310:"peach-rings", 311:"muffin-magic", 312:"red-velvet", 401:"spring-edition-100-pcs-master-box", 402:"spring-edition-10-pcs-variety", 403:"spring-edition-25-pcs-master-box", 404:"apple-cooler", 405:"berry-burst", 406:"berry-punch", 407:"blueberry-ice", 408:"cherry-vanilla-sky", 409:"granny-smith-swirl", 410:"citrus-sunset", 411:"kiwi-berry-mist", 412:"pineapple-twist", 413:"lychee-sorbet", 414:"rainbow-sherbet", 415:"raspberry-kiss", 416:"serenity-cheesecake", 417:"sour-punch", 418:"zombie-zest", 501:"black-badge-100-pcs-master-box", 502:"black-badge-10-pcs-mixed", 503:"black-badge-25-pcs-master-box", 504:"black-badge-50-pcs-master-box", 505:"apple-cooler", 506:"berry-burst", 507:"cherry-vanilla-sky", 508:"kiwi-berry-mist", 509:"lychee-sorbet", 510:"raspberry-kiss", 511:"rose-serenade", 512:"strawberry-dream", 601:"ace-ultra-4g-disposable", 602:"4g-mixed-flavors-10-pcs", 603:"ace-ultra-4g-100-pcs-box", 604:"ace-ultra-4g-25-pcs-box", 605:"ace-ultra-4g-50-pcs-box", 606:"blueberry-pancakes", 607:"bluenana-burst", 608:"chemdawg-skunk", 609:"cherry-coco-mango", 610:"colombian-cookies", 611:"dosi-punch", 612:"grapple-berry-fritter", 613:"ice-berry-lemo", 614:"jolly-rancher", 615:"jungle-juice", 616:"limeade-tsunami", 617:"orange-crush-pop", 618:"mystic-candy", 619:"peaches-and-dream", 620:"pink-panties", 701:"ace-ultra-2g-mixed-10-pcs", 702:"ace-ultra-4g-mixed-10-pcs", 703:"4th-gen-2g-100-pcs-box", 705:"4th-gen-2g-50-pcs-box", 706:"black-badge-100-pcs", 707:"black-badge-10-pcs", 708:"love-edition-100-pcs", 709:"black-badge-50-pcs", 710:"love-edition-25-pcs", 711:"4g-premium-100-pcs", 712:"4g-premium-25-pcs", 713:"4g-premium-50-pcs", 714:"gold-prestige-edition-2g", 715:"signature-gold-retailer-bulk", 716:"signature-gold-100-pcs", 717:"signature-gold-10-pcs", 718:"signature-gold-25-pcs", 801:"ace-of-spades-ultra-premium-gummies", 221:"tigers-blood", 704:"4th-gen-2g-25-pcs-box"};

function addToCart(id,qty){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const ex=cart.find(i=>i.id===id);
  if(ex)ex.qty+=qty;else cart.push({...p,qty});
  saveCart();updateCartBadge();renderCartDrawer();
  showToast('♠ '+p.name+' added to cart!');
}
function removeFromCart(id){cart=cart.filter(i=>i.id!==id);saveCart();updateCartBadge();renderCartDrawer();}
function changeQty(id,d){const i=cart.find(x=>x.id===id);if(i){i.qty=Math.max(1,i.qty+d);saveCart();renderCartDrawer();updateCartBadge();}}
function getSubtotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0);}
function updateCartBadge(){
  const t=cart.reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-badge').forEach(b=>{b.textContent=t;b.style.display=t>0?'flex':'none';});
}
function renderCartDrawer(){
  const body=document.getElementById('drawer-body');
  const sub=document.getElementById('subtotal-val');
  const notice=document.getElementById('min-notice');
  if(!body)return;
  const total=getSubtotal();
  if(sub)sub.textContent='$'+total.toFixed(2);
  if(notice)notice.style.display=(total>0&&total<100)?'block':'none';
  if(cart.length===0){body.innerHTML='<div class="drawer-empty"><span>🛒</span>Your cart is empty.</div>';return;}
  body.innerHTML=cart.map(item=>{
    const src=imgSrc(item);
    const thumb=src?`<img src="${src}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px" onerror="this.style.display='none'">`:item.emoji||'♠';
    return `<div class="cart-item">
      <div class="ci-thumb">${thumb}</div>
      <div class="ci-body">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">$${item.price.toFixed(2)} / ea</div>
        <div class="ci-qty">
          <button class="qty-b" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-n">${item.qty}</span>
          <button class="qty-b" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="ci-del" onclick="removeFromCart(${item.id})">✕</button>
    </div>`;
  }).join('');
}
function toggleCart(){
  document.getElementById('cart-overlay').classList.toggle('open');
  document.getElementById('cart-drawer').classList.toggle('open');
  renderCartDrawer();
}
function checkout(){if(getSubtotal()<100){showToast('Minimum order $100 USD');return;}window.location.href='/checkout/';}
function applyCoupon(){
  const v=(document.getElementById('coupon-input')?.value||'').toUpperCase().trim();
  if(v==='ACECRYPTO1')showToast('✅ ACECRYPTO1 applied — 5% off!');
  else showToast('❌ Invalid coupon code');
}

function openQV(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  currentModal=p;modalQty=1;
  const src=imgSrc(p);
  const ov=document.getElementById('qv-overlay');if(!ov)return;
  const qvImg=document.getElementById('qv-emoji');
  if(qvImg){
    if(src){qvImg.innerHTML=`<img src="${src}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px" onerror="this.outerHTML='<span style=font-size:52px>♠</span>'">`;qvImg.style.fontSize='0';}
    else{qvImg.innerHTML='♠';qvImg.style.fontSize='';}
  }
  const set=(sel,val)=>{const e=document.querySelector(sel);if(e)e.textContent=val;};
  set('#qv-cat',p.cat);set('#qv-name',p.name);set('#qv-var',p.variant);
  set('#qv-desc',p.desc);set('#qv-price','$'+p.price.toFixed(2));set('#qv-qty-n','1');
  const tagsEl=document.getElementById('qv-tags');
  if(tagsEl)tagsEl.innerHTML=p.tags.map(t=>`<span class="qv-tag">${t}</span>`).join('');
  ov.classList.add('open');
}
function closeQV(e){if(!e||e.target===document.getElementById('qv-overlay'))document.getElementById('qv-overlay')?.classList.remove('open');}
function changeQVQty(d){modalQty=Math.max(1,modalQty+d);const e=document.getElementById('qv-qty-n');if(e)e.textContent=modalQty;}
function addFromQV(){if(currentModal){addToCart(currentModal.id,modalQty);closeQV();}}

let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');if(!t)return;
  t.querySelector('.toast-msg').textContent=msg;
  t.classList.add('show');clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),3000);
}

function toggleMobNav(){
  var nav = document.getElementById('mob-nav');
  if (!nav) return;
  nav.classList.toggle('open');
  // Lock body scroll when nav is open
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}
function enterSite(){
  sessionStorage.setItem('ace_age','1');
  const ag=document.getElementById('age-gate');
  if(ag){ag.style.transition='opacity .4s';ag.style.opacity='0';setTimeout(()=>{ag.style.display='none';document.body.style.overflow='';},420);}
}
function checkAgeGate(){
  const ag=document.getElementById('age-gate');
  if(!ag) return; // No age gate on this page - do nothing
  if(sessionStorage.getItem('ace_age')){ag.style.display='none';document.body.style.overflow='';}
  else{ag.style.display='flex';document.body.style.overflow='hidden';}
}
function toggleFaq(el){const item=el.closest('.faq-item');const was=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));if(!was)item.classList.add('open');}
function toggleSEO(){const b=document.getElementById('seo-body');const a=document.getElementById('seo-arrow');if(!b)return;b.classList.toggle('open');if(a)a.textContent=b.classList.contains('open')?'▲':'▾';}
function filterTab(tag,btn,containerId,allProducts){
  document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const list=tag==='all'?allProducts:allProducts.filter(p=>p.tag===tag);
  renderProductCards(list,containerId);
}
function copyText(text){navigator.clipboard?.writeText(text).then(()=>showToast('✅ Copied!')).catch(()=>showToast('Copy: '+text));}
function copyCode(code){navigator.clipboard?.writeText(code).then(()=>showToast('✅ Code '+code+' copied!')).catch(()=>{});}
function initReveal(){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(r=>obs.observe(r));
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    document.getElementById('cart-overlay')?.classList.remove('open');
    document.getElementById('cart-drawer')?.classList.remove('open');
    document.getElementById('qv-overlay')?.classList.remove('open');
    document.getElementById('mob-nav')?.classList.remove('open');
  }
});
document.addEventListener('DOMContentLoaded',()=>{checkAgeGate();updateCartBadge();renderCartDrawer();initReveal();});
