const Avatar = ({ url }) => {
    return (
        <img className="link h-10 rounded-full transition duration-150 transform hover:scale-110" src={url} alt="profile-pic" loading="lazy" />
    )
}

export default Avatar
