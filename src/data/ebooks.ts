import coverQuietlyMagnetic from "@/assets/cover-quietly-magnetic.jpg";
import coverCompleteManager from "@/assets/cover-the-complete-manager.jpg";
import coverPriceOfGreatness from "@/assets/cover-the-price-of-becoming-great.jpg";
import quietlyMagneticFile from "@/assets/quietly-magnetic.docx.asset.json";
import completeManagerFile from "@/assets/the-complete-manager.docx.asset.json";
import priceOfGreatnessFile from "@/assets/the-price-of-becoming-great.docx.asset.json";

export interface Ebook {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  description: string;
  highlights: string[];
  cover: string;
  fileUrl: string;
  fileName: string;
  priceLabel: string;
}

export const ebooks: Ebook[] = [
  {
    id: "quietly-magnetic",
    title: "Quietly Magnetic",
    subtitle: "How to Be Genuinely Kind in a World That Rewards the Opposite",
    audience: "Personal growth and character",
    description:
      "The people we trust most are rarely the loudest in the room. Through stories, reflection questions, and a 30-day practice, this book builds the quiet habits that make someone genuinely magnetic: real compliments, honest accountability, shared control, and kindness nobody sees.",
    highlights: ["15 chapters across 4 parts", "A guided 30-day practice", "Reflection questions in every chapter"],
    cover: coverQuietlyMagnetic,
    fileUrl: quietlyMagneticFile.url,
    fileName: "Quietly-Magnetic-Prof-Olushina-Olawale-Awe.docx",
    priceLabel: "Price to be announced",
  },
  {
    id: "the-complete-manager",
    title: "The Complete Manager",
    subtitle: "How to Manage Men and Money Effectively",
    audience: "Mid and senior-level managers",
    description:
      "Almost every management failure traces back to a person mishandled or money mishandled. This practical guide lays out 17 rules for leading people and stewarding resources, each grounded in a real scenario, stated plainly, and closed with a checklist you can use the same week.",
    highlights: ["17 rules across 4 parts", "Practical checklists in every chapter", "For managers responsible for people and budgets"],
    cover: coverCompleteManager,
    fileUrl: completeManagerFile.url,
    fileName: "The-Complete-Manager-Prof-Olushina-Olawale-Awe.docx",
    priceLabel: "Price to be announced",
  },
  {
    id: "the-price-of-becoming-great",
    title: "The Price of Becoming Great",
    subtitle: "What Every Young Person Must Learn About Discipline, Sacrifice, Character and Success",
    audience: "Young people and students",
    description:
      "Everybody wants to be successful; almost nobody wants to pay for it. Written for young people, these 30 short chapters pair honest teaching with true stories of people who paid the price, and end each chapter with a challenge you can act on the same day.",
    highlights: ["30 short chapters across 9 parts", "Stop, Look, Act exercises in every chapter", "A closing 30-day challenge"],
    cover: coverPriceOfGreatness,
    fileUrl: priceOfGreatnessFile.url,
    fileName: "The-Price-of-Becoming-Great-Prof-Olushina-Olawale-Awe.docx",
    priceLabel: "Price to be announced",
  },
];
