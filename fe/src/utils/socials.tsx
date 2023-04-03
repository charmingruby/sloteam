import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

interface SocialMediasTypes {
  icon: React.ReactElement
  link: string
}

const iconSize = '2rem';

export const socials: SocialMediasTypes[] = [
  {
    icon: <AiFillGithub size={iconSize} />,
    link: 'https://github.com/charmingruby'
  },
  {
    icon: <FaLinkedinIn size={iconSize} />,
    link: 'https://www.linkedin.com/in/gustavo-dias21/'
  },
  {
    icon: <AiFillInstagram size={iconSize} />,
    link: 'https://www.instagram.com/gustavodiasa/'
  }
];
