## Blue Rose Nails and Beauty – Project Overview

Blue Rose Nails and Beauty is a modern, full-stack web project built with RedwoodJS—a React-based framework that leverages GraphQL for efficient data handling.

Tech Stack & Features

🚀 Framework: RedwoodJS (React + GraphQL)
📡 Hosting: Vercel for seamless deployment
🗄️ Database: Supabase (Postgres) for handling form submissions
🖼️ Media Management: Cloudinary for optimized image delivery
🎨 Styling: Tailwind CSS for a responsive, sleek UI

This project was developed with performance, scalability, and ease of management in mind, ensuring a smooth experience for both the business owner and clients.

## Prerequisites

- Redwood requires [Node.js](https://nodejs.org/en/) (=20.x) and [Yarn](https://yarnpkg.com/)
- Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

## Development Setup

1. **Install Dependencies:**

   Run the following command to install all necessary dependencies:

   ```bash
   yarn install
   ```

2. **Start the Development Server:**

   Use the Redwood CLI to start the development server:

   ```bash
   yarn redwood dev
   ```

   Your browser should automatically open to [http://localhost:8910](http://localhost:8910) where you'll see the Welcome Page, which links out to many great resources.

3. **Database Setup:**

   This project uses Supabase as its database. Ensure you have the correct environment variables set up in your `.env` file:

   ```bash
   SUPABASE_URL=https://your-supabase-url.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

   For more information on setting up Supabase, refer to the [Supabase documentation](https://supabase.io/docs).

4. **Prisma and the Database:**

   To apply database migrations, use:

   ```bash
   yarn rw prisma migrate dev
   ```

   This will prompt you to enter a name for the migration.

5. **Testing:**

   Run tests using:

   ```bash
   yarn rw test
   ```

## Live Project

The live version of this project is hosted on Vercel and can be accessed at [www.bluerosenailsandbeauty.co.nz](https://www.bluerosenailsandbeauty.co.nz).

### Deployment

1. **Vercel Setup:**

   The project is configured to deploy on Vercel. Ensure your Vercel account is linked to your GitHub repository for automatic deployments.

2. **Environment Variables:**

   Set the necessary environment variables in the Vercel dashboard to connect to Supabase and any other services.

3. **Supabase Integration:**

   The project uses Supabase for database operations. Ensure that your Supabase project is correctly configured and that the necessary API keys are set in Vercel.

## Additional Resources

- **Redwood CLI:**

  For a list of all available Redwood CLI commands, run:

  ```bash
  yarn redwood --help
  ```

  For detailed CLI documentation, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).

- **Community and Support:**

  Join the RedwoodJS community via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs).

- **Tutorial:**

  The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword).

## Quick Links

- Stay updated: read [Forum announcements](https://community.redwoodjs.com/c/announcements/5), follow us on [Twitter](https://twitter.com/redwoodjs), and subscribe to the [newsletter](https://redwoodjs.com/newsletter)
- [Learn how to contribute](https://redwoodjs.com/docs/contributing)
