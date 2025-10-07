import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fname: '',
  lname: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  isStrong: false,
  dob: '',
  gender: '',
  confirmDetails: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setFname: (state, action) => { state.fname = action.payload },
    setLname: (state, action) => { state.lname = action.payload },
    setEmail: (state, action) => { state.email = action.payload },
    setUsername: (state, action) => { state.username = action.payload },
    setPassword: (state, action) => { state.password = action.payload },
    setConfirmPassword: (state, action) => { state.confirmPassword = action.payload },
    setIsStrong: (state, action) => { state.isStrong = action.payload },
    setDob: (state, action) => { state.dob = action.payload },
    setGender: (state, action) => { state.gender = action.payload },
    setConfirmDetails: (state, action) => { state.confirmDetails = action.payload },
  }
});

export const {
  setFname, setLname, setEmail,
  setUsername, setPassword, setConfirmPassword,
  setIsStrong, setDob, setGender, setConfirmDetails
} = registrationSlice.actions;

export default registrationSlice.reducer;