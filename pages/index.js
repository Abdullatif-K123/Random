import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Heart from "react-animated-heart";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs, { send } from "@emailjs/browser";

import { tsParticles } from "tsparticles";
import { loadConfetti, confetti } from "tsparticles-confetti";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef(null);
  const [isClick, setClick] = useState(false);
  const [index, setIndex] = useState(0);
  const [img, setImage] = useState("/sad.png");
  const [battaryIndex, setBattaryIndesx] = useState("/1.webp");
  const [rose,setRose] = useState(false);
  const quotes = [
    "انتي جميلة والاشياء الجميلة لايجب ان تكون حزينة",
    "إنتي قدها إن شاء الله.",
    "انا مأدرك التعب النفسي والجسدي يلي فيو انتي بس وصلتي لهل مطرح واكيد تعبتي كتير لحتى وصلتيلو والظروف الحالية ابدا مارح تمنعك من انك تحققي حلمك وتابعي مسيرك ف ابقي عم تبتسمي لانو الابتسامة بتلبقلك وبلبقلك كلشي حلو.",
    "الازهار تحتاج وقت لتزهر وكذلك انتي",
    "If anyone can do this, you can, I believe in you",
    "توقع خيراً ، مهما كثُر البلاء, بس قولي انتي بقدر اقول عنك عنوان التفائل والاشراق",
    "لا تضغطي القلب مرة التانية",
  ];
 const buttonOk = ["طيب ماشي", "اوكيه", "مشي وصل", "اي خلصنا بقا فهمنا", "وبعدين معك", "خلص فرحت", "اي بدي اضغطو غصب عنك"]
  const handleClick = () => {
    if(index < 7)
    setTimeout(() => {
      Swal.fire({
        title: quotes[index],
        confirmButtonText: buttonOk[index],
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        
        },
        customClass: {
          title: styles.textHead,
          confirmButton: styles.buttonConfirm,
        },
      });

      setClick(false);
    }, 1000);
    setIndex(index + 1);
    if (index + 1 === 2) {
      setBattaryIndesx("/2.webp");
    }
    if (index + 1 === 5) {
      setBattaryIndesx("/3.webp");
      setImage("/doctor.png");
    }
    if (index + 1 === 3) setImage("/happy.png");
    if(index + 1 === 8){
      handleFire()
      setRose(true)
      sendEmail("Bana has just open rose and chocolate")
    }
    else
    handleValantine();

  };
  const sendEmail = async (str) => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const templateParams = {
      to_name: "Abdullatif Your babe open the link", // Replace with the recipient's name
      from_name: "Bana", // Replace with the sender's name
      message: str? str :`Bana open the link h:${hours} M:${minutes} ip:${data.ip}`,
    };
    emailjs
      .send(
        "service_5w8wn7e", // Replace with your Email.js service ID
        "template_nzfiu2h", // Replace with your Email.js template ID
        templateParams,
        "OL4noq5WwKMVQFZr_" // Replace with your Email.js user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };
  const handleValantine = ()=>{
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}
  useEffect(() => {
    sendEmail();
  }, []);
  const handleFire = () => {const duration = 15 * 1000,
    animationEnd = Date.now() + duration;
  
  let skew = 1;
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  (function frame() {
    const timeLeft = animationEnd - Date.now(),
      ticks = Math.max(200, 500 * (timeLeft / duration));
  
    skew = Math.max(0.8, skew - 0.001);
  
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["red","pink", "FF69B4", "FF1493", "C71585"],
      shapes: ["heart"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });
  
    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         {!rose && 
        <div className={styles.content}>
          <div className={styles.images}>
            <Image
              src={img}
              width={150}
              height={index + 1 >= 6 ? 300 : 150}
              alt="sad"
            />
            <Image src={battaryIndex} width={100} height={50} alt="1" />
          </div>
          <div className={styles.heartContent}>
            <h1>حاسس بانعدام الطاقة والشغف اضغطي القلب</h1> 
            {index < 6 && index !== 0 && <p>رجاع اضغط كمان مرة</p>}
            {index >= 7 && (
              <p>
                خالص بس حبيت ابهجك شوي وما عرفت شلون ففكرت بهل طريقة بس جد ما
                بحب اشوفك تعبانة او حزينة
              </p>
            )}
            <Heart 
              isClick={isClick}
              onClick={() => {
                setClick(!isClick);
                handleClick();
              }}
            />
          </div>
        </div>}
        {rose && 
          <div className={styles.content}>
             <div className={styles.heartContent}>
            <h1>مو قلتلك لا تضغطي مرة التانية طيب خدي هي وردة</h1>
            </div>
          <div className={styles.images}>
            <Image
              src="/rose.png"
              width={300}
              height={  350  }
              alt="rose"
            />
             </div>
             <div className={styles.heartContent}>
            <h1>وهي كمان شوكولا</h1>
            </div>
          <div className={styles.images}>
            <Image
              src="/chocolate.png"
              width={250}
              height={ 200  }
              alt="chocolate"
            />
             </div>
            
          </div>
         }
      </main>
    </>
  );
}
