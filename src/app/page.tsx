"use client";
import Image from "next/image";
import mynd from "../../public/mynd.jpg"

const DATA = [
    {
        id: 0,
        title: "NTV 1",
        subTitle: "Oct 23 - Jan 24",
        description:
            "First semester I learned dart/flutter, I liked it but soon wanted more and my desire to be a good programmer kicked in!",
    },
    {
        id: 1,
        title: "NTV 2",
        subTitle: "Feb 24 - present",
        description:
            "Second semester I'm learning JS, CSS, Html and React with focus on React I'm really excited for this semester. I need to focus my attention better on what we are learning at the moment, I have a problem wanting to learn everything right NOW so it's hard...",
    },
    {
        id: 2,
        title: "Bidding website",
        subTitle: "Jan 24 - present",
        description:
            "I have been working on a bidding website for my mothers employer for that I'm using React It's still a work in progress, and I had to put it on hold so I can focus on school",
    },
] as const;

const HEADER = [
    {
        id: 0,
        title: "Sigursteinn Bragi",
        funFact:
            "Energy drink enjoyer, love programming and playing video games... but when I first started programming I kinda kicked my video game addiction!",
        img: mynd
    },
] as const;

type JobProps = {};

const Job = (props: JobProps) => {
    return <div></div>;
};

type HeaderProps = {
    data: typeof HEADER;
};

const Header = (props: HeaderProps) => {
    return (
        <header >
            {props.data.map((item) => (
                <div key={item.id} className="flex flex-row justify-between pr-4 pl-2 border-b-[2.5px] mb-4">
                    <h1 className="text-2xl pt-8">{item.title}<p className="text-xs pt-1 mb-3">{item.funFact}</p></h1>

                    <img src={mynd.src} alt="photo of me and my family" className="h-14 w-20 mt-7 mr-2 rounded-3xl " />
                </div>

            ))}
        </header>
    );
};

type ContentProps = {
    data: typeof DATA;
};

const Content = (props: ContentProps) => {
    return (
        <div className="py-2 px-2">
            {props.data.map((item) => (
                <div key={item.id} className="mb-4 border-b-2">
                    <div key={item.id} className="pb-2 text-xl">{item.title}</div>
                    <div key={item.id} className="pb-1 text-lg">{item.subTitle}</div>
                    <div key={item.id} className="pb-6 text-sm">{item.description}</div>
                </div>
            ))}
        </div>
    );
};

export default function Home() {
    return (
        <div>
            <Header data={HEADER} />
            <Content data={DATA} />
        </div>
    );
}

