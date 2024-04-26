import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Frontend Development
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Hello, I&apos;m Pallav Singh, and I&apos;m a full time software developer and part time content creator. With 3+ years of experience in both fields, I have a unique perspective on how technology and content can work together to achieve business goals.

            As a software developer, I specialize in end-to-end application development, and I enjoy tackling complex problems and coming up with elegant solutions. I&apos;m proficient in Frontend Development and I&apos;m always looking for ways to improve my skills and stay up-to-date with the latest technologies.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            8+ <sub className="font-semibold text-base">Industry Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          {/* <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          /> */}
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          {/* <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          /> */}
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=angular,html,css,bootstrap,cloudflare,react,figma,firebase,git,github,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,redux,sass,supabase,tailwind,threejs,vercel,vscode`}
            alt="Pallav Singh"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          {/* <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          /> */}
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://pallavsingh.hashnode.dev/"
            target="_blank"
            className="w-full"
          >
            {/* <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            /> */}
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
