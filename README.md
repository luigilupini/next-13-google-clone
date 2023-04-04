## Google Clone with Next.js 13

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Using `<Link>` components in Next.js

The `Link` component from `next/link` is used to enable client-side navigation
between pages in a Next.js application.

The `Link` component to link between pages ensures Next automatically prefetches
the linked page in the background, making the navigation faster, more seamless
for the user. This "prefetching" is done using the browser's built-in resource
loading capabilities, such as `<link rel="preload">` and `IntersectionObserver`,
to determine when to start prefetching the linked page.

In addition to prefetching, the `Link` component also automatically sets up the
correct `client-side` routing behavior for your Next.js application. When a user
clicks on a link created with the `Link` component, Next navigates to the linked
page using `client-side` routing instead of a full page reload. Makes navigation
faster and smoother for the user, as they don't have to wait for a server render
for the new page. Using the `Link` also ensures that your app's is optimized for
search engines and social media crawlers. When you create a link using `Link`,
Next.js auto adds the necessary tags to your page <head> section to ensure that
search engines, social media platforms can properly index & display your pages.

Overall, using the `Link` component from `next/link` can greatly improve a user
experience of your Next.js application by enabling faster, smoother, and more
optimized client-side navigation between pages.

> Can the `Link` component be used in server components?

No the component from `next/link` cannot be used in Server Components because it
is designed to work with `client-side` routing in Next.js. Server Components in
Next.js are used for server-side rendering and are executed on the server before
the client receives the page. Since the `Link` component relies on client-side
choices for routing to work, it cannot be used in Server Components.

Instead, Server Components in Next.js should be used to render initial content
of the page on the server, before the `client-side` JS is executed. You can use
regular HTML anchor tags (<a>) to create links in server components, and Next.js
will automatically enhance those links with `client-side` routing behavior when
the page is loaded on the client.

`Link` component are powerful for optimizing `client-side` navigation in Next.js
applications, it is **NOT** intended for use in server components. Instead, use
regular HTML tags to create links in server components and let Next handle any
client-side routing behavior automatically.
