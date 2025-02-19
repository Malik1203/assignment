import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const generateUserId = () => `UID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const [user, setUser] = useState({
    id: generateUserId(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false); // Controls the popup dialog

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    setUsers(Array.isArray(savedUsers) ? savedUsers : []);
  }, []);

  const validate = () => {
    if (!user.name.trim()) return "Name is required!";
    if (!user.address.trim()) return "Address is required!";
    if (!user.email.trim()) return "Email is required!";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email))
      return "Invalid email format!";
    if (!user.phone.trim()) return "Phone number is required!";
    if (!/^\d{10}$/.test(user.phone)) return "Phone number must be exactly 10 digits!";
    return "";
  };

  const checkDuplicateUser = () => {
    return users.some((existingUser) => existingUser.email === user.email || existingUser.phone === user.phone);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const error = validate();
    if (error) {
      setErrorMessage(error);
      setOpen(true); // Show validation popup
      return;
    }

    if (checkDuplicateUser()) {
      setErrorMessage("User with this Email or Phone Number Already Exists!");
      setOpen(true); // Show duplicate email/phone popup
      return;
    }

    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));

    setUser({ id: generateUserId(), name: "", address: "", email: "", phone: "" });
    alert("User Data Saved!");
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title}>User Registration</Typography>

      <TextField label="User ID" value={user.id} disabled variant="filled" />
      <TextField label="Name" name="name" value={user.name} onChange={handleChange} variant="outlined" />
      <TextField label="Address" name="address" value={user.address} onChange={handleChange} variant="outlined" />
      <TextField label="Email" name="email" value={user.email} onChange={handleChange} variant="outlined" />
      <TextField label="Phone" name="phone" value={user.phone} onChange={handleChange} variant="outlined" />

      <Button className={styles.submitButton} onClick={handleSubmit}>Submit</Button>

      {/* Popup Alert Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>⚠ Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserForm;
