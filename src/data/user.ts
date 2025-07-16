// Imports Types
import { MetadatasUser, TechnologiesUser, ProjectsUser, EnterprisesUser, ParagraphsAboutUser } from "@/types/user";

// Imports Images Technologies
import SkillAngularImg from "@/assets/skills/angular.png"
import SkillIonicImg from "@/assets/skills/ionic.png"
import SkillReactImg from "@/assets/skills/react.png"
import SkillNextJSImg from "@/assets/skills/nextjs.png"
import SkillTailwindImg from "@/assets/skills/tailwind.png"
import SkillExpressImg from "@/assets/skills/expressjs.png"
import SkillNestJSImg from "@/assets/skills/nestjs.png"
import SkillAWSImg from "@/assets/skills/aws.png"
import SkillPostgreSQLImg from "@/assets/skills/postgresql.png"
import SkillGitImg from "@/assets/skills/git.png"
import SkillGradleImg from "@/assets/skills/gradle.png"
import SkillAndroidStuidoImg from "@/assets/skills/android-studio.png"
import SkillCSharpImg from "@/assets/skills/csharp.png"
import SkillVercelImg from "@/assets/skills/vercel.png"


// Import Images Projects
import ProjectAgentsImg from "@/assets/projects/agents.png"
import ProjectCardapioImg from "@/assets/projects/cardapio.png"
import ProjectChronosImg from "@/assets/projects/chronos.png"
import ProjectConsultaCepImg from "@/assets/projects/consulta-cep.png"
import ProjectCookAppImg from "@/assets/projects/cook-app.png"
import ProjectEcommerceImg from "@/assets/projects/eccommerce.png"
import ProjectFreelanceImg from "@/assets/projects/freelance.png"
import ProjectOrbitImg from "@/assets/projects/orbit.png"
import ProjectImg from "@/assets/projects/project.png"
import ProjectResumeCraftImg from "@/assets/projects/resume-craft.png"

// Import Images Enterprises
import EnterpriseGBMImg from "@/assets/enterprises/gbmtech_logo.jpeg"


// Links User
export const linkPdf: string = "/archives/curriculo.pdf" 
export const linkEmail: string = "mailto:thiagoikenaga@gmail.com"
 

// Technologies User
export const technologiesUser: TechnologiesUser[] = [
    {
        icon: SkillAngularImg,
        description: "Angular"
    },
    {
        icon: SkillIonicImg,
        description: "Ionic"
    },    
    {
        icon: SkillReactImg,
        description: "React"
    },
    {
        icon: SkillNextJSImg,
        description: "NextJS"
    },
    {
        icon: SkillTailwindImg,
        description: "TailwindCSS"
    },
    {
        icon: SkillExpressImg,
        description: "ExpressJS"
    },
    {
        icon: SkillNestJSImg,
        description: "NestJS"
    },
    {
        icon: SkillAWSImg,
        description: "AWS"
    },
    {
        icon: SkillPostgreSQLImg,
        description: "PostgreSQL"
    },
    {
        icon: SkillGitImg,
        description: "Git"
    },
    {
        icon: SkillGradleImg,
        description: "Gradle"
    },
    {
        icon: SkillAndroidStuidoImg,
        description: "Android Studio"
    },
    {
        icon: SkillCSharpImg,
        description: "C#"
    },
    {
        icon: SkillVercelImg,
        description: "Vercel"
    }
]


// Projects User
export const projectsUser: ProjectsUser[] = [
  {
    title: "Agents I.A",
    image: ProjectAgentsImg,
    description: {
      "pt-br": "Projeto de Perguntas e Respostas com Inteligência Artificial desenvolvido durante o evento NLW Agents da Rocketseat",
      es: "Proyecto de Preguntas y Respuestas con Inteligencia Artificial desarrollado durante el evento NLW Agents de Rocketseat",
      en: "Question and Answer project with Artificial Intelligence developed during the NLW Agents event by Rocketseat"
    },
    deploy: "https://agents-ia-nu.vercel.app",
    source: "https://github.com/thiago-suzuki/nlw-agents-frontend"
  },
  {
    title: "ResumeCraft",
    image: ProjectResumeCraftImg,
    description: {
      "pt-br": "Projeto de Construção de Currículos com sistema de Pagamento de Créditos e geração de textos com IA",
      es: "Proyecto de Creación de Currículums con sistema de Pago por Créditos y generación de textos con IA",
      en: "Resume Builder project with Credit Payment system and AI-generated text"
    },
    deploy: "https://resume-craft-phi.vercel.app",
    source: "https://github.com/thiago-suzuki/next-resume-craft"
  },
  {
    title: "Chronos Pomodoro",
    image: ProjectChronosImg,
    description: {
      "pt-br": "Projeto de Gestão de Tempo de Tarefas no modelo Pomodoro",
      es: "Proyecto de Gestión del Tiempo de Tareas con el modelo Pomodoro",
      en: "Task Time Management project using the Pomodoro technique"
    },
    deploy: "https://chronos-pomodoro-nu.vercel.app",
    source: "https://github.com/thiago-suzuki/vite-chronos-pomodoro"
  },
  {
    title: "Gam3r.store",
    image: ProjectEcommerceImg,
    description: {
      "pt-br": "Projeto de Compras Online feito durante a trilha intermediária da Formação DEV",
      es: "Proyecto de Compras Online desarrollado durante la ruta intermedia de la Formación DEV",
      en: "Online Shopping project developed during the intermediate track of DEV Training"
    },
    deploy: "https://fd-ecommerce-monorepo-frontend.vercel.app",
    source: "https://github.com/thiago-suzuki/fd-ecommerce-monorepo"
  },
  {
    title: "Cardápio Hashtaurante",
    image: ProjectCardapioImg,
    description: {
      "pt-br": "Cardápio de restaurante feito durante o Intensivão de JavaScript da Hashtag Treinamentos",
      es: "Menú de restaurante desarrollado durante el Intensivo de JavaScript de Hashtag Treinamentos",
      en: "Restaurant menu built during the JavaScript Bootcamp by Hashtag Treinamentos"
    },
    deploy: "https://hashtaurante.vercel.app/",
    source: "https://github.com/thiago-suzuki/aula03-intensivaojs"
  },
  {
    title: "Consulta de CEP",
    image: ProjectConsultaCepImg,
    description: {
      "pt-br": "Consulta de CEP feito durante a aula de Desenvolvimento Web na faculdade",
      es: "Consulta de CEP desarrollada durante la clase de Desarrollo Web en la universidad",
      en: "ZIP code lookup developed during a Web Development class at college"
    },
    deploy: "https://consultacep-thiago-suzuki.vercel.app/",
    source: "https://github.com/thiago-suzuki/Consulta-de-CEP"
  },
  {
    title: "in.Orbit App",
    image: ProjectOrbitImg,
    description: {
      "pt-br": "Projeto de Gerenciador de Metas feito durante NLW Pocket da Rocketseat",
      es: "Proyecto de Gestor de Metas desarrollado durante NLW Pocket de Rocketseat",
      en: "Goal Manager project developed during Rocketseat's NLW Pocket"
    },
    deploy: "https://nlw-pocket-frontend.vercel.app/",
    source: "https://github.com/thiago-suzuki/nlw-pocket-frontend"
  },
  {
    title: "Cook App",
    image: ProjectCookAppImg,
    description: {
      "pt-br": "Aplicação de Receitas feito durante o evento React Native na Prática da Rocketseat",
      es: "Aplicación de Recetas desarrollada durante el evento React Native en la Práctica de Rocketseat",
      en: "Recipe Application built during Rocketseat's React Native in Practice event"
    },
    deploy: null,
    source: "https://github.com/thiago-suzuki/react-native-na-pratica-01"
  },
  {
    title: "Freelance Hours",
    image: ProjectFreelanceImg,
    description: {
      "pt-br": "Aplicação Freelance Hours feito durante o curso gratuito de PHP da Rocketseat",
      es: "Aplicación Freelance Hours desarrollada durante el curso gratuito de PHP de Rocketseat",
      en: "Freelance Hours application developed during Rocketseat’s free PHP course"
    },
    deploy: null,
    source: "https://github.com/thiago-suzuki/php-freelance-hours"
  },
  {
    title: "Dashboards Power BI",
    image: ProjectImg,
    description: {
      "pt-br": "Dashboards feitos durante o Intensivão de Power BI da Hashtag Treinamentos",
      es: "Dashboards creados durante el Intensivo de Power BI de Hashtag Treinamentos",
      en: "Dashboards created during Hashtag Treinamentos’ Power BI Bootcamp"
    },
    deploy: null,
    source: "https://github.com/thiago-suzuki/Dashboards-PowerBI-2023"
  },
  {
    title: "C# API - Rocketseat",
    image: ProjectImg,
    description: {
      "pt-br": "API C# para upload de fotos no Google Drive feito durante o evento C# na Prática da Rocketseat",
      es: "API en C# para subir fotos a Google Drive desarrollada durante el evento C# en la Práctica de Rocketseat",
      en: "C# API for uploading photos to Google Drive developed during Rocketseat's C# in Practice event"
    },
    deploy: null,
    source: "https://github.com/thiago-suzuki/CsharpPraticaRocketseat"
  }
]


// Enterprises
export const enterprisesUser: EnterprisesUser[] = [
  {
    nameEnterprise: "GBM Tech & Control",
    imageEnterprise: EnterpriseGBMImg,
    linkEnterprise: "https://www.linkedin.com/company/gbmtech/posts/?feedView=all",
    positions: [
      {
        namePosition: {
          "pt-br": "Desenvolvedor Full Stack Júnior III",
          es: "Desarrollador Full Stack Junior III",
          en: "Junior Full Stack Developer III"
        },
        timeAtPosition: {
          "pt-br": "Mar 2025 - O momento",
          es: "Mar 2025 - Presente",
          en: "Mar 2025 - Present"
        },
        actualPosition: true,
      },
      {
        namePosition: {
          "pt-br": "Desenvolvedor Full Stack Júnior II",
          es: "Desarrollador Full Stack Junior II",
          en: "Junior Full Stack Developer II"
        },
        timeAtPosition: {
          "pt-br": "Jun 2024 - Mar 2025",
          es: "Jun 2024 - Mar 2025",
          en: "Jun 2024 - Mar 2025"
        },
        actualPosition: false,
      },
      {
        namePosition: {
          "pt-br": "Desenvolvedor Full Stack Júnior I",
          es: "Desarrollador Full Stack Junior I",
          en: "Junior Full Stack Developer I"
        },
        timeAtPosition: {
          "pt-br": "Mar 2023 - Jun 2024",
          es: "Mar 2023 - Jun 2024",
          en: "Mar 2023 - Jun 2024"
        },
        actualPosition: false,
      },
      {
        namePosition: {
          "pt-br": "Técnico em Desenvolvimento de Sistemas",
          es: "Técnico en Desarrollo de Sistemas",
          en: "Systems Development Technician"
        },
        timeAtPosition: {
          "pt-br": "Jun 2022 - Mar 2023",
          es: "Jun 2022 - Mar 2023",
          en: "Jun 2022 - Mar 2023"
        },
        actualPosition: false,
      },
      {
        namePosition: {
          "pt-br": "Estagiário em Desenvolvimento de Software",
          es: "Pasante en Desarrollo de Software",
          en: "Software Development Intern"
        },
        timeAtPosition: {
          "pt-br": "Out 2021 - Jun 2022",
          es: "Oct 2021 - Jun 2022",
          en: "Oct 2021 - Jun 2022"
        },
        actualPosition: false,
      }
    ]
  },
]


// Metadata User
export const metadatasUser: MetadatasUser[] = [
    {
        quantity: 5,
        description: "experience"
    },
    {
        quantity: 20,
        description: "project"
    },
]

export const paragraphsAboutUser: ParagraphsAboutUser = {
  one: {
    "pt-br": "Sou graduado em Bacharelado em Sistemas de Informação pela Universidade Santa Cecília e atualmente atuo como Desenvolvedor de Software Full Stack. Tenho como foco a eficiência, a inovação e a qualidade em cada entrega, com forte interesse na resolução de problemas complexos por meio de soluções tecnológicas eficazes e bem estruturadas.",
    "es": "Soy licenciado en Sistemas de Información por la Universidad Santa Cecília y actualmente trabajo como Desarrollador de Software Full Stack. Me enfoco en la eficiencia, la innovación y la calidad en cada entrega, con un fuerte interés en la resolución de problemas complejos mediante soluciones tecnológicas eficaces y bien estructuradas.",
    "en": "I hold a Bachelor's degree in Information Systems from Santa Cecília Universitu and currently work as a Full Stack Software Developer. I focus on efficiency, innovation, and quality in every delivery, with a strong interest in solving complex problems through effective and well-structured technological solutions."
  },
  two: {
    "pt-br": "Ao longo da minha trajetória, liderei e colaborei em projetos multifuncionais, otimizando processos críticos e garantindo soluções robustas e escaláveis. Tenho facilidade em compreender regras de negócio e transformar desafios técnicos em oportunidades de melhoria contínua.",
    es: "A lo largo de mi trayectoria, he liderado y colaborado en proyectos multifuncionales, optimizando procesos críticos y asegurando soluciones robustas y escalables. Tengo facilidad para comprender reglas de negocio y transformar desafíos técnicos en oportunidades de mejora continua.",
    en: "Throughout my career, I have led and collaborated on cross-functional projects, optimizing critical processes and ensuring robust, scalable solutions. I have a strong ability to understand business rules and turn technical challenges into opportunities for continuous improvement."
  },
  three: {
    "pt-br": "Estou sempre em busca de novos desafios que envolvam tecnologias emergentes, arquitetura de sistemas e alta performance, contribuindo ativamente para o crescimento de produtos e equipes. Se você quiser saber mais sobre meu trabalho, entre em contato comigo pra saber mais!",
    es: "Siempre estoy en busca de nuevos desafíos que involucren tecnologías emergentes, arquitectura de sistemas y alto rendimiento, contribuyendo activamente al crecimiento de productos y equipos. ¡Si quieres saber más sobre mi trabajo, no dudes en contactarme!",
    en: "I’m always looking for new challenges involving emerging technologies, system architecture, and high performance, actively contributing to the growth of products and teams. If you’d like to know more about my work, feel free to reach out!"
  }
}

