import React from "react";
import css from '../assets/css/Cambio.css'
import update from "immutability-helper";
class Cambio extends React.Component{
    constructor() {
        super();
        this.state = {
            mensaje : ''
        }
    }
    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }
    enviarMensaje(e){
        console.log(this.state.mensaje)
    }
    render() {
        return(
            <div>
                <div className="container">
                    <h3 className=" text-center">Mensajes</h3>
                    <div className="messaging">
                        <div className="inbox_msg">
                            <div className="inbox_people">
                                <div className="headind_srch">
                                    <div className="recent_heading">
                                        <h4>Recientes</h4>
                                    </div>
                                    <div className="srch_bar">
                                        <div className="stylish-input-group">
                                            <input type="text" className="search-bar" placeholder="Search"/>
                                                <span className="input-group-addon">
                                                    <button type="button">
                                                        <i className="fa fa-search"
                                                           aria-hidden="true">
                                                        </i>
                                                    </button>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="inbox_chat">
                                    <div className="chat_list active_chat">
                                        <div className="chat_people">
                                            <div className="chat_img">
                                                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/>
                                            </div>
                                            <div className="chat_ib">
                                                <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                                <p>Test, which is a new approach to have all solutions
                                                    astrology under one roof.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat_list">
                                        <div className="chat_people">
                                            <div className="chat_img"><img
                                                src="https://ptetutorials.com/images/user-profile.png"
                                                alt="sunil"/>
                                            </div>
                                            <div className="chat_ib">
                                                <h5>Manuel Ballinas
                                                    <span className="chat_date">
                                                        Dec 24</span>
                                                </h5>
                                                <p>Mensaje de Prueba de diseño</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat_list">
                                        <div className="chat_people">
                                            <div className="chat_img"><img
                                                src="https://ptetutorials.com/images/user-profile.png"
                                                alt="sunil"/>
                                            </div>
                                            <div className="chat_ib">
                                                <h5>Carlos Herrera
                                                    <span className="chat_date">
                                                        Dec 20</span>
                                                </h5>
                                                <p>Mensaje de Prueba de diseño parte 2 con otro usuario</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mesgs">
                                <div className="msg_history">
                                    <div className="incoming_msg">
                                        <div className="received_msg">
                                            <div className="received_withd_msg">
                                                <p>Test which is a new approach to have all
                                                    solutions</p>
                                                <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                        </div>
                                    </div>
                                    <div className="outgoing_msg">
                                        <div className="sent_msg">
                                            <p>Test which is a new approach to have all
                                                solutions</p>
                                            <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                    </div>
                                    <div className="incoming_msg">
                                        <div className="received_msg">
                                            <div className="received_withd_msg">
                                                <p>Test, which is a new approach to have</p>
                                                <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                        </div>
                                    </div>
                                    <div className="outgoing_msg">
                                        <div className="sent_msg">
                                            <p>Apollo University, Delhi, India Test</p>
                                            <span className="time_date"> 11:01 AM    |    Today</span></div>
                                    </div>
                                    <div className="incoming_msg">
                                        <div className="received_msg">
                                            <div className="received_withd_msg">
                                                <p>We work directly with our designers and suppliers,
                                                    and sell direct to you, which means quality, exclusive
                                                    products, at a price anyone can afford.</p>
                                                <span className="time_date"> 11:01 AM    |    Today</span></div>
                                        </div>
                                    </div>
                                    <div className="outgoing_msg">
                                        <div className="sent_msg">
                                            <p>Mensaje Extra de prueba</p>
                                            <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                    </div>
                                </div>
                                <div className="type_msg">
                                    <div className="input_msg_write">
                                        <input type="text"
                                               className="write_msg"
                                               placeholder="Mensaje"
                                               id="mensaje"
                                               name="mensaje"
                                               value={this.state.mensaje}
                                               onChange={this.changeField.bind(this)}/>
                                        <button className="msg_send_btn"
                                                type="button" onClick={this.enviarMensaje.bind(this)}>
                                                <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                                        </button>
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
export default Cambio;