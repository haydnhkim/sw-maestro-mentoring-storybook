import type { Meta, StoryObj } from '@storybook/nextjs';
import { http, HttpResponse, delay } from 'msw';
import ShopCards from './shop-cards';

const meta: Meta<typeof ShopCards> = {
  component: ShopCards,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof ShopCards>;

// 👇 The mocked data that will be used in the story
const TestData = [
  {
    imageUrl: '/images/applications-image-01.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 4.2,
    price: 89,
  },
  {
    imageUrl: '/images/applications-image-02.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 3.9,
    price: 49,
  },
  {
    imageUrl: '/images/applications-image-03.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 4.6,
    price: 129,
  },
  {
    imageUrl: '/images/applications-image-04.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 4.7,
    price: 129,
  },
];

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:3000/api/shop', () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:3000/api/shop', async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
