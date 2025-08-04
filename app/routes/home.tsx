import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HireLens" },
    { name: "description", content: "Smart Feedback for your dream Job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
         <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    </section>
  </main>
}
