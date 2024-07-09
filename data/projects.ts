export const projects = [
    {
        status: 'active',
        title: 'Compiler from Scratch',
        date: 'July 2024',
        github: 'https://github.com/c-gamble/rs-cpp-compiler',
        demo: '',
        visit: '',
        description:
            "I'm teaching myself about low-level operations by building a C++ compiler from scratch in Rust.",
        skills: ['rust', 'low-level', 'c++'],
    },
    {
        status: 'active',
        title: '=nil; Foundation Devnet',
        date: 'July 2024',
        github: '',
        demo: '',
        visit: 'https://nil.foundation/blog/post/public_roadmap',
        description:
            "I was selected to be a part of the =nil; Foundation Devnet, an exclusive cohort of builders working on vetting nil's new sharded approach to blockchain.",
        skills: ['rust', 'solidity', 'zero knowledge'],
    },
    {
        status: 'active',
        title: 'Ethereum Blinks',
        date: 'July 2024',
        github: '',
        demo: '',
        visit: 'https://solana.com/docs/advanced/actions#blinks',
        description:
            'I am building an EVM-compatible equivalent to Solana\'s newly-released blockchain links ("blinks"). They are intended to replace Farcaster frames and eventually I hope to migrate all of my Farcaster projects to this new tool once it\'s complete.',
        skills: ['solidity', 'typescript', 'reverse engineering'],
    },
    {
        status: 'complete',
        title: 'Statcaster',
        date: 'June 2024',
        github: 'https://github.com/c-gamble/statcaster',
        demo: 'https://www.youtube.com/embed/vOAnV7RZX7U?si=ENwCRJo0ayyoTr1l',
        visit: 'https://warpcast.com/~/developers/frames?url=https://statcaster-by-soft.vercel.app/frames/home',
        description:
            'I built a Farcaster Frames that allows users to create displays for their tokens with real-time statistics, including holders, total supply, and centralization.',
        skills: [
            'frames.js',
            'next.js',
            'typescript',
            'chainbase',
            'tokenomics',
        ],
    },
    {
        status: 'active',
        title: 'Zero-Knowledge Dark Pool',
        date: 'May 2024',
        github: '',
        demo: '',
        visit: 'https://bead-rocket-066.notion.site/Darkpool-DEX-c1dea6dae59b4554a5219dde92a117df',
        description:
            'I am on a team of three engineers and one PM working to develop a secure, scalable zero-knowledge dark pool for large-volume exchanges of cryptocurrency; seeking project funding from Aleo, MINA, and Poylgon.',
        skills: ['next.js', 'rust', 'zero knowledge'],
    },
    {
        status: 'complete',
        title: 'HFT Backtest',
        date: 'April 2024',
        github: 'https://github.com/quantsc/hftbacktest',
        demo: '',
        visit: '',
        description:
            "I helped build a backtesting platform for QuantSC's Algotrader project, which allowed us to develop a pairs trading algorithm that we deployed to Alpaca. We took inspiration from the existing hftbacktest library, but we needed to adopt it for equities trading since it was originally built for Binance futures.",
        skills: ['c++', 'python', 'financial markets'],
    },
    {
        status: 'complete',
        title: 'Fundcaster',
        date: 'April 2024',
        github: 'https://github.com/c-gamble/fundcaster-frames',
        demo: '',
        visit: 'https://warpcast.com/thesoftdao/0xc965013c',
        description:
            "I led a team at Soft DAO to develop a decentralized app on warpcast that allows users to create new ERC-20 tokens without leaving the application. I'm also building sale and aidrop tooling to simplify the token distribution process.",
        skills: ['solidity', 'frames.js', 'next.js', 'typescript'],
    },
    {
        status: 'complete',
        title: 'Uber Transit Sentimental Analysis',
        date: 'April 2024',
        github: 'https://github.com/c-gamble/tcg-uber-SA',
        demo: 'https://www.youtube.com/watch?v=jSlyg22vtPQ',
        visit: '',
        description:
            "I built a recyclable sentiment analysis pipeline to analyze consumer preferences across social media given a search query and set of search domains. I initially used it for a consulting project with Uber Transit through the Trojan Consulting Group, but it's now available for any use case.",
        skills: ['python', 'hugging face', 'nlp', 'web scraping'],
    },
    {
        status: 'complete',
        title: 'Govcaster - ETH Global 2024',
        date: 'March 2024',
        github: 'https://github.com/c-gamble/govcaster',
        demo: '',
        visit: '',
        description:
            'I developed a governance tool for the ETH Global hackathon that aims to boost participation in DAOs by providing entertaining summaries of proposals with supporting images.',
        skills: ['openai', 'frames.js', 'next.js', 'typescript'],
    },
    {
        status: 'active',
        title: 'Tribuni',
        date: 'March 2024',
        github: 'https://github.com/KenGuan666/tribuni',
        demo: 'https://www.youtube.com/watch?v=diIYwkldBZ4',
        visit: '',
        description:
            'I am engineering a Telegram bot that provides simplified access to Web 3.0 governance proposals by allowing users to subscribe to protocols, receive custom alerts, and interact with AI-generated summaries of protocol forums based on robust signal extraction methods.',
        skills: ['ux', 'system design', 'openai', 'ton', 'next.js'],
    },
    {
        status: 'complete',
        title: 'RCI Mental Health Database',
        date: 'December 2023',
        github: 'https://github.com/c-gamble/rci-mh-public-shared',
        demo: '',
        visit: 'https://www.rcimentalhealth.org/',
        description:
            'Over winter break, I worked with a local non-profit organization to develop a database that aggregates mental health resources in the Rochester, MN (my hometown) area. I also built an administrator portal that allows the organization to manage the database and add new resources as needed.',
        skills: ['next.js', 'typescript', 'mongodb', 'aws'],
    },
    {
        status: 'complete',
        title: 'Radiology MCP Toolkit',
        date: 'December 2023',
        github: 'https://github.com/c-gamble/radiology-mcp-toolkit',
        demo: '',
        visit: 'https://www.youtube.com/watch?v=tccprwxq74Q',
        description:
            'As part of one of my published works at the Mayo AI Lab, I built a toolkit for imaging researchers to easily integrate Mondrian conformal prediction into their existing deep learning pipelines.',
        skills: ['python', 'pytorch', 'deep learning', 'numpy', 'scikit-learn'],
    },
];

export const colors = new Map([
    [
        'rust',
        {
            darkTextColor: 'rgba(255, 168, 0, 1)',
            darkBackgroundColor: 'rgba(122, 56, 0, 0.3)',
            lightTextColor: 'rgba(146, 67, 0, 1)',
            lightBackgroundColor: 'rgba(243, 112, 0, 0.3)',
        },
    ],
    [
        'low-level',
        {
            darkTextColor: 'rgba(255, 170, 249, 1)',
            darkBackgroundColor: 'rgba(118, 57, 83, 0.3)',
            lightTextColor: 'rgba(142, 68, 100, 1)',
            lightBackgroundColor: 'rgba(236, 113, 166, 0.3)',
        },
    ],
    [
        'c++',
        {
            darkTextColor: 'rgba(83, 255, 255, 1)',
            darkBackgroundColor: 'rgba(28, 94, 119, 0.3)',
            lightTextColor: 'rgba(33, 112, 143, 1)',
            lightBackgroundColor: 'rgba(55, 187, 238, 0.3)',
        },
    ],
    [
        'solidity',
        {
            darkTextColor: 'rgba(255, 131, 255, 1)',
            darkBackgroundColor: 'rgba(112, 44, 102, 0.3)',
            lightTextColor: 'rgba(134, 52, 122, 1)',
            lightBackgroundColor: 'rgba(224, 87, 203, 0.3)',
        },
    ],
    [
        'zero knowledge',
        {
            darkTextColor: 'rgba(117, 255, 69, 1)',
            darkBackgroundColor: 'rgba(39, 86, 23, 0.3)',
            lightTextColor: 'rgba(47, 103, 28, 1)',
            lightBackgroundColor: 'rgba(78, 172, 46, 0.3)',
        },
    ],
    [
        'typescript',
        {
            darkTextColor: 'rgba(114, 255, 255, 1)',
            darkBackgroundColor: 'rgba(38, 88, 98, 0.3)',
            lightTextColor: 'rgba(46, 105, 117, 1)',
            lightBackgroundColor: 'rgba(76, 175, 195, 0.3)',
        },
    ],
    [
        'reverse engineering',
        {
            darkTextColor: 'rgba(96, 255, 150, 1)',
            darkBackgroundColor: 'rgba(32, 86, 50, 0.3)',
            lightTextColor: 'rgba(38, 103, 60, 1)',
            lightBackgroundColor: 'rgba(64, 172, 100, 0.3)',
        },
    ],
    [
        'frames.js',
        {
            darkTextColor: 'rgba(255, 188, 255, 1)',
            darkBackgroundColor: 'rgba(118, 63, 127, 0.3)',
            lightTextColor: 'rgba(142, 75, 152, 1)',
            lightBackgroundColor: 'rgba(236, 125, 253, 0.3)',
        },
    ],
    [
        'next.js',
        {
            darkTextColor: 'rgba(255, 255, 84, 1)',
            darkBackgroundColor: 'rgba(100, 96, 28, 0.3)',
            lightTextColor: 'rgba(120, 115, 34, 1)',
            lightBackgroundColor: 'rgba(200, 192, 56, 0.3)',
        },
    ],
    [
        'chainbase',
        {
            darkTextColor: 'rgba(117, 255, 176, 1)',
            darkBackgroundColor: 'rgba(39, 117, 59, 0.3)',
            lightTextColor: 'rgba(47, 140, 70, 1)',
            lightBackgroundColor: 'rgba(78, 234, 117, 0.3)',
        },
    ],
    [
        'tokenomics',
        {
            darkTextColor: 'rgba(129, 255, 117, 1)',
            darkBackgroundColor: 'rgba(43, 125, 39, 0.3)',
            lightTextColor: 'rgba(52, 149, 47, 1)',
            lightBackgroundColor: 'rgba(86, 249, 78, 0.3)',
        },
    ],
    [
        'python',
        {
            darkTextColor: 'rgba(255, 255, 98, 1)',
            darkBackgroundColor: 'rgba(89, 97, 33, 0.3)',
            lightTextColor: 'rgba(106, 116, 39, 1)',
            lightBackgroundColor: 'rgba(177, 194, 65, 0.3)',
        },
    ],
    [
        'financial markets',
        {
            darkTextColor: 'rgba(50, 255, 96, 1)',
            darkBackgroundColor: 'rgba(17, 103, 32, 0.3)',
            lightTextColor: 'rgba(20, 123, 38, 1)',
            lightBackgroundColor: 'rgba(33, 205, 64, 0.3)',
        },
    ],
    [
        'hugging face',
        {
            darkTextColor: 'rgba(176, 222, 152, 1)',
            darkBackgroundColor: 'rgba(59, 74, 51, 0.3)',
            lightTextColor: 'rgba(70, 89, 61, 1)',
            lightBackgroundColor: 'rgba(117, 148, 101, 0.3)',
        },
    ],
    [
        'nlp',
        {
            darkTextColor: 'rgba(189, 255, 114, 1)',
            darkBackgroundColor: 'rgba(63, 107, 38, 0.3)',
            lightTextColor: 'rgba(76, 128, 46, 1)',
            lightBackgroundColor: 'rgba(126, 213, 76, 0.3)',
        },
    ],
    [
        'web scraping',
        {
            darkTextColor: 'rgba(234, 245, 15, 1)',
            darkBackgroundColor: 'rgba(78, 82, 5, 0.3)',
            lightTextColor: 'rgba(94, 98, 6, 1)',
            lightBackgroundColor: 'rgba(156, 163, 10, 0.3)',
        },
    ],
    [
        'openai',
        {
            darkTextColor: 'rgba(36, 255, 54, 1)',
            darkBackgroundColor: 'rgba(12, 118, 18, 0.3)',
            lightTextColor: 'rgba(14, 141, 22, 1)',
            lightBackgroundColor: 'rgba(24, 235, 36, 0.3)',
        },
    ],
    [
        'ux',
        {
            darkTextColor: 'rgba(255, 185, 167, 1)',
            darkBackgroundColor: 'rgba(121, 62, 56, 0.3)',
            lightTextColor: 'rgba(145, 74, 67, 1)',
            lightBackgroundColor: 'rgba(241, 123, 111, 0.3)',
        },
    ],
    [
        'system design',
        {
            darkTextColor: 'rgba(171, 255, 180, 1)',
            darkBackgroundColor: 'rgba(57, 110, 60, 0.3)',
            lightTextColor: 'rgba(68, 132, 72, 1)',
            lightBackgroundColor: 'rgba(114, 220, 120, 0.3)',
        },
    ],
    [
        'ton',
        {
            darkTextColor: 'rgba(53, 255, 255, 1)',
            darkBackgroundColor: 'rgba(18, 116, 102, 0.3)',
            lightTextColor: 'rgba(21, 139, 122, 1)',
            lightBackgroundColor: 'rgba(35, 232, 204, 0.3)',
        },
    ],
    [
        'mongodb',
        {
            darkTextColor: 'rgba(255, 249, 204, 1)',
            darkBackgroundColor: 'rgba(102, 83, 68, 0.3)',
            lightTextColor: 'rgba(122, 100, 82, 1)',
            lightBackgroundColor: 'rgba(204, 166, 136, 0.3)',
        },
    ],
    [
        'aws',
        {
            darkTextColor: 'rgba(255, 117, 255, 1)',
            darkBackgroundColor: 'rgba(125, 39, 93, 0.3)',
            lightTextColor: 'rgba(150, 47, 112, 1)',
            lightBackgroundColor: 'rgba(250, 78, 186, 0.3)',
        },
    ],
    [
        'pytorch',
        {
            darkTextColor: 'rgba(174, 255, 56, 1)',
            darkBackgroundColor: 'rgba(58, 120, 19, 0.3)',
            lightTextColor: 'rgba(70, 144, 22, 1)',
            lightBackgroundColor: 'rgba(116, 240, 37, 0.3)',
        },
    ],
    [
        'deep learning',
        {
            darkTextColor: 'rgba(255, 255, 159, 1)',
            darkBackgroundColor: 'rgba(114, 91, 53, 0.3)',
            lightTextColor: 'rgba(136, 109, 64, 1)',
            lightBackgroundColor: 'rgba(227, 182, 106, 0.3)',
        },
    ],
    [
        'numpy',
        {
            darkTextColor: 'rgba(255, 255, 255, 1)',
            darkBackgroundColor: 'rgba(103, 88, 120, 0.3)',
            lightTextColor: 'rgba(123, 106, 144, 1)',
            lightBackgroundColor: 'rgba(205, 176, 240, 0.3)',
        },
    ],
    [
        'scikit-learn',
        {
            darkTextColor: 'rgba(74, 255, 255, 1)',
            darkBackgroundColor: 'rgba(25, 112, 111, 0.3)',
            lightTextColor: 'rgba(29, 134, 133, 1)',
            lightBackgroundColor: 'rgba(49, 223, 222, 0.3)',
        },
    ],
]);
