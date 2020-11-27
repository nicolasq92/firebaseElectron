import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/app";
import "firebase/database";
// import {
//   FirebaseDatabaseProvider,
//   FirebaseDatabaseNode,
// } from "@react-firebase/database";
import { config } from "./config";

class App extends React.Component {
  state = {
    limit: 2,
  };

  initializeApp = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyDRSsmQddrwytEvsTn-V22_cwLAuH92_2Q",
      authDomain: "electronapp-f7d37.firebaseapp.com",
      databaseURL: "https://electronapp-f7d37.firebaseio.com",
      projectId: "electronapp-f7d37",
      storageBucket: "electronapp-f7d37.appspot.com",
      messagingSenderId: "161021118240",
      appId: "1:161021118240:web:82d70465910a08ac69b945",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  };

  writeUserData = (userId, name, email, imageUrl) => {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
  };

  render() {
    return (
      // <FirebaseDatabaseProvider firebase={firebase} {...config}>
      //   <FirebaseDatabaseNode
      //     path="user_bookmarks/"
      //     limitToFirst={this.state.limit}
      //     orderByKey
      //     // orderByValue={"created_on"}
      //   >
      //     {(d) => {
      //       return (
      //         <div className="App">
      //           <header className="App-header">
      //             <img src={logo} className="App-logo" alt="logo" />
      //             <p>
      //               Edit <code>src/App.js</code> and save to reload.
      //             </p>
      //             <a
      //               className="App-link"
      //               href="https://reactjs.org"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               Learn React
      //             </a>
      //             <button
      //               onClick={this.writeUserData(
      //                 "12345",
      //                 "jeff",
      //                 "joseq@gmail.com",
      //                 "imageUrl.png"
      //               )}
      //             >
      //               CliCK HERE
      //             </button>
      //           </header>
      //         </div>
      //       );
      //     }}
      //   </FirebaseDatabaseNode>
      // </FirebaseDatabaseProvider>
      <>holis
      <button onClick={() => this.initializeApp}>
        jojojo
      </button>

      <button onClick={ () => this.writeUserData(
                      "12367",
                      "NQ",
                      "joseq@gmail.com",
                      "imageUrl.png"
                    )}> escribir

      </button>
      </>
    );
  }
}

export default App;
