// Imports Types
import { MetadatasUser, TechnologiesUser, ProjectsUser } from "@/types/user";

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


// Links User
export const linkPdf: string = "/archives/curriculo.pdf" 
export const linkWP: string = "https://wa.me/5513996042886"
 

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
  }
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