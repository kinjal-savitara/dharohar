import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import  { useState, useEffect }  from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [showImage, setShowImage] = useState(true);

   

   useEffect(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";

     const timer = setTimeout(() => {
      setShowImage(false); 
    }, 2000);
    return () => clearTimeout(timer);
     
  }, []);

  
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

const handleSubmit = (e) => {
  e.preventDefault();
  const subject = encodeURIComponent("New Lead from Virtual Tour");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
  );

  window.location.href = `mailto:kinjal@yopmail.com?subject=${subject}&body=${body}`;
};

  
 
  
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        zIndex: 1,
      }}
    >
      {/* Fullscreen 360 iframe */}
      <iframe
        src="https://tours.savitarrealty.in/virtualtour/f0fc80bb"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="fullscreen;vr;xr-spatial-tracking;gyroscope;accelerometer;magnetometer;"
         allowFullScreen
        webkitAllowFullScreen="true"
        mozAllowFullScreen="true"
        title="Dharohar"
      ></iframe>
 
           
       
        
    </div>


     


   
  )
}
