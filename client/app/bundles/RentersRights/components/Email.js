import React from 'react';
import RentersLayout from './RentersLayout'


const inlineStyle =  {
    form  : {
        'margin': '0 auto',
        'width': '600px',
        'height' : '300px'
    },
    label : {
        'display': 'inline-block',
        'textAlign': 'left',
        'float': 'left',
        'width' : '100%'
    },
    input : {
        'display': 'inline-block',
        'textAlign': 'left',
        'float': 'right',
        'width' : '100%'
    },
    note : {
        'display': 'inline-block',
        'textAlign': 'left',
        'float': 'right',
        'width' : '100%'        
    }
}


export default class Eviction extends React.Component {

  constructor(props){
    super(props);

    this.state = {        
        message_html : '',
        email : '',
        note: ''
    }

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.onSend=this.onSend.bind(this);
  }

  handleMessageChange(event){
      this.setState({
        message_html : event.target.value
      });
  }

  handleEmailChange(event){
      this.setState({
        email : event.target.value
      });
  }

  handleNoteChange(event){
      this.setState({
        note : event.target.value
      });
  }

  onSend(event){
    event.preventDefault();
    console.log("onSend clicked");
    //console.log(this.state.message_html);

    const data = {
      to_name: "Dear Renter's Rights & Referrals Program Members, ", 
      message_html: this.state.message_html
    }

    //console.log(data);
    
    emailjs.send(
                  "gmail",                  
                  "TEMPLATE_NAME_FROM_EMAILJS"
                  data
                )    
    
  }

  render() {

{/* Locale set up. Remove comment when app is translated.
    const { locale } = this.props;
    <RentersLayout locale={locale}>
  */}

    
    return ( 
      <form onSubmit={this.onSend} style={inlineStyle.form} >
        <label style={inlineStyle.label}>
          Message:
          <input style={inlineStyle.input} type="text" value={this.state.message_html} onChange={this.handleMessageChange} />
        </label>
        <br/><br/>
       <label style={inlineStyle.label}>
          Email:
          <input style={inlineStyle.input} type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <br/><br/>
        <label style={inlineStyle.label}>
          Zip code:
          <input style={inlineStyle.note} type="text" value={this.state.note} onChange={this.handleNoteChange} />
        </label>
        <br/><br/>
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


