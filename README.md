# Dashboard

A dashboard built with Next.js 15, React 19, and Tailwind CSS featuring dark/light themes, interactive charts, and responsive design.


## Tech Stack

- **Framework:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Charts:** Recharts

## Installation

```bash
# Clone the repository
git clone https://github.com/Rupak182/dashboard.git
cd dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Folder Structure

```
dashboard/
├── public/                     # Static assets
│   ├── main/                   # Main page assets
│   ├── navbar/                 # Navigation icons
│   ├── notification/           # Notification avatars & icons
│   ├── orders/                 # Orders page assets
│   └── sidebar/                # Sidebar icons
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles & scrollbar config
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Dashboard home page
│   │   └── orders/             # Orders page
│   │       ├── page.tsx        # Orders main page
│   │       ├── columns.tsx     # Table column definitions
│   │       ├── data-table.tsx  # Data table component
│   │       └── components/     # Table-specific components
│   ├── components/             # Reusable components
│   │   ├── SideBars.tsx        # Main layout wrapper
│   │   ├── AppSidebar.tsx      # Left navigation sidebar
│   │   ├── AppSidebar2.tsx     # Right notifications sidebar
│   │   ├── App*.tsx            # Chart & table components
│   │   ├── ui/                 # UI components (shadcn/ui library)
│   │   └── providers/          # Theme provider
│   ├── hooks/                  # Custom React hooks
│   │   └── use-mobile.ts       # Mobile detection hook
│   └── lib/                    # Utility functions
│       └── utils.ts            # Common utilities
├── components.json             # Shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Design Decisions & Development Notes

### Architecture
- **Component Structure:** Modular design with reusable UI components using shadcn/ui
- **Data Tables:** TanStack Table for sorting, filtering, and pagination
- **Theming:** Centralized dark/light theme management with next-themes
- **Pages:** Contains two pages - a home page and an orders page navigatable via left sidebar menu options



### Challenges & Solutions
- **Sidebars:** Default Sidebar component of shadcn doesn't support two sidebars at the same time, so I had to customize the default sidebar so that both right and left sidebars work properly. This GitHub issue helped me to do the necessary modifications: https://github.com/shadcn-ui/ui/issues/5834

- **Charts:** Charts like line chart and pie chart are not replicated exactly as in the design. One of the reasons was the unavailability of exact data points. I tried to make them resemble the design by using custom data points.


## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Acknowledgments

This dashboard design is based on [SnowUI Designs](https://snowui.byewind.com/). Visit their website for more such designs.

