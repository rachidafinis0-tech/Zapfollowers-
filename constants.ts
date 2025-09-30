
import { PlatformData, Platform, Testimonial, FAQItem } from './types';
import { InstagramIcon, TikTokIcon, FacebookIcon, UsersIcon, ThumbsUpIcon, EyeIcon } from './components/IconComponents';

export const PLATFORMS_DATA: PlatformData[] = [
  {
    name: Platform.Instagram,
    icon: InstagramIcon,
    services: [
      { id: 'ig-followers', name: 'Followers', description: 'High-quality followers to boost your profile.', price: 9.99, unit: '1000', icon: UsersIcon },
      { id: 'ig-likes', name: 'Likes', description: 'Instant likes on your posts to increase engagement.', price: 4.99, unit: '1000', icon: ThumbsUpIcon },
      { id: 'ig-views', name: 'Views', description: 'Boost your video views and reach a wider audience.', price: 2.99, unit: '1000', icon: EyeIcon },
    ],
  },
  {
    name: Platform.TikTok,
    icon: TikTokIcon,
    services: [
      { id: 'tt-followers', name: 'Followers', description: 'Gain genuine followers to go viral on TikTok.', price: 12.99, unit: '1000', icon: UsersIcon },
      { id: 'tt-likes', name: 'Likes', description: 'Increase your video likes and get on the FYP.', price: 5.99, unit: '1000', icon: ThumbsUpIcon },
      { id: 'tt-views', name: 'Views', description: 'Amplify your video views instantly.', price: 1.99, unit: '1000', icon: EyeIcon },
    ],
  },
  {
    name: Platform.Facebook,
    icon: FacebookIcon,
    services: [
      { id: 'fb-followers', name: 'Page Followers', description: 'Grow your Facebook page audience effectively.', price: 14.99, unit: '1000', icon: UsersIcon },
      { id: 'fb-likes', name: 'Post Likes', description: 'Get more likes on your Facebook posts.', price: 6.99, unit: '1000', icon: ThumbsUpIcon },
      { id: 'fb-views', name: 'Video Views', description: 'Increase views on your Facebook videos.', price: 3.99, unit: '1000', icon: EyeIcon },
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah K.',
    handle: '@styleby_sarah',
    avatarUrl: 'https://picsum.photos/id/237/100',
    text: 'ZapFollowers changed the game for my influencer career. The growth was organic and the service was impeccable. Highly recommended!',
  },
  {
    id: 2,
    name: 'Mike P.',
    handle: '@mikep_fitness',
    avatarUrl: 'https://picsum.photos/id/238/100',
    text: 'I was skeptical at first, but the results speak for themselves. My engagement has skyrocketed since I started using their services.',
  },
  {
    id: 3,
    name: 'Digital Nomads',
    handle: '@digital_escape',
    avatarUrl: 'https://picsum.photos/id/239/100',
    text: 'As a brand, reaching a wider audience is key. ZapFollowers helped us achieve our quarterly goals in just a month. Incredible ROI!',
  },
];

export const FAQ_DATA: FAQItem[] = [
    {
        id: 1,
        question: 'Are the followers, likes, and views real?',
        answer: 'Yes, we provide high-quality engagement from real-looking profiles. While they are primarily for social proof, they are safe and look authentic, helping to attract more organic users.'
    },
    {
        id: 2,
        question: 'Is it safe for my account?',
        answer: 'Absolutely. Our methods are 100% safe and comply with the terms of service of all social media platforms. We never ask for your password.'
    },
    {
        id: 3,
        question: 'How long does it take to receive my order?',
        answer: 'Delivery starts almost instantly after your purchase. Most orders are completed within a few hours, but larger orders may take up to 24-48 hours to ensure a natural delivery speed.'
    },
    {
        id: 4,
        question: 'What if I am not satisfied with the service?',
        answer: 'We offer a 100% satisfaction guarantee. If you are not happy with your purchase or if we fail to deliver, you can contact our 24/7 support for a refill or a full refund.'
    }
];