import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Delicious Foods Wah Cantt',
    short_name: 'Delicious Foods',
    description: 'Premium fast food in Wah Cantt - Pizzas, Burgers, Shawarmas',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#F97316', // Orange-500
    icons: [
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
