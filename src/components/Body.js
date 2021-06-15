import React from 'react'
import css from '../assets/css/Body.css'
class Body extends React.Component{
    render() {
        return(
            <div>
                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100">
                        <div className="col-md-4 col-xl-3 chat">
                            <div className="card mb-sm-3 mb-md-0 contacts_card">
                                <div className="card-body contacts_body">
                                    <ui className="contacts">
                                        <li className="active">
                                            <div className="card-header">
                                                <div className="d-flex bd-highlight">
                                                    <div className="img_cont">
                                                        <img src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                                                             className="rounded-circle user_img"/>
                                                        <span className="online_icon"/>
                                                    </div>
                                                    <div className="user_info">
                                                        <span>Khalid</span>
                                                        <p>Kalid is online</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-header">
                                                <div className="d-flex bd-highlight">
                                                    <div className="img_cont">
                                                        <img src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                                                             className="rounded-circle user_img"/>
                                                        <span className="online_icon offline"/>
                                                    </div>
                                                    <div className="user_info">
                                                        <span>Taherah Big</span>
                                                        <p>Taherah left 7 mins ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-header">
                                               <div className="d-flex bd-highlight">
                                                   <div className="img_cont">
                                                       <img src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                                                           className="rounded-circle user_img"/>
                                                       <span className="online_icon"/>
                                                   </div>
                                                   <div className="user_info">
                                                       <span>Sami Rafi</span>
                                                       <p>Sami is online</p>
                                                   </div>
                                               </div>
                                            </div>
                                        </li>
                                    </ui>
                                </div>
                                <div className="card-footer">

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-xl-6 chat">
                            <div className="card">
                                <div className="card-header msg_head">
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                                 className="rounded-circle user_img"/>
                                                <span className="online_icon"/>
                                        </div>
                                        <div className="user_info">
                                            <span>Chat with Khalid</span>
                                            <p>1767 Messages</p>
                                        </div>
                                        <div className="video_cam">
                                            <span>
                                                <i className="fas fa-video"/>
                                            </span>
                                            <span>
                                                <i className="fas fa-phone"/>
                                            </span>
                                        </div>
                                    </div>
                                    <span id="action_menu_btn">
                                        <i className="fas fa-ellipsis-v"/>
                                    </span>
                                    <div className="action_menu">
                                        <ul>
                                            <li>
                                                <i className="fas fa-user-circle">
                                                    View profile</i>
                                            </li>
                                            <li>
                                                <i className="fas fa-users">
                                                    Add to close friends</i>
                                            </li>
                                            <li>
                                                <i className="fas fa-plus">
                                                    Add to group</i>
                                            </li>
                                            <li>
                                                <i className="fas fa-ban">
                                                    Block</i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body msg_card_body">
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                                 className="rounded-circle user_img_msg"/>
                                        </div>
                                        <div className="msg_cotainer">
                                            Hi, how are you samim?
                                            <span className="msg_time">8:40 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Hi Khalid i am good tnx how about you?
                                            <span className="msg_time_send">8:55 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png"
                                                 className="rounded-circle user_img_msg"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                                 className="rounded-circle user_img_msg"/>
                                        </div>
                                        <div className="msg_cotainer">
                                            I am good too, thank you for your chat template
                                            <span className="msg_time">9:00 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            You are welcome
                                            <span className="msg_time_send">9:05 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png"
                                                 className="rounded-circle user_img_msg"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                                 className="rounded-circle user_img_msg"/>
                                        </div>
                                        <div className="msg_cotainer">
                                            I am looking for your next templates
                                            <span className="msg_time">9:07 AM, Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            Ok, thank you have a good day
                                            <span className="msg_time_send">9:10 AM, Today</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png"
                                                 className="rounded-circle user_img_msg"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                                 className="rounded-circle user_img_msg"/>
                                        </div>
                                        <div className="msg_cotainer">
                                            Bye, see you
                                            <span className="msg_time">9:12 AM, Today</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="input-group">
                                        <div className="input-group-append">
                                            <span className="input-group-text attach_btn">
                                                <i className="fas fa-paperclip"/>
                                            </span>
                                        </div>
                                        <textarea name="" className="form-control type_msg"
                                                  placeholder="Type your message..."></textarea>
                                        <div className="input-group-append">
                                            <span className="input-group-text send_btn"><i
                                                className="fas fa-location-arrow"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Body;

/*
                                <div className="card-header">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." name="SearchUser"
                                               className="form-control search"/>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text search_btn"><i
                                                    className="fas fa-search"></i></span>
                                            </div>
                                    </div>
                                </div>





 */