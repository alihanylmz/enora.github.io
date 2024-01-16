import React, { Component } from "react";
import styles from "./Contact.module.css"


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      submitted: false,
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Basit bir doğrulama ekleyin
    if (!this.state.name || !this.state.email || !this.state.subject || !this.state.message) {
      this.setState({ error: "Lütfen tüm alanları doldurun." });
      return;
    }

    this.setState({ submitted: true });

    // Form verilerini bir API'ye gönderme veya başka şekilde işleme
    // ...
  };

  render() {
    return (
      <div className={styles.Contact}>

        <h1>İletişim</h1>
        {this.state.submitted && <p>Mesajınız gönderildi!</p>}
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
       
        <div className={styles.telgps}>
        <div className={styles.gps} ><img src="/assets/contact/gps.png" /> 
        <h1>
İvedik Organize Sanayi Bölgesi <span class="alt-text">Hasemek Sanayi Sitesi 1468.cadde no :48</span></h1>
        </div>
        <div className={styles.phone} ><img src="/assets/contact/phone.png" />
        <h1>+90 554 889 16 31</h1> </div>
        
        <div className={styles.email} ><img src="/assets/contact/email.png" />
        <h1>info@enorareklam.com</h1>  </div>
        </div>

          <div className={styles.name}>
            <div className={styles.name2}>
            <label htmlFor="name">Adınız:</label></div>
            <input placeholder="Alihan YILMAZ" className={styles.name1} type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>


          <div className={styles.epostadiv}>
          <div className={styles.eposta1}>
            <label htmlFor="email">E-posta</label> </div>
            <input placeholder="enora@info.com.tr" className={styles.eposta2} type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>


          <div className={styles.konudiv}>
          <div className={styles.konu1}>
            <label htmlFor="subject">Konu</label></div>
            <input placeholder="Mesaj İçeriğini yazınız" className={styles.konu2} type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange} />
          </div>


            <div className={styles.mesajdiv}>
              <div className={styles.mesaj1}>
              <label htmlFor="message">Mesaj</label></div>
              <textarea placeholder="Mesajınızı buraya yazınız..." className={styles.mesaj2} id="message" name="message" value={this.state.message} onChange={this.handleChange} />
            </div>
            <div className={styles.socialmedia}>
            <div className={styles.instagram} ><img src="/assets/contact/instagram.png" /> </div>
            <div className={styles.linkedin} ><img src="/assets/contact/linkedin.png" /> </div></div>

          <div className={styles.buttondiv}>
          <button className={styles.button} type="submit">Gönder</button></div>
          
         <div className={styles.w} ><h1 className={styles.sup}>Made with <img src="/assets/contact/heart.png" /> by Alihan Yılmaz</h1></div> 
        </form>
      </div>

      
    );
  }
}

export default Contact;
