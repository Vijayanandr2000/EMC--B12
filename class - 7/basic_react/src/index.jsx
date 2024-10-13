import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CustomHeader from './components/Customheader'
import IdCard from './components/IdCard';

const profiles = [
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay1",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay2",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay3",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay4",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay5",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay6",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay7",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay8",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay9",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay10",
    age: "23"
  },
  {
    image: "https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7",
    name: "Vijay11",
    age: "23"
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomHeader title={"ID Card APP"} />
    {profiles.map(profile => {

      const { image, name, age } = profile

      return (
        <IdCard image={image}
          name={name}
          age={age}
        />
      )
    })}
    {/* <IdCard image={"https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7"}
      name={"Vijay"}
      age={23}
    /> */}
    {/* <IdCard image={"https://th.bing.com/th/id/OIP._p9tuXaitCqeHIXCEX7_CQAAAA?pid=ImgDet&w=164&h=246&c=7"}
      name={"Anand"}
      age={24}
    /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
