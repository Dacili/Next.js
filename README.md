# Next.js
![image](https://github.com/user-attachments/assets/8d439d09-be2c-40c2-8f42-616bc893651f)  

Next.js is a **React framework** for the Web that gives you building blocks to create web applications.   
Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.  
## One of the key strengths of Next. js is its ability to do frontend and backend development in the same project! 
It's not only a FE framework!

---

### React JS vs Next JS
The major difference between Next JS and React JS is performance. If we talk about Next. js applications, they are extremely fast because of the static destinations and server-side rendering.

---


### Angular vs Next JS


---

### Vercel
![image](https://github.com/user-attachments/assets/88522e90-3898-4f16-a7dd-06d668769947)  

Vercel is a frontend cloud from the creators of Next.js, making it easy to get started with Next.js quickly.  
It contains prebuilt template solutions that you can reuse, and deploy.

---

#### Project specifications:
```
 "react": "^18",
 "react-dom": "^18",
 "next": "14.2.5"
```

#### Create project
Run in terminal command:  
```
npx create-next-app@latest
```
You will see questions such as, provide the name of the project, are you going to use tailwind CSS, and so on.  
Once you complete these questions, the app is created.  
Project structure:  
![image](https://github.com/user-attachments/assets/f71874df-a790-4372-ad94-1334badf020c)  
```globals.css```
 is the main CSS file. The Tailwind CSS is imported there as well.  
 ```postcss.config.mjs, tailwind.config.ts``` are files for Tailwind CSS configuration  

 #### Run project
 check in ```package.json```, scripts:  
 ![image](https://github.com/user-attachments/assets/1d99a97e-41a3-494a-b5f8-beee77e42edd)   
 run command: 
 ```
 npm run dev
```
once it's done with loading, you should see this message, and you can enter  ```localhost:3000 ``` in browser:  
![image](https://github.com/user-attachments/assets/136932c3-c352-446e-92e9-330ee7417def)  

----
## Features of Next.js:
### Styling
Global CSS file is:  ```global.css```, like in Angular we have: ```styles.scss``` or ```styles.css```  
There are different ways to style your application in Next.js.  
Tailwind and CSS modules are the two most common ways of styling Next.js applications. You can use one or both of them.  

1) **Tailwind**  
Tailwind is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.  
> It contains bunch of class names, which you then combine.  
```
export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    // ...
  )
}
```
2) **CSS modules**  
- usual classes that you made, and then use
- good side: CSS classes are locally scoped to components by default, reducing the risk of styling conflicts  
CSS file:
```
.someClass {
  height: 10px;
  width: 10px;
}
```
tsx. file:
```
import styles from '@/app/ui/some.module.css';

export default function Page() {
  return (
      <div className={styles.someClass} />
  )
}
```
----

### Optimizations
How to optimize:
1) **Fonts**  
Sometimes, if apps are getting fonts with API requests, the initial load look will be different from the later load (layout shift).  
Next.js downloads font files **at build time** and hosts them with your other static assets.   
This means when a user visits your application, there are no additional network requests for fonts which would impact performance.  
*Note: I think we can have the same effect in other frameworks if we just download font files, and use them into assets saved.*
fonts.ts:
```
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
```
somePage.tsx:
```
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
      <body className={`${inter.className} someCssClass`}>{children}</body> // we could add other css classes in same part
    </html>
  );
}
```

2) **Images**  
Usual use of img in HTML is:  
```
<img
  src="/medii.png"
  alt="some picture"
/>
```  
but it has some things that you have to do manually:
- image responsiveness on different screen sizes,
- specify image sizes for different devices,
- prevent layout shift as the images load,
- lazy load images that are outside the user's viewport  
  
The ```<Image>``` Component is an extension of the HTML <img> tag, and comes with **automatic image optimization**, such as fixing the things mentioned above and serving images in modern formats, like WebP and AVIF, when the browser supports it.
```  
import Image from 'next/image';
 
export default function Page() {
  return (
      <Image
        src="/mediii.png"
        width={1000}  // It's good practice to set the width and height of your images to avoid layout shift, 
        height={760} // width, and height should be an aspect ratio identical to the source image
        className="hidden md:block" // it's hidden for other devices (mobile), except for desktop, medium
        alt="some img"
      />
  );
}
```  

---

### Routing
How to create nested layouts and pages using file-system routing.   
**Nested routing** - Each folder represents a route segment that maps to a URL segment.  
![image](https://github.com/user-attachments/assets/2175473b-350f-4b6a-ad86-50d8373a00d2)  
```page.tsx``` is a special Next.js file that exports a React component, and it's required for the route to be accessible. 
> To create a nested route, you can nest folders inside each other and add ```page.tsx``` files inside them.
 
![image](https://github.com/user-attachments/assets/00814991-971f-4eb5-a68c-4485828d42e1)  
```page.tsx```   file can look like:  
```
export default function Page() {
  return <p>Mediii Page</p>;
}
```
**Dynamic route** - for example you are forwarding id to the route. A Dynamic Segment can be created by wrapping a file or folder name in square brackets: [segmentName]. For example, [id].  
in medi/[mediId].js:  

```
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.mediId}</p>
}
```  
https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
![image](https://github.com/user-attachments/assets/47377b73-5318-46e3-9c93-85a294d08ec3)  

  



**Nested layouts** - In Next.js, you can use a special ```layout.tsx``` file to create UI that is **shared between multiple pages**.  
> One benefit of using layouts in Next.js is that on navigation, only the *page components update* while the *layout won't re-render*. This is called **partial rendering**  

The <Layout /> component receives a **children** prop. This child can either be a *page or another layout*.  
```layout.tsx```   file can look like:  
```
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full md:w-64">
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
```  
for ex. the pages inside /dashboard will automatically be nested inside a <Layout /> like so:  
![image](https://github.com/user-attachments/assets/8347d2bd-4ed5-47d4-a290-04be0f1e5930)  
``` /app/layout.tsx``` is **root layout** and is required.  
> Any UI you add to the root layout will be **shared across all pages** in your application.

**The ``` <Link>```  component** - link between pages in your application (navigation)
> It's the same as  ```<a>```, but difference is, if you use <a>, then *whole page is reloaded (refreshed)*, but if you use ```Link```, it will not reload whole page.
 
In production, whenever <Link> components appear in the browser's viewport, Next.js automatically **prefetches** the code for the linked route in the background. 

**Automatic code-splitting and prefetching**  
Next.js automatically code splits your application by *route segments*. This is different from a traditional React SPA, where the browser loads all your application code on initial load.  
Splitting code by routes means that **pages become isolated**. If a certain page throws an error, the rest of the application will still work.

**if we want to know, which navigation menu is currently selected:**  
``` 
const pathname = usePathname();
```

---

### Data Fetching
How to set up a database on Vercel, and best practices for fetching and streaming.  

---

### Search and Pagination
How to implement search and pagination using URL Search Params.  

---

### Mutating Data
How to mutate data using React Server Actions, and revalidate the Next.js cache.  

---

### Error Handling
How to handle general and 404 not found errors.  

---

### Form Validation and Accessibility
How to do server-side form validation and tips for improving accessibility.  

---

### Authentication
How to add authentication to your application using NextAuth.js and Middleware.  

---

### Metadata
How to add metadata and prepare your application for social sharing.  

---- 
 
