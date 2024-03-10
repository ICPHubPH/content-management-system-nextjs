'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AdminLayout({ children }) {
  return (
    <main className="overflow-hidden scroll-smooth font-kodchasan bg-black">
      <Navbar />

      <section className="bg-gray-200">{children}</section>

      <Footer />
    </main>
  );
}

const Sample = ({ title, description, content }) => {
  return (
    <div className="text-white flex flex-col bg-[#1C1C1C]">
      <div className="py-5 text-icp-yellow text-[20px] bg-[#111111] px-4">{title}</div>
      <div className="p-4 text-[14px] flex flex-col gap-4">
        <div className="font-light text-white">{description}</div>
        <div className="font-light text-icp-blue">{content}</div>
      </div>
    </div>
  );
};
