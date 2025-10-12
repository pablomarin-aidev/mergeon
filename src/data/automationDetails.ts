import { AutomationDetail } from '../types';

export const automationDetails: AutomationDetail[] = [
  {
    id: '1',
    title: 'AI Chatbots (Website Integration)',
    overview: 'Give life to your website with intelligent chatbots that interact with your visitors 24/7, providing instant answers and guiding them through your services.',
    detailedDescription: 'AI chatbots for websites are designed to act as the first point of contact for potential customers. Instead of waiting for human attention, visitors can instantly ask questions about services, pricing, or support, and get immediate, AI-driven answers.',
    capabilities: [
      'Natural conversations powered by advanced LLMs',
      'Integration with your website via widget or pop-up chat',
      'FAQ automation: answers to your most frequent queries',
      'Lead capture: collect visitor emails, phone numbers, or interests automatically',
      'Multi-language support (English, Spanish, etc.)'
    ],
    useCases: [
      'Service companies capturing leads',
      'E-commerce guiding customers to purchase',
      'Educational platforms answering student queries'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$99/month',
        description: 'Basic FAQ chatbot'
      },
      {
        name: 'Pro',
        price: '$249/month',
        description: 'Custom-trained chatbot with lead capture'
      },
      {
        name: 'Enterprise',
        price: '$499+/month',
        description: 'Full integration with CRM + analytics dashboard'
      }
    ]
  },
  {
    id: '2',
    title: 'WhatsApp Bots',
    overview: 'Automate your customer interactions on the world\'s most used messaging app. From sales to support, your bot is always active on WhatsApp.',
    detailedDescription: 'WhatsApp bots allow businesses to serve their customers directly in the app they use every day. These bots can handle thousands of messages simultaneously while maintaining a natural conversational tone.',
    capabilities: [
      'Automated responses to FAQs',
      'Order tracking and confirmations',
      'Appointment booking and reminders',
      'Personalized marketing campaigns (with opt-in)',
      'Seamless integration with payment gateways'
    ],
    useCases: [
      'Restaurants managing reservations',
      'Clinics scheduling and confirming appointments',
      'Online stores providing order updates',
      'Agencies offering instant quotes'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$149/month',
        description: 'FAQ + basic automation'
      },
      {
        name: 'Pro',
        price: '$299/month',
        description: 'Multi-step workflows, order tracking'
      },
      {
        name: 'Enterprise',
        price: '$799+/month',
        description: 'Integration with CRM + advanced personalization'
      }
    ]
  },
  {
    id: '3',
    title: 'RAG Systems (Retrieval-Augmented Generation)',
    overview: 'All your automations can be powered with RAG: AI connected to your own documents, data, and knowledge base for precise, tailored answers.',
    detailedDescription: 'RAG (Retrieval-Augmented Generation) ensures that every automation—whether it\'s a chatbot, a WhatsApp bot, or customer service automation—doesn\'t rely only on general AI knowledge, but also on your company\'s data.',
    capabilities: [
      'Upload PDFs, manuals, contracts, FAQs, or product catalogs',
      'AI trained on your private information',
      'Always up-to-date knowledge: add or remove documents anytime',
      'Secure storage and restricted access'
    ],
    useCases: [
      'Customer support with instant answers from company policies',
      'Sales bots that know your full product catalog',
      'HR chatbots answering questions about company benefits or policies'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$199/month',
        description: 'Basic RAG with up to 200 documents'
      },
      {
        name: 'Pro',
        price: '$399/month',
        description: 'Scalable to thousands of documents, real-time updates'
      },
      {
        name: 'Enterprise',
        price: '$999+/month',
        description: 'Dedicated infrastructure, advanced security, analytics'
      }
    ]
  },
  {
    id: '4',
    title: 'Workflow Automation',
    overview: 'Automate your repetitive tasks and connect all your tools in one seamless workflow. Save hours of manual work every week.',
    detailedDescription: 'Workflow automation connects your existing software tools and removes the need for repetitive manual tasks. Using tools like n8n, Zapier, or custom APIs, MERGEON builds robust pipelines that move information automatically across platforms.',
    capabilities: [
      'Automatically adding new website leads to your CRM',
      'Sending invoices when a customer makes a payment',
      'Notifying your team in Slack when new sales happen',
      'Integrating Google Sheets with email marketing tools'
    ],
    useCases: [
      'Marketing teams automating campaigns',
      'Sales teams syncing leads across platforms',
      'Business owners reducing admin overhead'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$99/month',
        description: 'Up to 3 automated workflows'
      },
      {
        name: 'Pro',
        price: '$249/month',
        description: 'Up to 10 workflows + monitoring'
      },
      {
        name: 'Enterprise',
        price: '$599+/month',
        description: 'Custom workflows, advanced integrations'
      }
    ]
  },
  {
    id: '5',
    title: 'Customer Service Automations',
    overview: 'Automate customer service across platforms: website, WhatsApp, or both. Reduce costs and answer instantly.',
    detailedDescription: 'Customer service automations unify the power of AI chatbots and WhatsApp bots, applying them directly to your support channels. These solutions provide quick answers, reduce response times, and free up your human team to focus on complex cases.',
    capabilities: [
      'AI answering tickets automatically',
      'Escalation system: bot handles basic cases, humans take advanced ones',
      'Multichannel: website, WhatsApp, Facebook Messenger',
      'Analytics: measure response time, satisfaction, and bot efficiency'
    ],
    useCases: [
      'E-commerce businesses handling order-related questions',
      'Service companies answering basic troubleshooting',
      'Any business reducing customer support load'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$199/month',
        description: 'FAQ-based support bot'
      },
      {
        name: 'Pro',
        price: '$349/month',
        description: 'Multichannel bot + ticket escalation'
      },
      {
        name: 'Enterprise',
        price: '$899+/month',
        description: 'Advanced analytics + CRM integration'
      }
    ]
  }
];