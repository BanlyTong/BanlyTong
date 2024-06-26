"use client";
import Image from "next/image";
import { ReactComponent as FacebookIcon } from "@/assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "@/assets/icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "@/assets/icons/linkedin.svg";
import { ReactComponent as GitHubIcon } from "@/assets/icons/github.svg";

export default function Page() {
  return (
    <div className="container mx-auto flex mt-24">
      <div className="w-1/2 flex flex-col items-start justify-end">
        <div>
          <h1 className="">👋 Hey there, I&apos;m Banly Tong.</h1>
          <h2 className="my-4 text-6xl font-bold">A Software Engineer</h2>
          <p>
            With 6+ years of experience, working from local to region startup
            using wide range of technologies for various projects across
            industries with dynamic teams, remote based from different countries
            include Japan, Malaysia, Indonesia and more.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex space-x-4">
            <a
              className="cursor-pointer"
              href="https://github.com/BanlyTong"
              target="_blank"
            >
              <GitHubIcon fill="#cbd5e1" />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/banly.banlytong"
              target="_blank"
            >
              <FacebookIcon fill='#cbd5e1' />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.instagram.com/tongbanly?igsh=OG54OGhrMmgzeGdm&utm_source=qr"
              target="_blank"
            >
              <InstagramIcon fill="#cbd5e1"  />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/banly-tong-271458199/"
              target="_blank"
            >
              <LinkedInIcon fill="#cbd5e1" />
            </a>
          </div>
        </div>
        <div className="mt-8 space-x-4">
          <button className="px-4 h-12 bg-yellow-600 text-slate-200 rounded-2xl border-2 border-yellow-500">
            Contact Me
          </button>
          <button className="px-4 h-12 bg-slate-700 text-slate-200 rounded-2xl border-2 border-slate-500">
            My Works
          </button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-end">
        <Image
          width={500}
          height={500}
          src="/assets/images/coding_illustration.png"
          alt="Hero"
        />
      </div>
    </div>
  );
}
