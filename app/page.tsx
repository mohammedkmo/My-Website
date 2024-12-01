import Terminal from "@/components/Terminal";


export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center p-4 bg-grid relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent  to-black"></div>
        <Terminal />
    </main>
  );
}
