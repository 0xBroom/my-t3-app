# T3 Twitter Clone

Welcome to my first T3! This is a minimalistic Twitter clone application built using the [T3 stack](https://create.t3.gg/). With T3 Twitter Clone, users can post tweets, and view the tweets of the users.

## Features

- User registration and authentication
- Posting tweets
- Timeline to view tweets from other users
- User profile page to view personal tweets

## Tech Stack

T3 Twitter Clone is built using the following technologies:

- **Next.js**: A React framework for building server-rendered and statically generated applications.
- **TypeScript**: A statically-typed superset of JavaScript that adds optional typing.
- **Prisma**: A modern database toolkit for TypeScript and Node.js that makes it easy to access databases with type safety.
- **TRPC**: A TypeScript-first RPC framework for building scalable and type-safe APIs.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Clerk**: An authentication and user management system that simplifies user authentication workflows.
- **Planetscale**: A serverless database platform for MySQL that offers scalability and reliability.
- **Upstash**: A serverless Redis platform for data caching and real-time functionality.

## Getting Started

To get started with T3 Twitter Clone, follow these steps:

1. Clone the repository: `git clone https://github.com/0xBroom/my-t3-app.git`
2. Navigate to the project directory: `cd my-t3-app`
3. Install the dependencies: `npm install`
4. Configure Clerk: Follow the instructions provided by Clerk to set up your authentication and user management system.
5. Set up the environment variables: Create a `.env` file in the project root directory and provide the following variables:

```plaintext
DATABASE_URL: URL or connection string for your database.
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: Public key for Clerk authentication.
CLERK_SECRET_KEY: Secret key for Clerk authentication.
UPSTASH_REDIS_REST_URL: URL for your Upstash Redis database.
UPSTASH_REDIS_REST_TOKEN: Authentication token for accessing your Upstash Redis database.
```

6. Start the development server: `npm run dev`
7. Open your browser and visit: `http://localhost:3000`

Make sure you have Node.js and the required dependencies installed on your machine before proceeding.

## Deployment

T3 Twitter Clone is designed to be ready for production and can be deployed using serverless and scalable services. Here are the recommended services for deployment:

- **Planetscale**: Use Planetscale to host your MySQL database and take advantage of its serverless architecture, scalability, and reliability.
- **Upstash**: Utilize Upstash as a serverless Redis platform for data caching and real-time functionality like rate limit.
- **Axiom**: Ingest your backend logs using Axiom, a serverless GraphQL deployment platform.
- **Vercel**: Deploy your T3 Twitter Clone frontend application using Vercel, an all-in-one platform for static sites and serverless functions.

Follow the respective documentation of each service to set up your deployment environment and configure the necessary environment variables.

## Contributing
Contributions to T3 Twitter Clone are welcome! If you have any bug fixes, enhancements, or new features to propose, please submit a pull request. Ensure that your code adheres to the existing coding style and that all tests pass successfully.

## License
This project is licensed under the MIT License. You can find more details in the LICENSE file.

## Acknowledgements
T3 Twitter Clone is inspired by the functionality and design of Twitter. Thanks to the developers and contributors of the technologies and libraries used in this project.

Special thanks to [Theo](https://t3.gg/), the T3 father and his [T3 tutorial](https://www.youtube.com/watch?v=YkOSUVzOAA4).