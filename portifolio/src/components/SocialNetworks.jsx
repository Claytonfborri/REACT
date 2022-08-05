import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialnetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn /> },
    {name: 'github', icon: <FaGithub />},
    {name: 'instagram', icon: <FaInstagram />},
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialnetworks.map((network) => (
                <a href="#" className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
            ))}
        </section>
    )
}

export default SocialNetworks;