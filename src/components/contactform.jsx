import React, { Component } from "react";
import  {gapi}  from 'gapi-script'; 


const SPREADSHEET_ID = "1YIzyZDMaLyeGST0eCxEt9IF1QXnVpUUiWKVBDpo98CI"; //from the URL of your blank Google Sheet
const CLIENT_ID ="368386621017-qudg043impdl59ogfvkr0l3a5cn6j62v.apps.googleusercontent.com"; //from https://console.developers.google.com/apis/credentials
const API_KEY = "AIzaSyCWlM8igr2fXv0HkEnxOrBbEXiCwsGFOSE"; //https://console.developers.google.com/apis/credentials
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";




class ContactForm extends Component {
    state = {
      name: undefined,
      email: undefined,
      message: undefined,
    };
    constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    componentDidMount() {
      this.handleClientLoad();
    }
  
    handleClientLoad = () => {
      gapi.load("client:auth2", this.initClient);
    };
  
    initClient =()=> { 
      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(()=> {
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
        this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }
    onFormSubmit = (submissionValues) => {
      // alert("Form is Submitted");
      const params = {
        spreadsheetId: SPREADSHEET_ID, 
        range: 'Sheet1', 
        valueInputOption: 'USER_ENTERED', 
        insertDataOption: 'INSERT_ROWS', 
      };
  
      const valueRangeBody = {
        'majorDimension': 'ROWS', 
        'values': [submissionValues] 
      };
  
      let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function (response) {
       
        console.log(response.result);
      }, function (reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }
  
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };
  
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text"
              class="form-control"
              placeholder="Full Name"
            />
            <input
              value={this.state.email}
              onChange={this.handleEmailChange}
              type="email"
              class="form-control"
              placeholder="Email"
            />
            <textarea
              value={this.state.message}
              onChange={this.handleMessageChange}
              class="form-control"
              rows="3"
              placeholder="Write here..."
            />
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactForm;
