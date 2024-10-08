const products = [
  {
    serialNumber: 1001,
    name: "Rosette",
    description:
      "This high-pigment, full-coverage lipstick delivers long-lasting, vibrant color designed to complement any complexion. Enjoy a rich, true color that lasts all day, tailored to bring out the best in every skin tone.",
    price: 12,
    Image: "/Images/Rosette.jpg",
    group: "lipSticks",
  },
  {
    serialNumber: 1002,
    name: "Plum Dandy",
    description:
      "This high-pigment, full-coverage lipstick delivers long-lasting, vibrant color designed to complement any complexion. Enjoy a rich, true color that lasts all day, tailored to bring out the best in every skin tone.",
    price: 12,
    Image: "/Images/plumDandy.jpg",
    group: "lipSticks",
  },
  {
    serialNumber: 1003,
    name: "Coral",
    description:
      "This high-pigment, full-coverage lipstick delivers long-lasting, vibrant color designed to complement any complexion. Enjoy a rich, true color that lasts all day, tailored to bring out the best in every skin tone.",
    price: 12,
    Image: "/Images/Coral.jpg",
    group: "lipSticks",
  },
  {
    serialNumber: 1004,
    name: "Rich Espresso",
    description:
      "This high-pigment, full-coverage lipstick delivers long-lasting, vibrant color designed to complement any complexion. Enjoy a rich, true color that lasts all day, tailored to bring out the best in every skin tone.",
    price: 12,
    Image: "/Images/richEspresso.jpg",
    group: "lipSticks",
  },
  {
    serialNumber: 1005,
    name: "Off Duty",
    description:
      "This high-pigment, full-coverage lipstick delivers long-lasting, vibrant color designed to complement any complexion. Enjoy a rich, true color that lasts all day, tailored to bring out the best in every skin tone.",
    price: 12,
    Image: "/Images/offDuty.jpg",
    group: "lipSticks",
  },
  {
    serialNumber: 1006,
    name: "Blushing Nude",
    description:
      "This high-pigment, full-coverage lipstick delivers long-lasting, vibrant color designed to complement any complexion. Enjoy a rich, true color that lasts all day, tailored to bring out the best in every skin tone.",
    price: 12,
    Image: "/Images/blushingNudeLipstick.jpg",
    group: "lipSticks",
  },
  {
    serialNumber: 1007,
    name: "Sunlit Nectar",
    description:
      "Add elegance to your lips with Silken Sheen Lip Gloss. This silky formula glides on effortlessly, providing a subtle tint and sophisticated sheen. Infused with hydrating ingredients, it keeps your lips smooth and soft for long-lasting, luminous wear.",
    price: 10,
    Image: "/Images/sunlitNectar.jpg",
    group: "lipGloss",
  },
  {
    serialNumber: 1008,
    name: "Magenta Gleam",
    description:
      "Add elegance to your lips with Silken Sheen Lip Gloss. This silky formula glides on effortlessly, providing a subtle tint and sophisticated sheen. Infused with hydrating ingredients, it keeps your lips smooth and soft for long-lasting, luminous wear.",
    price: 10,
    Image: "/Images/magentaGleam.jpg",
    group: "lipGloss",
  },
  {
    serialNumber: 1009,
    name: "Rouge Noir",
    description:
      "Achieve a perfect blend of color and shine with Velvet Shine Lip Gloss. This luxurious formula applies smoothly, leaving your lips rich and glossy. Packed with moisturizers, it offers long-lasting hydration and vibrant color for a stunning, plump pout.",
    price: 10,
    Image: "/Images/rougeNoir.jpg",
    group: "lipGloss",
  },
  {
    serialNumber: 1010,
    name: "Scarlet Spark",
    description:
      "Achieve a perfect blend of color and shine with Velvet Shine Lip Gloss. This luxurious formula applies smoothly, leaving your lips rich and glossy. Packed with moisturizers, it offers long-lasting hydration and vibrant color for a stunning, plump pout.",
    price: 10,
    Image: "/Images/scarletSpark.jpg",
    group: "lipGloss",
  },
  {
    serialNumber: 1011,
    name: "Natural Glow",
    description:
      "Achieve a perfect blend of color and shine with Velvet Shine Lip Gloss. This luxurious formula applies smoothly, leaving your lips rich and glossy. Packed with moisturizers, it offers long-lasting hydration and vibrant color for a stunning, plump pout.",
    price: 10,
    Image: "/Images/naturalGlow.jpg",
    group: "lipGloss",
  },
  {
    serialNumber: 1012,
    name: "Pale Mist",
    description:
      "This matte lip gloss combines a smooth, luxurious finish with long-lasting, full coverage. It provides a lightweight feel, giving your lips a bold, sophisticated look that lasts all day.",
    price: 10,
    Image: "/Images/paleMist.jpg",
    group: "lipGloss",
  },
  {
    serialNumber: 1013,
    name: "Pastel Petal",
    description:
      "This matte lip gloss combines a smooth, luxurious finish with long-lasting, full coverage. It provides a lightweight feel, giving your lips a bold, sophisticated look that lasts all day.",
    price: 10,
    Image: "/Images/pastelPetal.jpg",
    group: "lipGloss",
  },
  {
    serialNumber: 1014,
    name: "Ivory",
    description:
      "Enhance your natural glow with our compact blush powder. This finely milled, lightweight formula blends seamlessly into your skin, providing a buildable, natural-looking flush. Perfect for on-the-go touch-ups, it delivers a soft, radiant finish that lasts all day.",
    price: 18,
    Image: "/Images/ivory.jpg",
    group: "blush",
  },
  {
    serialNumber: 1015,
    name: "Lux Beige",
    description:
      "Enhance your natural glow with our compact blush powder. This finely milled, lightweight formula blends seamlessly into your skin, providing a buildable, natural-looking flush. Perfect for on-the-go touch-ups, it delivers a soft, radiant finish that lasts all day.",
    price: 18,
    Image: "/Images/luxBeige.jpg",
    group: "blush",
  },
  {
    serialNumber: 1016,
    name: "Tan Buttercup",
    description:
      "Enhance your natural glow with our compact blush powder. This finely milled, lightweight formula blends seamlessly into your skin, providing a buildable, natural-looking flush. Perfect for on-the-go touch-ups, it delivers a soft, radiant finish that lasts all day.",
    price: 18,
    Image: "/Images/TanButtercup.jpg",
    group: "blush",
  },
  {
    serialNumber: 1017,
    name: "Rustic Blush",
    description:
      "Enhance your natural glow with our compact blush powder. This finely milled, lightweight formula blends seamlessly into your skin, providing a buildable, natural-looking flush. Perfect for on-the-go touch-ups, it delivers a soft, radiant finish that lasts all day.",
    price: 18,
    Image: "/Images/rusticBlush.jpg",
    group: "blush",
  },
  {
    serialNumber: 1018,
    name: "Sunset Peach",
    description:
      "Enhance your natural glow with our compact blush powder. This finely milled, lightweight formula blends seamlessly into your skin, providing a buildable, natural-looking flush. Perfect for on-the-go touch-ups, it delivers a soft, radiant finish that lasts all day.",
    price: 18,
    Image: "/Images/sunsetPeach.jpg",
    group: "blush",
  },
  {
    serialNumber: 1019,
    name: "Soft Apricot",
    description:
      "Enhance your natural glow with our compact blush powder. This finely milled, lightweight formula blends seamlessly into your skin, providing a buildable, natural-looking flush. Perfect for on-the-go touch-ups, it delivers a soft, radiant finish that lasts all day.",
    price: 18,
    Image: "/Images/softApricot.jpg",
    group: "blush",
  },
  {
    serialNumber: 1020,
    name: "Topical Sunrise",
    description:
      "Enhance your natural glow with our compact blush powder. This finely milled, lightweight formula blends seamlessly into your skin, providing a buildable, natural-looking flush. Perfect for on-the-go touch-ups, it delivers a soft, radiant finish that lasts all day.",
    price: 18,
    Image: "/Images/topicalSunriseblush.jpg",
    group: "blush",
  },
  {
    serialNumber: 1021,
    name: "Hot Hibiscus",
    description:
      "Experience bold, head-turning color with our intense nail polish. This high-impact formula delivers vivid, long-lasting shades with a single stroke. Its quick-drying, chip-resistant finish ensures your nails look flawless and vibrant for days, making a statement with every gesture.",
    price: 8,
    Image: "/Images/hotHibiscus.jpg",
    group: "nails",
  },
  {
    serialNumber: 1022,
    name: "Summer Fizz",
    description:
      "Experience bold, head-turning color with our intense nail polish. This high-impact formula delivers vivid, long-lasting shades with a single stroke. Its quick-drying, chip-resistant finish ensures your nails look flawless and vibrant for days, making a statement with every gesture.",
    price: 8,
    Image: "/Images/summerFizz.jpg",
    group: "nails",
  },
  {
    serialNumber: 1023,
    name: "Fuchsia Fusion",
    description:
      "Experience bold, head-turning color with our intense nail polish. This high-impact formula delivers vivid, long-lasting shades with a single stroke. Its quick-drying, chip-resistant finish ensures your nails look flawless and vibrant for days, making a statement with every gesture.",
    price: 8,
    Image: "/Images/fuchsiaFusion.jpg",
    group: "nails",
  },
  {
    serialNumber: 1024,
    name: "Pink Blaze",
    description:
      "Experience bold, head-turning color with our intense nail polish. This high-impact formula delivers vivid, long-lasting shades with a single stroke. Its quick-drying, chip-resistant finish ensures your nails look flawless and vibrant for days, making a statement with every gesture.",
    price: 8,
    Image: "/Images/pinkBlaze.jpg",
    group: "nails",
  },
  {
    serialNumber: 1025,
    name: "Cherry Bomb",
    description:
      "Experience bold, head-turning color with our intense nail polish. This high-impact formula delivers vivid, long-lasting shades with a single stroke. Its quick-drying, chip-resistant finish ensures your nails look flawless and vibrant for days, making a statement with every gesture.",
    price: 8,
    Image: "/Images/cherryBomb.jpg",
    group: "nails",
  },
  {
    serialNumber: 1026,
    name: "Lash Revolution",
    description:
      "Transform your lashes with Lash Revolution Mascara, the ultimate solution for achieving revolutionary volume, length, and definition. Created for those who demand the best, this mascara delivers unparalleled performance and stunning results with every application",
    price: 14,
    Image: "/Images/lashRevolution.jpg",
    group: "mascara",
  },
  {
    serialNumber: 1027,
    name: "Dramatic Definition",
    description:
      "Unlock the secret to full, dramatic lashes with our Lash Revolution Mascara. This high-impact formula is designed to amplify your lashes with rich, buildable volume and intense color, providing a bold, eye-catching look that lasts all day.",
    price: 14,
    Image: "/Images/dramaticDefinition.jpg",
    group: "mascara",
  },
  {
    serialNumber: 1028,
    name: "Fierce Flutter",
    description:
      "Unleash the power of bold, dramatic lashes with Fierce Flutter Mascara. Designed for the modern woman who isn't afraid to stand out, this mascara delivers intense volume, stunning length, and captivating curl with every swipe.",
    price: 14,
    Image: "/Images/fierceFlutter.jpg",
    group: "mascara",
  },
  {
    serialNumber: 1029,
    name: "Desert Rose Set",
    description:
      "Discover your creativity with the Desert Rose eyeshadow palette, featuring 15 stunning shades in rich dark pinks and vibrant purples. This versatile collection offers an array of hues that blend seamlessly to create endless eye looks, from sultry and dramatic to soft and romantic. Each shade is designed to provide intense pigmentation and smooth application, allowing you to craft mesmerizing looks that last all day.",
    price: 22,
    Image: "/Images/desertRoseSet.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1030,
    name: "Bare Elegance Set",
    description:
      "Discover timeless beauty with the Bare Elegance palette. Featuring 9 soft pinks and nudes, this set offers versatile, buildable shades for both everyday and elegant looks. Perfect for enhancing your natural beauty with a touch of sophistication.",
    price: 28,
    Image: "/Images/bareEleganceSet.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1031,
    name: "Warm Rose",
    description:
      "Elevate your eye makeup game with our Luminous Eye Shadow Collection. This stunning range of shades is designed to bring out the best in your eyes, whether you prefer a natural look or a dramatic flair.",
    price: 10,
    Image: "/Images/warmRose.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1032,
    name: "Pink Driftwood",
    description:
      "Elevate your eye makeup game with our Luminous Eye Shadow Collection. This stunning range of shades is designed to bring out the best in your eyes, whether you prefer a natural look or a dramatic flair.",
    price: 10,
    Image: "/Images/pinkDriftwood.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1033,
    name: "Pink Melon",
    description:
      "Elevate your eye makeup game with our Luminous Eye Shadow Collection. This stunning range of shades is designed to bring out the best in your eyes, whether you prefer a natural look or a dramatic flair.",
    price: 10,
    Image: "/Images/pinkMelon.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1034,
    name: "Vanilla Cream",
    description:
      "Elevate your eye makeup game with our Luminous Eye Shadow Collection. This stunning range of shades is designed to bring out the best in your eyes, whether you prefer a natural look or a dramatic flair.",
    price: 10,
    Image: "/Images/vanillaCream.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1035,
    name: "Eclipse",
    description:
      "Elevate your eye makeup game with our Luminous Eye Shadow Collection. This stunning range of shades is designed to bring out the best in your eyes, whether you prefer a natural look or a dramatic flair.",
    price: 10,
    Image: "/Images/Eclipse.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1036,
    name: "Blue Lagoon",
    description:
      "Elevate your eye makeup game with our Luminous Eye Shadow Collection. This stunning range of shades is designed to bring out the best in your eyes, whether you prefer a natural look or a dramatic flair.",
    price: 10,
    Image: "/Images/blueLagoon.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1037,
    name: "Berry Bliss",
    description:
      "Elevate your eye makeup game with our Luminous Eye Shadow Collection. This stunning range of shades is designed to bring out the best in your eyes, whether you prefer a natural look or a dramatic flair.",
    price: 10,
    Image: "/Images/berrybliss.jpg",
    group: "eyeShadow",
  },
  {
    serialNumber: 1038,
    name: "Ivory",
    description:
      " Our lightweight, buildable foundation provides a flawless, natural finish that lasts all day. Infused with skin-loving ingredients, it hydrates and nourishes while offering customizable coverage.",
    price: 26,
    Image: "/Images/ivoryf.jpg",
    group: "foundation",
  },
  {
    serialNumber: 1039,
    name: "Light Beige",
    description:
      " Our lightweight, buildable foundation provides a flawless, natural finish that lasts all day. Infused with skin-loving ingredients, it hydrates and nourishes while offering customizable coverage.",
    price: 26,
    Image: "/Images/lightBeige.jpg",
    group: "foundation",
  },
  {
    serialNumber: 1040,
    name: "Peach",
    description:
      " Our lightweight, buildable foundation provides a flawless, natural finish that lasts all day. Infused with skin-loving ingredients, it hydrates and nourishes while offering customizable coverage.",
    price: 26,
    Image: "/Images/Peach.jpg",
    group: "foundation",
  },
  {
    serialNumber: 1041,
    name: "Beige",
    description:
      " Our lightweight, buildable foundation provides a flawless, natural finish that lasts all day. Infused with skin-loving ingredients, it hydrates and nourishes while offering customizable coverage.",
    price: 26,
    Image: "/Images/beige.jpg",
    group: "foundation",
  },
  {
    serialNumber: 1042,
    name: "Medium Dark",
    description:
      " Our lightweight, buildable foundation provides a flawless, natural finish that lasts all day. Infused with skin-loving ingredients, it hydrates and nourishes while offering customizable coverage.",
    price: 26,
    Image: "/Images/mediumDark.jpg",
    group: "foundation",
  },
  {
    serialNumber: 1043,
    name: "Dark",
    description:
      " Our lightweight, buildable foundation provides a flawless, natural finish that lasts all day. Infused with skin-loving ingredients, it hydrates and nourishes while offering customizable coverage.",
    price: 26,
    Image: "/Images/dark.jpg",
    group: "foundation",
  },
  {
    serialNumber: 1044,
    name: "Deep Dark",
    description:
      " Our lightweight, buildable foundation provides a flawless, natural finish that lasts all day. Infused with skin-loving ingredients, it hydrates and nourishes while offering customizable coverage.",
    price: 26,
    Image: "/Images/deepDark.jpg",
    group: "foundation",
  },
];
export const getProducts = () => products;

export const getProductByserialNumber = (productserialNumber) =>
  products.find((product) => product.serialNumber === productserialNumber);

export const getProductsByGroup = (group) => 
  products.filter((product) => product.group === group);
