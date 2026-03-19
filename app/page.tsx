import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex min-h-screen w-full flex-col">
        <Navbar />
        <div className="pt-20 py-10 px-4 md:px-8">
          <h1 className="text-white text-2xl font-bold">Home Page</h1>
        </div>
      </main>
    </div>
  );
}
