import Image from "next/image";

export default function Home() {
  return (
    <div className="">
<h1>Welcome to Medi app</h1>
        <Image
          
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
  );
}
