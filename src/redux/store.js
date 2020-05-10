import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer ";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
        { id: 3, message: "It's my first213 post", likesCount: 21 },
        { id: 4, message: "It's my post", likesCount: 22 },
      ],
      newPostText: "sharfik322",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Why? yo" },
        { id: 4, message: "Why? yo" },
        { id: 5, message: "Why? yo" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer паторн
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;

//store - oop
