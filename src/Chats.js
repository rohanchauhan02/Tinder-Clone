import React from "react";
import "./Chats.css";
import Chat from './Chat'
function Chats() {
    return <div className="chats">
        <Chat
            name='Sarah'
            message='Hey whats up!'
            times='40 seconds ago'
            profilePic='https://images.outlookindia.com/public/uploads/articles/2019/11/23/Narendra_Modi_571_855.jpg'
        />
        <Chat
            name='Sonia'
            message='Hey whats up!'
            times='40 seconds ago'
            profilePic='https://1.bp.blogspot.com/-M9UfqNnbCLg/XjZcNnlB6sI/AAAAAAAANf4/QzxPat0qhac_W7sZu9BxzkEFYiwZPwjSgCLcBGAsYHQ/s400/Whatsapp%2BDP%2BGirl%2B%252812%2529.jpg'
        />
        <Chat
            name='Yogita'
            message='Hey whats up!'
            times='40 seconds ago'
            profilePic='https://1.bp.blogspot.com/-7dX-qt6DcXU/XmDjUmbzjPI/AAAAAAAAPOg/xizFN_evzAEZoD2plZKEmYgciaZZBj3vACLcBGAsYHQ/s1600/Cute%2BGirl%2BDP%2BImages%2B%252813%2529.jpg'
        />
        <Chat
            name='Sneha'
            message='Hey whats up!'
            times='40 seconds ago'
            profilePic='https://www.kahanihindi.com/wp-content/uploads/2020/02/girls-dp-images-5.jpg'
        />
        <Chat
            name='Ohri'
            message='Hey whats up!'
            times='40 seconds ago'
            profilePic='https://dp.profilepics.in/dp/2020/girls-dp/girls-dp-41.jpg'
        />
        <Chat
            name='Komal'
            message='Hey whats up!'
            times='40 seconds ago'
            profilePic='https://i.pinimg.com/564x/27/a2/e8/27a2e88c5148f5966e7047e595cfbf48.jpg'
        />
  </div>;
}

export default Chats;
