import React from "react";

const teamMembers = [
  {
    name: "Natalia Tenuta",
    role: "Diretora Executiva",
    description: "Nutricionista e Doutora em Saúde Coletiva",
    image: "/assets/team1.png",
  },
  {
    name: "Juliana Theodora",
    role: "Diretora de Pesquisa e Inovação",
    description: "Nutricionista e Doutora em Nutrição",
    image: "/assets/team2.png",
  },
  {
    name: "Milena Martins",
    role: "Consultora Sênior em Segurança Alimentar e Nutricional",
    description: "Nutricionista, Mestra e Doutoranda em Nutrição",
    image: "/assets/team3.png",
  },
  {
    name: "Ana Mattos",
    role: "Consultora Externa em Segurança Alimentar e Nutricional",
    description: "Nutricionista e Doutora em Políticas Públicas",
    image: "/assets/team4.png",
  },
  {
    name: "Isabela Matos",
    role: "Estagiária de Nutrição e de Assistência Jurídica",
    description: "Bacharel em Direito e Graduanda em Nutrição",
    image: "/assets/team5.png",
  },
  {
    name: "Antônio Real",
    role: "Consultor em Análise de Dados e Sistemas",
    description: "Administrador e Cientista de Dados.",
    image: "/assets/team6.png",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 relative bg-white">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/about-bg1.jpg"
          alt="Fundo equipe"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-notria-primary mb-6">
              Nossa Equipe
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-notria-light p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-notria-primary group-hover:border-notria-secondary transition-colors duration-300" />
                <h3 className="font-poppins font-semibold text-xl text-notria-primary mb-2 group-hover:text-notria-secondary transition-colors duration-300">{member.name}</h3>
                <p className="font-yrsa text-notria-primary/80 mb-1 group-hover:text-notria-primary transition-colors duration-300">{member.role}</p>
                <p className="font-yrsa text-notria-primary/60 text-sm group-hover:text-notria-primary/80 transition-colors duration-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 