import React from "react";
import EmilyPic from "./pics/Emily.png";
import JesicaPic from "./pics/Jesica.png";
import KyliePic from "./pics/Kylie.png";

export const data = [
  {
    nameAndAge: "Emily, 28",
    location: "Los Angeles",
    rating: 5,
    pic: EmilyPic,
    review: [
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."
    ]
  },
  {
    nameAndAge: "Kylie, 40",
    location: "Delaware, NJ",
    rating: 5,
    pic: KyliePic,
    review: [
      "I will be very straightforward - I hate sports and working out.",
      <b>Positive Yoga</b>,
      " put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."
    ]
  },
  {
    nameAndAge: "Jesica, 51",
    location: "Delaware, NJ",
    rating: 5,
    pic: JesicaPic,
    review: [
      "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With ",
      <b>Positive Yoga</b>,
      " program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation."
    ]
  }
];
