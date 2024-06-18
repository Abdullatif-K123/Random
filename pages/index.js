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
import RoulettePro from "react-roulette-pro";
const inter = Inter({ subsets: ["latin"] });
const prizes = [
  {
    image: "/chocolate-dark.png",
    text: "لوح شوكولا اسود",
  },
  {
    image: "/cake.png",
    text: "تشيز كيك",
  },
  {
    image: "/andomi.png",
    text: "اندومي خضار",
  },
  {
    image: "/marshmello.png",
    text: "مارشميلو",
  },
  {
    image: "/marshmello.png",
    text: "مارشميلو",
  },
  {
    image: "/snacks.png",
    text: "كيس اكلات منوع",
  },
  {
    image: "/rose-prize.png",
    text: "وردة ",
  },

  {
    image: "/dounats.png",
    text: "دونات",
  },
  {
    image: "/sneaker.png",
    text: "سنيكر",
  },
  {
    image: "/mug.png",
    text: "كاسة || ماغ كيوت",
  },
  {
    image: "/one-stack.png",
    text: "عيدية بقيمة 50 الف ليرة",
  },
  {
    image: "/two-stack.png",
    text: "عيدية بقيمة 100 الف ليرة",
  },
  {
    image: "/smarat-watch.png",
    text: "ساعة ذكية",
  },
  {
    image: "/airpods.png",
    text: "سماعات لاسلكية",
  },
  {
    image: "/box.png",
    text: "صندوق مفاجأة",
  },
];
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
  const [spinning, setSpinning] = useState(5);
  const [loading, setLoading] = useState(true);
  const [winIndex, setWinIndex] = useState(Math.floor(Math.random() * 11));
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const quotes = [
    "هل مرة جبتلك بعض الحقائق العلمية المشكوك بصحتها مع شوية شغلات تانية قبل ما تنامي هيك احاول اغيرلك مودك ولو بهل شغلات البسيطة بس والله بحب افرحك ولو بشي تافه وما بنحكى فيه بس هيك بحب اعمل هيك ف معلش تحملي هل مريض النفسي",
    "بانة بكرا بالمناوبة والدنيا اعياد ومالها طايقة حدا ونفد صبرها هيك بتكون النتيجة",
    " ما يعرفو انك عم تنامي 4 ساعات او كني اقل كل 30 ساعة شو كانو حكو بهل حالة بس والله لما قرأت هي المعلومة حزنت الصراحة عليكي والله لو اقدر البس ملاية واناوب عنك ما بقول لا بس المشكلة رح يعرفو الفرق من نمرة رجلي لما البس الكروكس, بس انتي قدها ان شاء الله رغم كل هل صعوبات يلي عم يصير معك",
    " ما بعرف بصّدق هل معلومة شو رائيك انتي بس منيح قرأتها وعلى كل حال انا مابقلك شي بكفي اجبلك شوكولا ووردة واقلك حقك يا بانة او يا دكتورتي بظن بمشي الحال بس شو رائيك هلأ بهل معلومة صحيحة ولا لا  ",
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

  const winPrizeIndex = 1;

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id:
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : generateId(),
  }));
  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    sendEmail(`🥳 مبرووك بانة ربحتي معنا ${prizes[winIndex]?.text} ! 🥳`);
    setSpinning(spinning - 1);
    localStorage.setItem("spinCounts", spinning - 1);
    confetti({
      particleCount: 500,
      spread: 80,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      Swal.fire({
        title: `🥳 مبرووك بانة ربحتي معنا ${prizes[winIndex]?.text} ! 🥳`,
        confirmButtonText: "تم",
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
      }).then((result) => {
        setStart(false);
      });
      setWinIndex(Math.floor(Math.random() * 11));
    }, 1000);
  };
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
    setIndex(index + 1);
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
    handleFire();
    // let numberSpin = 0;
    // if (!localStorage.getItem("spinCounts")) {
    //   localStorage.setItem("spinCounts", 1);
    //   numberSpin = 5;
    // } else {
    //   setSpinning(Number(localStorage.getItem("spinCounts")));
    //   numberSpin = Number(localStorage.getItem("spinCounts"));
    // }
    // if (numberSpin) {
    //   Swal.fire({
    //     title: `بانة انا بعتقد صار في شوية مشاكل عندي وصلني بس اربعة شغلات والمفروض يكونو خمسة: دونات-سنيكرز- 50ل- اندومي خضار ماوصلني غير هدول لهل شي رح امنحك محاولة تانية مشان يكونو خمس شغلات عندي`,
    //     confirmButtonText: "مشي",
    //     showClass: {
    //       popup: `
    //         animate__animated
    //         animate__fadeInUp
    //         animate__faster
    //       `,
    //     },
    //     hideClass: {
    //       popup: `
    //         animate__animated
    //         animate__fadeOutDown
    //         animate__faster
    //       `,
    //     },
    //     customClass: {
    //       title: styles.textHead,
    //       confirmButton: styles.buttonConfirm,
    //     },
    //   });
    // }
    setLoading(false);
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

  const handleButton = (str) => {
    setChoosing(false);
    sendEmail(str);
  };
  useEffect(() => {
    index > 5 ? handleFire() : null;
  }, [index]);
  if (loading) {
    return (
      <main className={styles.main}>
        <h1>loading...</h1>
      </main>
    );
  }
  return (
    <>
      <Head>
        <title>Just for you</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {false && (
          <>
            <div className={styles.content}>
              <div className={styles.something}>
                <RoulettePro
                  prizes={prizeList}
                  prizeIndex={prizeIndex + winIndex}
                  start={start}
                  spinningTime={4}
                  onPrizeDefined={handlePrizeDefined}
                  defaultDesignOptions={{ prizesWithText: true }}
                  options={{ stopInCenter: true }}
                />
                <button
                  disabled={start}
                  onClick={handleStart}
                  className={styles.button3}
                  style={{ background: start ? "gray" : "#2ea44f" }}
                >
                   اضغطي خلينا نشوف حظ بانة المحاولات المتبقية {spinning}
                </button>
              </div>
            </div>

            <h1> 
              Good morning my doctor 
            </h1>
           
          </>
        )}
        
          <h1>
           😂ليش حاسس انا كأنو ما عجبوكي الجوائز يلي اربحتيهن  
              بقا الله يرزقني وهداك الوقت احط بدال هدول موبايلات من ايفون للشوامي يكون عندك محاولة وحدة وهون بقدر اقول تعي جربي حظك بشكل جدي  
            🥳{" "}
          </h1>
       
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
