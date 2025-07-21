import { configureStore } from '@reduxjs/toolkit';
import message from './reducers/messageSlice';
import user from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    user,
    message,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
