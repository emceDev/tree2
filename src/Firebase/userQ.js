import React from 'react'
import firebase from 'firebase'
import {firebaseConfig,app} from '../Firebase/config'

var provider = new firebase.auth.GoogleAuthProvider();

export const signInPopup = (cb) => {
firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    // set logged:true in db
    window.localStorage.setItem("logged",true)
    console.log("loggedIN")
    cb()
  }).catch(function(error) {
    console.log("error: " + error)
    // ...
  })
}
export const logOut = (cb) =>{
    firebase.auth().signOut().then(function() {
      //set logged:false in db
      console.log("loggedOut")
      window.localStorage.clear()
        cb()
      }).catch(function(error) {
        // An error happened.
      });
}

export const createUser = (uid, email, name) => {
  console.log("getting User Key")
  const userKey = app.database().ref('/users/').push()
  console.log(userKey)
}