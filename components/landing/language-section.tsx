import LanguageCard from "./layouts/language-card";

const colors = [
  {
    title: "Jaune",
    description: "Prospérité",
    bg: "#E9AB17",
  },
  {
    title: "Bleu",
    description: "Tranquilité",
    bg: "#1778E9",
  },
  {
    title: "Vert",
    description: "Fertilité",
    bg: "#08803074",
  },
  {
    title: "Rouge",
    description: "Confiance",
    bg: "#E91717",
  },
  {
    title: "Blanc",
    description: "Pureté",
    bg: "#f6f3ecff",
  },
  {
    title: "Violet",
    description: "Spiritualité",
    bg: "#9c27b0ff",
  },
];

export default function LanguageSection() {
  return (
    <section className="bg-[#3E2723] py-20 px-20 flex flex-col gap-y-16">
      <div className="text-[48px] font-semibold text-stone-500 font-style-script text-center">
        Le langage des perles
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 lg:gap-14 gap-6 mx-auto">
        {colors.map((color) => (
          <LanguageCard
            key={color.title}
            title={color.title}
            description={color.description}
            bg={color.bg}
          />
        ))}
      </div>
      <div className="text-stone-600 text-center font-quicksand text-[24px]">
        Le Baya est bien plus qu'un simple bijou. C'est un rite de passage, un
        symbole de croissance et un murmure de communication silencieuse. Chaque
        perle que nous enfilons porte en elle la sagesse des générations.
      </div>
    </section>
  );
}
