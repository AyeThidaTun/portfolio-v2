import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cardsData } from "./project-data";
import Tabs from "./tabs";

export default function ProjectCard() {
  return (
    <section className="grid px-5 lg:grid-cols-2 gap-10">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          className="border-gray-300 border rounded-md w-full max-w-md"
        >
          <Link href={`../../projects/details/${card.slug}`}>
            <div className="custom-cursor">
              <CardContent className="space-y-4">
                <Image
                  src={card.src}
                  alt={card.title}
                  className="object-cover aspect-video rounded-md"
                  width={400}
                  height={200}
                />
                <h2 className="text-center text-md font-bold">{card.title}</h2>
                <p className="text-md">{card.description}</p>
                <div>
                  <Tabs tabsData={card.tabs} />
                </div>
              </CardContent>
            </div>
          </Link>
        </Card>
      ))}
    </section>
  );
}
