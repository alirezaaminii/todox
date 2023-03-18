![TodoX](https://github.com/alirezaaminii/todox/blob/main/imgonline-com-ua-twotoone-ln0TVWIjSkS.jpg)
## TodoX
A simple todo application built with Next.js, React and MongoDB.

## Live Demo
Check out the [live demo](https://todox-test.vercel.app/) of the application.

## Deleting data

In this version, all existing data in the database is visible to everyone. If you wish to delete all the data and start over, simply append the following endpoint to the base URL: api/reset.

## Todos

There are a couple of things that can be improved in this application:

1. Using Mongoose or creating your own models is better than touching the database every time!
2. Configuring client error handling and showing a proper toast message to user.
3. Consider using translations instead of hard-coding text into the code for better maintainability.
4. Deleting categories


## Technical Details
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
