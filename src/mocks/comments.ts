import {Comment} from '@/api/types.ts';

export const comments: Comment[] = [
  {
    id: '7d36c052-027f-4504-80de-c0a9c23204cb',
    comment: 'My name is Bond. Dmitry Bond.',
    date: '2020-01-08T14:13:56.569Z',
    rating: 5,
    user: {
      name: 'Dmitry Bond',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
  }
];
