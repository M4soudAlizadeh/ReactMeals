import React from "react";

const AuthContext = React.createContext([
  {
    key: "",
    title: "",
    describ: "",
    price: "",
    amount: "",
  },
]);

export const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider
      value={[
        {
          key: Math.random(),
          title: "Sushi",
          describ: "Finest fish and veggies",
          price: 22.9,
          amount: "",
        },
        {
          key: Math.random(),
          title: "Schnitzel",
          describ: "A german specialty",
          price: 16.5,
          amount: "",
        },
        {
          key: Math.random(),
          title: "Barbecue Burger",
          describ: "American, raw, meaty",
          price: 12.99,
          amount: "",
        },
        {
          key: Math.random(),
          title: "Green Bowl",
          describ: "Healthy and great",
          price: 18.99,
          amount: "",
        },
      ]}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
