import MyPosts from './myPosts/MyPosts';
import Post from './myPosts/post/Post';

import './Profile.css';


const Profile = () => {
    return (
      <div className='content'>
        <div className="content-img"></div>
        <div className="content-description">
          <div className="content-avatar"></div>
          <div className="content-descr"></div>
        </div>
        <div className="content-posts">
          <MyPosts/>
          <Post message='Hi, how are you?'/>
          <Post message="It's my first post"/>
          <Post message='Therd post'/>
        </div>
      </div>    
    );
}

export default Profile;