import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.social.about
      },
      {
        name: 'team',
        link: link.social.team
      },
      {
        name: 'blog',
        link: link.social.blog
      },
      {
        name: 'blog detail',
        link: link.social.blogDetail
      }
    ],
  },
  {
    id: 'form',
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.social.login
      },
      {
        name: 'register',
        link: link.social.register
      },
      {
        name: 'contact',
        link: link.social.contact
      },
      {
        name: 'contact map',
        link: link.social.contactMap
      }
    ],
  },
  {
    id: 'items',
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.social.card
      },
      {
        name: 'product',
        link: link.social.product
      },
      {
        name: 'product detail',
        link: link.social.productDetail
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.social.pricing
      },
      {
        name: 'faq',
        link: link.social.faq
      },
      {
        name: 'maintenance',
        link: link.social.maintenance
      },
      {
        name: 'coming soon',
        link: link.social.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
