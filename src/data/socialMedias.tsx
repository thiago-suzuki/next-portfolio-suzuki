import { SocialMediasUser } from "@/types/user";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export const socialMedias: SocialMediasUser[] = [
    {
        icon: <FaLinkedin color="#0A66C2" size={26} />,
        url: "https://www.linkedin.com/in/thiago-ikesu"
    },
    {
        icon: <FaGithub size={26} />,
        url: "https://github.com/thiago-suzuki"
    }
]