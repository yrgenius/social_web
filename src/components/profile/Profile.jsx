import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
        <div>
          <img className="content-img" src="https://store-images.s-microsoft.com/image/apps.3027.13567623013775892.3f14351e-b582-4c90-a061-5d147c58fd37.2bbb38e6-5d98-44d7-8f5b-3e5a64272e15?mode=scale&q=90&h=1080&w=1920" alt="snow-city" />
        </div>
        <div className="content-description">
          <div className="content-avatar"></div>
          <div className="content-descr"></div>
        </div>
        <div className="content-posts">
          <div>New post</div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>    
    );
}

export default Profile;