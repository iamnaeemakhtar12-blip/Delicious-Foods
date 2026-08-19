export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "secret-to-perfect-zinger-burger",
    title: "The Secret to the Perfect Zinger Burger",
    excerpt: "Ever wondered what makes our Zinger burgers so irresistibly crispy? We're taking you behind the scenes to show you our unique marination process.",
    content: "At Delicious Foods, our Zinger burgers are our signature item. The secret lies not just in the frying, but in the 24-hour buttermilk marination and our proprietary blend of 11 herbs and spices. When you bite into our Zinger, you're experiencing a recipe perfected over years of dedication to fast food excellence.",
    coverImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=80",
    date: "2023-10-15",
    author: "Head Chef Ali",
    tags: ["Burgers", "Behind the Scenes", "Recipes"]
  },
  {
    slug: "top-5-pizza-flavors-wah-cantt",
    title: "Top 5 Pizza Flavors You Must Try in Wah Cantt",
    excerpt: "From classic Margherita to our fully loaded Crown Crust, discover the fan-favorite pizzas that keep our customers coming back.",
    content: "Pizza is a universal language, but local flavors make it special. Our top sellers include the Spicy Tikka Pizza, which brings traditional Pakistani BBQ flavors to an Italian classic, and the legendary Fajita Sensation. Our dough is made fresh daily, ensuring a perfect crust every single time.",
    coverImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80",
    date: "2023-11-02",
    author: "Food Guide Team",
    tags: ["Pizza", "Local Favorites", "Food Guide"]
  },
  {
    slug: "why-fresh-ingredients-matter",
    title: "Why We Never Compromise on Fresh Ingredients",
    excerpt: "Fast food doesn't have to mean low quality. Learn about our commitment to sourcing the freshest local vegetables and premium meats.",
    content: "The foundation of a great meal is great ingredients. We source our poultry from certified farms and our vegetables from local markets in Punjab. This commitment to freshness means our salads are crisper, our meats are juicier, and our overall quality stands head and shoulders above standard fast food chains.",
    coverImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80",
    date: "2023-11-20",
    author: "Management",
    tags: ["Quality", "Fresh Food", "Our Values"]
  }
]
