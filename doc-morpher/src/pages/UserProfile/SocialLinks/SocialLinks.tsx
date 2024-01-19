import githubImage from "../../../assets/images/github.png";
import facebookImage from "../../../assets/images/facebook.png";
import instagramImage from "../../../assets/images/instagram.png";

const SocialLinks = () => {
    return (
        <div className="flex justify-center gap-8 mt-6">
          <a href="https://github.com/"><img className="w-8" src={githubImage} alt="github-icon" /></a>
          <a href="https://www.facebook.com/"><img className="w-8" src={facebookImage} alt="facebook-icon" /></a>
          <a href="https://www.instagram.com/"><img className="w-8" src={instagramImage} alt="instagram-icon" /></a>
        </div>
    );
}

export default SocialLinks;