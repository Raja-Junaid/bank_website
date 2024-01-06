import { featIcon1, featIcon2, featIcon3, featIcon4, tick, airbnb, coinbase, binance, dropbox, people1, people2, people3, people4, people5, facebookIcon, instagramIcon, quotes, twitterIcon } from '../assets';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
]

export const stats = [
  {
    id: "stat-1",
    number: "3800+",
    title: "User Active",
  },
  {
    id: "stat-2",
    number: "230+",
    title: "Transaction"
  },
  {
    id: "stat-3",
    number: "$230M+",
    title: "Trusted By Company"
  },
]

export const features = [
  {
    id: "feat-1",
    icon: featIcon1,
    title: "Dashboard",
    content: "The best credit cards entice with enticing promotions, prizes providing a rewarding experience for cardholders."
  },
  {
    id: "feat-2",
    icon: featIcon2,
    title: "Statistics",
    content: "We prioritize proactive security measures for your information and transactions, ensuring a worry-free experience."
  },
  {
    id: "feat-3",
    icon: featIcon3,
    title: "Bank Account",
    content: "A balance transfer card can save you money in interest charges, providing a cost-effective solution."
  },
  {
    id: "feat-4",
    icon: featIcon4,
    title: "Messages",
    content: "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque fusce ipsum orci rhoncus."
  },
]

export const pricing = [
  {
    id: "1",
    category: "Lite",
    price: "$19",
    month: "/mo",
    desc1: "Up to",
    num: '5',
    desc2: 'shared spaces',
    list: [
      {
        id: "id-1",
        icon: tick,
        title: "Access to all features",
      },
      {
        id: "id-2",
        icon: tick,
        title: "One-click instant sharing",
      },
      {
        id: "id-3",
        icon: tick,
        title: "Unlimited archived spaces",
      },
      {
        id: "id-4",
        icon: tick,
        title: "Email & chat support",
      },
      {
        id: "id-5",
        icon: tick,
        title: "Launch Support",
      },
    ],
    btnTitle: "Start free trial",
  },
  {
    id: "1",
    category: "Pro",
    price: "$39",
    month: "/mo",
    desc1: "Up to",
    num: "50",
    desc2: "shared spaces",
    list: [
      {
        id: "id-1",
        icon: tick,
        title: "Access to all features",
      },
      {
        id: "id-2",
        icon: tick,
        title: "One-click instant sharing",
      },
      {
        id: "id-3",
        icon: tick,
        title: "Unlimited archived spaces",
      },
      {
        id: "id-4",
        icon: tick,
        title: "Email & chat support",
      },
      {
        id: "id-5",
        icon: tick,
        title: "Launch Support",
      },
    ],
    btnTitle: "Start free trial",
  },
  {
    id: "1",
    category: "Premium",
    price: "$69",
    month: "/mo",
    desc1: "Up to",
    num: "120",
    desc2: "shared spaces",
    list: [
      {
        id: "id-1",
        icon: tick,
        title: "Access to all features",
      },
      {
        id: "id-2",
        icon: tick,
        title: "One-click instant sharing",
      },
      {
        id: "id-3",
        icon: tick,
        title: "Unlimited archived spaces",
      },
      {
        id: "id-4",
        icon: tick,
        title: "Email & chat support",
      },
      {
        id: "id-5",
        icon: tick,
        title: "Launch Support",
      },
    ],
    btnTitle: "Start free trial",
  },
]

export const companies = [
  {
    id: 'company-1',
    logo: airbnb,
  },
  {
    id: 'company-2',
    logo: dropbox,
  },
  {
    id: 'company-3',
    logo: binance,
  },
  {
    id: 'company-4',
    logo: coinbase,
  },
]

export const testimonials = [
  {
    id: 'test-1',
    icon: quotes,
    avatar: people1,
    name: 'Herman Jensen',
    work: "Founder & Leader",
    content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. Simplified banking, maximum convenience!",
  },
  {
    id: 'test-2',
    icon: quotes,
    avatar: people2,
    name: 'Steve Mark',
    work: "Founder & Leader",
    content: "Exceptional service and personalized attention; this bank goes above and beyond to meet my financial needs.",
  },
  {
    id: 'test-3',
    icon: quotes,
    avatar: people3,
    name: 'Kenn Gallagher',
    work: "Founder & Leader",
    content: "It is usually people in the money business, finance, and international trade that are really rich. Quick, efficient, and customer-focused.",
  },
  {
    id: 'test-4',
    icon: quotes,
    avatar: people4,
    name: 'Hanna James',
    work: "Manager",
    content: "They delivers a superior online banking experience, making banking easy with dedication to excellence.",
  },
  {
    id: 'test-5',
    icon: quotes,
    avatar: people5,
    name: 'Ronne Missy',
    work: "Founder & Leader",
    content: "I trust this bank with my financial future. Money makes your life easier. If you're lucky to have it, you're lucky.",
  },
]

export const faqs = [
  {
    id: 'faq-1',
    ques: "How do I open an account?",
    ans: "Visit our website or a branch to start the hassle-free account opening process online or with the assistance of our friendly staff.",
  },
  {
    id: 'faq-2',
    ques: "Can I access my account from my mobile device?",
    ans: "Absolutely! Download our mobile banking app for secure and convenient access to your accounts anytime, anywhere.",
  },
  {
    id: 'faq-3',
    ques: "What is the minimum balance requirement?",
    ans: "Our account options cater to various needs; check our account types to find one that suits you, some with no minimum balance requirements.",
  },
  {
    id: 'faq-4',
    ques: "What fees are associated with your services?",
    ans: "Explore our transparent fee structure on our website or speak to our representatives to understand the costs associated with our services.",
  },
]

export const socialIcons = [
  {
    id: 'social-1',
    icon: facebookIcon,
  },
  {
    id: 'social-2',
    icon: instagramIcon,
  },
  {
    id: 'social-3',
    icon: twitterIcon,
  },
]

export const footerLinks = [
  {
    id: 'footer-1',
    title: "Useful Links",
    links: [
      {
        title: "Content",
      },
      {
        title: "How it Works",
      },
      {
        title: "Create",
      },
      {
        title: "Explore",
      },
      {
        title: "Terms & Services",
      },
    ]
  },
  {
    id: 'footer-2',
    title: "Our Services",
    links: [
      {
        title: "Internet Banking",
      },
      {
        title: "Mobile banking",
      },
      {
        title: "Rules and Charges",
      },
      {
        title: "Bank Security",
      },
    ]
  },
  {
    id: 'footer-3',
    title: "Community",
    links: [
      {
        title: "Help Center",
      },
      {
        title: "Partners",
      },
      {
        title: "Suggestions",
      },
      {
        title: "Blog",
      },
      {
        title: "Newsletters",
      },
    ]
  },
  {
    id: 'footer-4',
    title: "Partner",
    links: [
      {
        title: "Our Partner",
      },
      {
        title: "Become a Partner",
      },
    ]
  },
]