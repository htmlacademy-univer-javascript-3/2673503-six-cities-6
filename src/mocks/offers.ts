import {Offer, OfferType} from '@/api/types.ts';
import {cities} from '@/mocks/cities.ts';

export const offers: Offer[] = [
  {
    id: 'ddfde813-2d7b-41f5-b1b4-f6371d4a6e77',
    type: OfferType.Apartment,
    isFavorite: true,
    isPremium: true,
    price: 120,
    rating: 4,
    title: 'Beautiful & luxurious apartment at great location',
    previewImage: 'img/apartment-01.jpg',
    description: 'This beautiful and luxurious apartment is located in a prime location with stunning views. It is perfect for a relaxing getaway or a romantic weekend.',
    bedrooms: 5,
    maxAdults: 3,
    city: cities[0]
  },
  {
    id: '1c16024c-7b05-497a-a6d7-3d1fa32a6d27',
    type: OfferType.Room,
    isFavorite: true,
    isPremium: false,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    description: 'Experience the rustic charm of this wood and stone place. Perfect for nature lovers and those seeking a peaceful retreat.',
    bedrooms: 3,
    maxAdults: 1,
    city: cities[0]
  },
  {
    id: '092c6e53-e944-472e-bb8f-ddf222ebfb5d',
    type: OfferType.Apartment,
    isFavorite: false,
    isPremium: false,
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg',
    description: 'Enjoy the picturesque views of the canal from this lovely apartment on Prinsengracht. Close to all the major attractions and amenities.',
    bedrooms: 6,
    maxAdults: 5,
    city: cities[1]
  },
  {
    id: 'ebe277b0-dd20-4267-a89b-1d74a6a72246',
    type: OfferType.Apartment,
    isFavorite: true,
    isPremium: true,
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg',
    description: 'Indulge in luxury and comfort in this cozy apartment with a big bed. Perfect for a relaxing stay and a good night\'s sleep.',
    bedrooms: 13,
    maxAdults: 10,
    city: cities[1]
  }
];
