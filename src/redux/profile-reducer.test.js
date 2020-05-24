import React from "react";
import profileReducer, { addPostActionCreator, deletePost, setUserProfile, setStatus } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
    { id: 3, message: "It's my first213 post", likesCount: 21 },
    { id: 4, message: "It's my post", likesCount: 22 },
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data 
    let action = addPostActionCreator("it-cam.com");
    

      //2. action
    let newState = profileReducer(state, action);


    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new posts should be correct', () => {
  // 1. test data 
    let action = addPostActionCreator("it-cam.com");
   

      //2. action
    let newState = profileReducer(state, action);


    // 3. expectation
    expect(newState.posts[4].message).toBe("it-cam.com");
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data 
    let action = deletePost(1)
   

      //2. action
    let newState = profileReducer(state, action);


    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length should not be decrement is incorrect', () => {
  // 1. test data 
    let action = deletePost(1000)
   

      //2. action
    let newState = profileReducer(state, action);


    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('set user profile', () => {
  // 1. test data 
    let action = setUserProfile(10)
   

      //2. action
    let newState = profileReducer(state, action);


    // 3. expectation
    expect(newState.profile).toBe(10);
});

it('set status', () => {
  // 1. test data 
    let action = setStatus("qwe1000")
   

      //2. action
    let newState = profileReducer(state, action);


    // 3. expectation
    expect(newState.status.length).toBe(7);
});

