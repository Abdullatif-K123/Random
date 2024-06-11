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
  const [img, setImage] = useState("/cry.png");
  const [battaryIndex, setBattaryIndesx] = useState("/1.webp");
  const [rose, setRose] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const quotes = [
    "ها أنتِ تنهين يومًا جديدًا بعزيمة وتفاؤل، فأنت تستحقين كل خير",
    "مع زوال فجر هذا الصباح، أدعو الله أن يمنحك الفرح وسعادة لا يعقبها شقاء..",
    "ارتاحي ونامي يا بانة وأنتي تعلمين أن لديكي الإصرار والعزيمة لتحقيق ما تريدنه انا اثق بكي.",
    " شايفة شلون بس قلبت الصبح ل مساء والاستيقاظ للنوم هي صارت عندي عبارات جديدة",
    "إنتي قدها إن شاء الله.",
    "ما عرفت شواكتب هون بس بقلك مرة التانية مساء الورد والفل والعنبر والخير يا بانة",
    "لا تضغطي القلب مرة التانية",
  ];
  const getNoButtonText = () => {
  const phrases = [
     "لا ما اثر فيني طاول",
     "حزن بالله شو", 
     "طيب انتي متأكدة", 
     "كرمالي", 
     "حدا خبرك قبل انك كتير حلوة",
     "طيب وهلأ", 
     "طيب وهلأ", 
     "طيب وهلأ", 
     ":(  طيب وهلأ", 
          
  ]
  
  return phrases[Math.min(noCount, phrases.length - 1)];
};
  const buttonOk = [
    "طيب ماشي",
    "اوكيه",
    "ياحرام عم اشفق عليك",
    "اي بعرف بس شو بدي اعمل رح ضل اسايرك الله يكون بعونك ",
    "وبعدين معك",
    "اي خلص فهمنا مساء النور يعني ناوي تنزعلي مساي انت",
    "اي بدي اضغطو غصباً عنك وعن عيلتك صح انا كيوت بس عنيدة ل ابعد درجة ممكن تتصورها",
  ];
  const handleClick = () => {
    if (index < 7)
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
      }, 1500);
    setIndex(index + 1);
    if (index + 1 === 2) {
      setBattaryIndesx("/2.webp");
    }
    if (index + 1 === 5) {
      setBattaryIndesx("/3.webp");
      setImage("/cute-girl.png");
    }
    if (index + 1 === 3) setImage("/happy.png");
    if (index + 1 === 8) {
      handleFire();
      setRose(true);
      sendEmail("Bana has just open rose and chocolate");
    } else handleValantine();
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
      message: str
        ? str
        : `Bana open the link h:${hours} M:${minutes} ip:${data.ip}`,
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
  const handleValantine = () => {
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
  };
  useEffect(() => {
    sendEmail();
  }, []); 
  const handleFire = () => {
    const duration = 15 * 1000,
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
        colors: ["red", "pink", "FF69B4", "FF1493", "C71585"],
        shapes: ["heart"],
        gravity: randomInRange(0.4, 0.6),
        scalar: 2,
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
        {!rose && (
          <div className={styles.content}>
            <div className={styles.images}>
              <Image
                src={img}
                width={180}
                height={200}
                alt="sad"
              />
              <Image src={battaryIndex} width={100} height={50} alt="1" />
            </div>
            <div className={styles.heartContent}>
              <h1>يا مساء الخير يا بانة جبتلك دزينة جديدة من العبارات مشان تنهي يومك بنشاط 😄وحيوية
              
              </h1>
           
             
              <Heart
                isClick={isClick}
                onClick={() => {
                  setClick(!isClick);
                  handleClick();
                }}
              />
            </div>
          </div>
        )}
        {(rose && !yesPressed) &&  (
          <div className={styles.content}>
            <div className={styles.heartContent}>
              <h1>هلأ بالله فرحتي ولا لأ</h1>
            </div>
            <div className={styles.images}>
              <Image src="/rose.png" width={150} height={150} alt="rose" />
            </div>
            <div className={styles.buttonsClicked}>
            <button
              className={styles.yesButton}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              أي فرحت
            </button>
            <button
              onClick={handleNoClick}
              className={styles.noButton}
            >
              {noCount === 0 ? "لا" : getNoButtonText()}
            </button>
          </div>
          </div>
        )}
        {
           yesPressed && (
            <div className={styles.content} style={{display: "flex", alignItems:"center", flexDirection: "column"}}> 
             <h1 style={{textAlign: "center"}}>Thank you Bana</h1>
             <h1 style={{textAlign: "center"}}>وانا كمان فرحت</h1>
             <h1 style={{textAlign: "center"}}>بتمنالك كل الخير يا بانة والله يعطيكي كلشي بتتنميه واكتر</h1>
             <Image
                src="/thank-you.png"
                width={350}
                height={300}
                alt="flower"
                
              />
            </div>
           )
        }
      </main>
    </>
  );
}
