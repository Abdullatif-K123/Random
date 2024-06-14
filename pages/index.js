import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Heart from "react-animated-heart";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs, { send } from "@emailjs/browser";
import { tsParticles } from "tsparticles";
import Typewriter from "typewriter-effect";
import { loadConfetti, confetti } from "tsparticles-confetti";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef(null);
  const [isClick, setClick] = useState(false);
  const [index, setIndex] = useState(0);
  const [img, setImage] = useState("/flower-one.jpg");
  const [battaryIndex, setBattaryIndesx] = useState("/1.webp");
  const [rose, setRose] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
 const [choosing, setChoosing] = useState(true);
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const quotes = [
    "هل مرة جبتلك بعض الحقائق العلمية المشكوك بصحتها مع شوية شغلات تانية قبل ما تنامي هيك احاول اغيرلك مزاجك",
    "بانة وقت ينفد صبرها على الاهل والمرضى",
    "يا علاي يا بانة ما يعرفو انك عم تنامي 4 ساعات او كني اقل كل 30 ساعة لهل شي لما بقلك انت متميزة ما بتصدقي",
    " ما بعرف بصدق هل معلومة شو رائيك انتي بس منيح قرأتها وعلى كل حال انا مابقلك شي بكفي اجبلك شوكولا ووردة واقلك حقك يا بانة او يا دكتورتي بظن بمشي الحال بس شو رائيك هلأ بهل معلومة صحيحة ولا لا  ",
    "بانة وقت تعصب مني وانا بقلها زعلتي مني دكتورة, بانة هيك بكون ردها لا واهم شي بتقلي مقدرة الموضوع",
    "واخيرا عرفت اش عم يصير معي وقت اشوفك ليش بصير غبي نوعا ما طلعت من هدول ال 70",
    "بس حبيت اغيرلك جو صار وقت عبارات النوم",
  ];
  const getNoButtonText = () => {
    const phrases = [
      "لا ما اثر فيني طاول",
      "حزن بالله شو",
      "بتعرفي انو ابتسامتك كتير حلوة",
      "بتعرفي انك والله حلوة كتير",
      "حدا خبرك قبل انك كتير حلوة",
      "طيب وهلأ",
      "طيب وهلأ",
      "طيب وهلأ",
      ":(  طيب وهلأ",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const imges = [
    "/funny-2.jpg",
    "/fact-2.jpg",
    "/fact-3.jpg",
    "/funny-1.jpg",
    "/know-1.jpg", 
  ];
  const buttonCon = [
    "انتي احلى",
    "انتي احلى",
    "انتي احلى منهن",
    "انتي احلى منهن",
    "تغير رائيي هلأ صار في شي عندي احلى واغلى منهن",
    "انتي مشرقة واحلى",
    "انتي الطف واحلى",
  ];
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
    // if (index < 7)
    //   setTimeout(() => {
    //     Swal.fire({
    //       title: buttonCon[index],
    //       confirmButtonText:
    //         "بعرف وما عم انتظر منك تقلي هل شي لاني بعرف حالي جميلة وحلوة",
    //       showClass: {
    //         popup: `
    //       animate__animated
    //       animate__fadeInUp
    //       animate__faster
    //     `,
    //       },
    //       hideClass: {
    //         popup: `
    //       animate__animated
    //       animate__fadeOutDown
    //       animate__faster
    //     `,
    //       },
    //       customClass: {
    //         title: styles.textHead,
    //         confirmButton: styles.buttonConfirm,
    //       },
    //     }).then((result) => {
    //       setIndex(index + 1);
    //       if (index + 1 === 2) {
    //         setBattaryIndesx("/2.webp");
    //       }
    //       if (index + 1 === 5) {
    //         setBattaryIndesx("/3.webp");
    //         setImage("/cute-girl.png");
    //       }
    //       if (index + 1 === 3) setImage("/happy.png");
    //       if (index + 1 === 7) {
    //         handleFire();
    //         setRose(true);
    //         sendEmail("Bana has just open the last page");
    //       }
    //     });

    //     setClick(false);
    //   }, 1500); 
     setIndex(index + 1)
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
      message: str
        ? str
        : `Bana open the link h:${hours} M:${minutes} ip:${data.ip}`,
    };
    emailjs
      .send(
        "service_37g9hvt", // Replace with your Email.js service ID
        "template_o871inm", // Replace with your Email.js template ID
        templateParams,
        "NuejpJ1WEMn-MdTan" // Replace with your Email.js user ID
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
    // handleFire();
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
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
        shapes: ["star"],
        gravity: randomInRange(0.4, 0.6),
        scalar: 1.2,
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleButton =(str)=>{
       setChoosing(false); 
       sendEmail(str);
  }
  useEffect(()=>{
     index > 5 ? handleFire(): null
  },[index])
  return (
    <>
      <Head>
        <title>Just for you</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
    { index  > 5 && <div className={styles.content}>
      <div className={styles.images}>
        <Image
          src="/girl_sleeping.png"
          width={360}
          height={360}
          alt="sad"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className={styles.heartContent}>

      
        <h1 style={{ color: "#fff" }}>
          <Typewriter
            options={{
              strings: [
                "تصبحي على خير يا بانة واحلام سعيدة",
                "يردونك تزعلي وانتي دكتورة لك هيبتك ونجاحك ف تبا لمن يريد لك السوء",
                "نامي واستريحي يا بانة ف حتى الزهور يجب ان ترتاح والله ما بعرف شو بدي اكتب المهم وصلت الفكرة مو هيك؟ ",
                "صبحك الله بالخير، كل ما غرّد الطير،", 
                "لا تنسي بانة بكرا يوم عرفة كتري دعاء ادعي كتير  لانو جد انا معلق املي بالله ومالي مستسلم بس بالاخير يلي اخترلنا ياه الله رح يصير وانا اسف اذا عم ازعجك بهل شي بس والله عم اترك لو خيط من الامل",
                "مرة التانية تصبحي على خير يا بانة يا دكتورتي والله يجعلك من نصيبي ويرزقني ويفتح علاي وعليكي واكمل طريقي معكي وافرح بنجاحك واشاركك إنجازاتي"            
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10
            }}
          />
        </h1>
      </div>
    </div>  }
    { index <=5 &&   <div className={styles.content}>
       { index <= 5 && <div className={styles.images}>
              <Image
                src={imges[index - 1]}
                width={300}
                height={300}
                alt="sleep"
                style={{borderRadius: "20px"}}
              /> 
            </div>}
      <div className={styles.heartContent}>
              <h1>
              {quotes[index]}
              </h1>
             { (index===3 && choosing) && <div className={styles.buttonsClicked}>
              <button  className={styles.yesButton} onClick={()=>{handleButton("صح")}}>صح</button>
              <button  className={styles.yesButton} style={{background: "green"}}  onClick={()=>{handleButton("عرفت")}}>لو بهمك كنت عرفت لحالك</button>
              <button  className={styles.noButton}  onClick={()=>{handleButton("غلط")}}>غلط</button>
              </div>}
              <Heart
                isClick={isClick}
                onClick={() => {
                  setClick(!isClick);
                  handleClick();
                }}
              />
            </div>
        </div>}
        {/* {!rose && (
          <div className={styles.content}>
            <div className={styles.images}>
              <Image
                src={imges[index]}
                width={280}
                height={250}
                alt="sad"
                style={{borderRadius: "20px"}}
              />
              <Image src={battaryIndex} width={100} height={50} alt="1" />
            </div>
            <div className={styles.heartContent}>
              <h1>
              {quotes[index]}
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
              <h1>بتمنى كون غيرتلك مودك بس جد يلي قلتو هي حقيقة علمية مثبتة</h1>
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
             <h1 style={{textAlign: "center"}}>رح خبرك بسر</h1>
             <h1 style={{textAlign: "center"}}>بشوف فيكي اشيا مختلفة عن باقي الناس ما بعرف شو هو بس مجملك كتير وبحس هل شي هو قريب مني وبشبهني <br/>الله يسرلي ويجعلك إلي ويجعلني الشخص يلي بكون سندك وسبب سعادتك ويراضيكي ويتفنن بمراضاتك وابني عيلة معك</h1>
              <h1 style={{textAlign:"center"}}>يا دكتورتي </h1>
             <Image
                src="/thank-you.png"
                width={350}
                height={300}
                alt="flower"
                
              />
            </div>
           )
        } */}
      </main>
    </>
  );
}
