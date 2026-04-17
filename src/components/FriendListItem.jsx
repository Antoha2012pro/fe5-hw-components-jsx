const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li class="item" id={id} style={{position: "relative"}}>
            <span class="status" style={{backgroundColor: isOnline ? "green" : "red", display: "block", width: "15px", height: "15px", borderRadius: "50%", position: "absolute", inset: "auto auto 40px auto"}}></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

export default FriendListItem
