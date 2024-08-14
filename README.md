# Next.js
Next.js is a **React framework** for the Web that gives you building blocks to create web applications.   
Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

### React JS vs Next JS
The major difference between Next JS and React JS is performance. If we talk about Next. js applications, they are extremely fast because of the static destinations and server-side rendering.
### Vercel
Vercel is a frontend cloud from the creators of Next.js, making it easy to get started with Next.js quickly.  
It contains prebuilt template solutions that you can reuse, and deploy.
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

 
