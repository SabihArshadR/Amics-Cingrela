"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useMemo, useState } from "react";
import CustomButton from "../ui/Button";
import { useParams, useRouter } from "next/navigation";

const Quiz = () => {
  const t = useTranslations();
  const router = useRouter();
  const { id } = useParams();
  const volcanoId = Number(id);

  const volcanoQuestions = useMemo(
    () => ({
      1: [
        {
          title: t("Volcano1Quiz1.title"),
          options: [
            t("Volcano1Quiz1.option1"),
            t("Volcano1Quiz1.option2"),
            t("Volcano1Quiz1.option3"),
            t("Volcano1Quiz1.option4"),
          ],
          correct: t("Volcano1Quiz1.option1"),
        },
        {
          title: t("Volcano1Quiz2.title"),
          options: [
            t("Volcano1Quiz2.option1"),
            t("Volcano1Quiz2.option2"),
            t("Volcano1Quiz2.option3"),
            t("Volcano1Quiz2.option4"),
          ],
          correct: t("Volcano1Quiz2.option1"),
        },
        {
          title: t("Volcano1Quiz3.title"),
          options: [
            t("Volcano1Quiz3.option1"),
            t("Volcano1Quiz3.option2"),
            t("Volcano1Quiz3.option3"),
            t("Volcano1Quiz3.option4"),
          ],
          correct: t("Volcano1Quiz3.option1"),
        },
        {
          title: t("Volcano1Quiz4.title"),
          options: [
            t("Volcano1Quiz4.option1"),
            t("Volcano1Quiz4.option2"),
            t("Volcano1Quiz4.option3"),
            t("Volcano1Quiz4.option4"),
          ],
          correct: t("Volcano1Quiz4.option1"),
        },
      ],
      2: [
        {
          title: t("Volcano2Quiz1.title"),
          options: [
            t("Volcano2Quiz1.option1"),
            t("Volcano2Quiz1.option2"),
            t("Volcano2Quiz1.option3"),
            t("Volcano2Quiz1.option4"),
          ],
          correct: t("Volcano2Quiz1.option1"),
        },
        {
          title: t("Volcano2Quiz2.title"),
          options: [
            t("Volcano2Quiz2.option1"),
            t("Volcano2Quiz2.option2"),
            t("Volcano2Quiz2.option3"),
            t("Volcano2Quiz2.option4"),
          ],
          correct: t("Volcano2Quiz2.option1"),
        },
        {
          title: t("Volcano2Quiz3.title"),
          options: [
            t("Volcano2Quiz3.option1"),
            t("Volcano2Quiz3.option2"),
            t("Volcano2Quiz3.option3"),
            t("Volcano2Quiz3.option4"),
          ],
          correct: t("Volcano2Quiz3.option1"),
        },
        {
          title: t("Volcano2Quiz4.title"),
          options: [
            t("Volcano2Quiz4.option1"),
            t("Volcano2Quiz4.option2"),
            t("Volcano2Quiz4.option3"),
            t("Volcano2Quiz4.option4"),
          ],
          correct: t("Volcano2Quiz4.option1"),
        },
        {
          title: t("Volcano2Quiz5.title"),
          options: [
            t("Volcano2Quiz5.option1"),
            t("Volcano2Quiz5.option2"),
            t("Volcano2Quiz5.option3"),
            t("Volcano2Quiz5.option4"),
          ],
          correct: t("Volcano2Quiz5.option1"),
        },
      ],
      3: [
        {
          title: t("Volcano3Quiz1.title"),
          options: [
            t("Volcano3Quiz1.option1"),
            t("Volcano3Quiz1.option2"),
            t("Volcano3Quiz1.option3"),
            t("Volcano3Quiz1.option4"),
          ],
          correct: t("Volcano3Quiz1.option1"),
        },
        {
          title: t("Volcano3Quiz2.title"),
          options: [
            t("Volcano3Quiz2.option1"),
            t("Volcano3Quiz2.option2"),
            t("Volcano3Quiz2.option3"),
            t("Volcano3Quiz2.option4"),
          ],
          correct: t("Volcano3Quiz2.option1"),
        },
        {
          title: t("Volcano3Quiz3.title"),
          options: [
            t("Volcano3Quiz3.option1"),
            t("Volcano3Quiz3.option2"),
            t("Volcano3Quiz3.option3"),
            t("Volcano3Quiz3.option4"),
          ],
          correct: t("Volcano3Quiz3.option1"),
        },
        {
          title: t("Volcano3Quiz4.title"),
          options: [
            t("Volcano3Quiz4.option1"),
            t("Volcano3Quiz4.option2"),
            t("Volcano3Quiz4.option3"),
            t("Volcano3Quiz4.option4"),
          ],
          correct: t("Volcano3Quiz4.option1"),
        },
        {
          title: t("Volcano3Quiz5.title"),
          options: [
            t("Volcano3Quiz5.option1"),
            t("Volcano3Quiz5.option2"),
            t("Volcano3Quiz5.option3"),
            t("Volcano3Quiz5.option4"),
          ],
          correct: t("Volcano3Quiz5.option1"),
        },
        {
          title: t("Volcano3Quiz6.title"),
          options: [
            t("Volcano3Quiz6.option1"),
            t("Volcano3Quiz6.option2"),
            t("Volcano3Quiz6.option3"),
            t("Volcano3Quiz6.option4"),
          ],
          correct: t("Volcano3Quiz6.option1"),
        },
      ],
      4: [
        {
          title: t("Volcano4Quiz1.title"),
          options: [
            t("Volcano4Quiz1.option1"),
            t("Volcano4Quiz1.option2"),
            t("Volcano4Quiz1.option3"),
            t("Volcano4Quiz1.option4"),
          ],
          correct: t("Volcano4Quiz1.option1"),
        },
        {
          title: t("Volcano4Quiz2.title"),
          options: [
            t("Volcano4Quiz2.option1"),
            t("Volcano4Quiz2.option2"),
            t("Volcano4Quiz2.option3"),
            t("Volcano4Quiz2.option4"),
          ],
          correct: t("Volcano4Quiz2.option1"),
        },
        {
          title: t("Volcano4Quiz3.title"),
          options: [
            t("Volcano4Quiz3.option1"),
            t("Volcano4Quiz3.option2"),
            t("Volcano4Quiz3.option3"),
            t("Volcano4Quiz3.option4"),
          ],
          correct: t("Volcano4Quiz3.option1"),
        },
        {
          title: t("Volcano4Quiz4.title"),
          options: [
            t("Volcano4Quiz4.option1"),
            t("Volcano4Quiz4.option2"),
            t("Volcano4Quiz4.option3"),
            t("Volcano4Quiz4.option4"),
          ],
          correct: t("Volcano4Quiz4.option1"),
        },
        {
          title: t("Volcano4Quiz5.title"),
          options: [
            t("Volcano4Quiz5.option1"),
            t("Volcano4Quiz5.option2"),
            t("Volcano4Quiz5.option3"),
            t("Volcano4Quiz5.option4"),
          ],
          correct: t("Volcano4Quiz5.option1"),
        },
        {
          title: t("Volcano4Quiz6.title"),
          options: [
            t("Volcano4Quiz6.option1"),
            t("Volcano4Quiz6.option2"),
            t("Volcano4Quiz6.option3"),
            t("Volcano4Quiz6.option4"),
          ],
          correct: t("Volcano4Quiz6.option1"),
        },
      ],
      5: [
        {
          title: t("Volcano5Quiz1.title"),
          options: [
            t("Volcano5Quiz1.option1"),
            t("Volcano5Quiz1.option2"),
            t("Volcano5Quiz1.option3"),
            t("Volcano5Quiz1.option4"),
          ],
          correct: t("Volcano5Quiz1.option1"),
        },
        {
          title: t("Volcano5Quiz2.title"),
          options: [
            t("Volcano5Quiz2.option1"),
            t("Volcano5Quiz2.option2"),
            t("Volcano5Quiz2.option3"),
            t("Volcano5Quiz2.option4"),
          ],
          correct: t("Volcano5Quiz2.option1"),
        },
        {
          title: t("Volcano5Quiz3.title"),
          options: [
            t("Volcano5Quiz3.option1"),
            t("Volcano5Quiz3.option2"),
            t("Volcano5Quiz3.option3"),
            t("Volcano5Quiz3.option4"),
          ],
          correct: t("Volcano5Quiz3.option1"),
        },
        {
          title: t("Volcano5Quiz4.title"),
          options: [
            t("Volcano5Quiz4.option1"),
            t("Volcano5Quiz4.option2"),
            t("Volcano5Quiz4.option3"),
            t("Volcano5Quiz4.option4"),
          ],
          correct: t("Volcano5Quiz4.option1"),
        },
      ],
      6: [
        {
          title: t("Volcano6Quiz1.title"),
          options: [
            t("Volcano6Quiz1.option1"),
            t("Volcano6Quiz1.option2"),
            t("Volcano6Quiz1.option3"),
            t("Volcano6Quiz1.option4"),
          ],
          correct: t("Volcano6Quiz1.option1"),
        },
        {
          title: t("Volcano6Quiz2.title"),
          options: [
            t("Volcano6Quiz2.option1"),
            t("Volcano6Quiz2.option2"),
            t("Volcano6Quiz2.option3"),
            t("Volcano6Quiz2.option4"),
          ],
          correct: t("Volcano6Quiz2.option1"),
        },
        {
          title: t("Volcano6Quiz3.title"),
          options: [
            t("Volcano6Quiz3.option1"),
            t("Volcano6Quiz3.option2"),
            t("Volcano6Quiz3.option3"),
            t("Volcano6Quiz3.option4"),
          ],
          correct: t("Volcano6Quiz3.option1"),
        },
        {
          title: t("Volcano6Quiz4.title"),
          options: [
            t("Volcano6Quiz4.option1"),
            t("Volcano6Quiz4.option2"),
            t("Volcano6Quiz4.option3"),
            t("Volcano6Quiz4.option4"),
          ],
          correct: t("Volcano6Quiz4.option1"),
        },
        {
          title: t("Volcano6Quiz5.title"),
          options: [
            t("Volcano6Quiz5.option1"),
            t("Volcano6Quiz5.option2"),
            t("Volcano6Quiz5.option3"),
            t("Volcano6Quiz5.option4"),
          ],
          correct: t("Volcano6Quiz5.option1"),
        },
        {
          title: t("Volcano6Quiz6.title"),
          options: [
            t("Volcano6Quiz6.option1"),
            t("Volcano6Quiz6.option2"),
            t("Volcano6Quiz6.option3"),
            t("Volcano6Quiz6.option4"),
          ],
          correct: t("Volcano6Quiz6.option1"),
        },
      ],
      7: [
        {
          title: t("Volcano7Quiz1.title"),
          options: [
            t("Volcano7Quiz1.option1"),
            t("Volcano7Quiz1.option2"),
            t("Volcano7Quiz1.option3"),
            t("Volcano7Quiz1.option4"),
          ],
          correct: t("Volcano7Quiz1.option1"),
        },
        {
          title: t("Volcano7Quiz2.title"),
          options: [
            t("Volcano7Quiz2.option1"),
            t("Volcano7Quiz2.option2"),
            t("Volcano7Quiz2.option3"),
            t("Volcano7Quiz2.option4"),
          ],
          correct: t("Volcano7Quiz2.option1"),
        },
        {
          title: t("Volcano7Quiz3.title"),
          options: [
            t("Volcano7Quiz3.option1"),
            t("Volcano7Quiz3.option2"),
            t("Volcano7Quiz3.option3"),
            t("Volcano7Quiz3.option4"),
          ],
          correct: t("Volcano7Quiz3.option1"),
        },
        {
          title: t("Volcano7Quiz4.title"),
          options: [
            t("Volcano7Quiz4.option1"),
            t("Volcano7Quiz4.option2"),
            t("Volcano7Quiz4.option3"),
            t("Volcano7Quiz4.option4"),
          ],
          correct: t("Volcano7Quiz4.option1"),
        },
        {
          title: t("Volcano7Quiz5.title"),
          options: [
            t("Volcano7Quiz5.option1"),
            t("Volcano7Quiz5.option2"),
            t("Volcano7Quiz5.option3"),
            t("Volcano7Quiz5.option4"),
          ],
          correct: t("Volcano7Quiz5.option1"),
        },
      ],
      8: [
        {
          title: t("Volcano8Quiz1.title"),
          options: [
            t("Volcano8Quiz1.option1"),
            t("Volcano8Quiz1.option2"),
            t("Volcano8Quiz1.option3"),
            t("Volcano8Quiz1.option4"),
          ],
          correct: t("Volcano8Quiz1.option1"),
        },
        {
          title: t("Volcano8Quiz2.title"),
          options: [
            t("Volcano8Quiz2.option1"),
            t("Volcano8Quiz2.option2"),
            t("Volcano8Quiz2.option3"),
            t("Volcano8Quiz2.option4"),
          ],
          correct: t("Volcano8Quiz2.option1"),
        },
        {
          title: t("Volcano8Quiz3.title"),
          options: [
            t("Volcano8Quiz3.option1"),
            t("Volcano8Quiz3.option2"),
            t("Volcano8Quiz3.option3"),
            t("Volcano8Quiz3.option4"),
          ],
          correct: t("Volcano8Quiz3.option1"),
        },
        {
          title: t("Volcano8Quiz4.title"),
          options: [
            t("Volcano8Quiz4.option1"),
            t("Volcano8Quiz4.option2"),
            t("Volcano8Quiz4.option3"),
            t("Volcano8Quiz4.option4"),
          ],
          correct: t("Volcano8Quiz4.option1"),
        },
        {
          title: t("Volcano8Quiz5.title"),
          options: [
            t("Volcano8Quiz5.option1"),
            t("Volcano8Quiz5.option2"),
            t("Volcano8Quiz5.option3"),
            t("Volcano8Quiz5.option4"),
          ],
          correct: t("Volcano8Quiz5.option1"),
        },
      ],
      9: [
        {
          title: t("Volcano9Quiz1.title"),
          options: [
            t("Volcano9Quiz1.option1"),
            t("Volcano9Quiz1.option2"),
            t("Volcano9Quiz1.option3"),
            t("Volcano9Quiz1.option4"),
          ],
          correct: t("Volcano9Quiz1.option1"),
        },
        {
          title: t("Volcano9Quiz2.title"),
          options: [
            t("Volcano9Quiz2.option1"),
            t("Volcano9Quiz2.option2"),
            t("Volcano9Quiz2.option3"),
            t("Volcano9Quiz2.option4"),
          ],
          correct: t("Volcano9Quiz2.option1"),
        },
        {
          title: t("Volcano9Quiz3.title"),
          options: [
            t("Volcano9Quiz3.option1"),
            t("Volcano9Quiz3.option2"),
            t("Volcano9Quiz3.option3"),
            t("Volcano9Quiz3.option4"),
          ],
          correct: t("Volcano9Quiz3.option1"),
        },
        {
          title: t("Volcano9Quiz4.title"),
          options: [
            t("Volcano9Quiz4.option1"),
            t("Volcano9Quiz4.option2"),
            t("Volcano9Quiz4.option3"),
            t("Volcano9Quiz4.option4"),
          ],
          correct: t("Volcano9Quiz4.option1"),
        },
        {
          title: t("Volcano9Quiz5.title"),
          options: [
            t("Volcano9Quiz5.option1"),
            t("Volcano9Quiz5.option2"),
            t("Volcano9Quiz5.option3"),
            t("Volcano9Quiz5.option4"),
          ],
          correct: t("Volcano9Quiz5.option1"),
        },
      ],
    }),
    [t]
  );

  // const allQuestions = volcanoQuestions[volcanoId] || [];
  const allQuestions =
    volcanoQuestions[volcanoId as keyof typeof volcanoQuestions] || [];

  const labels = ["A", "B", "C", "D"];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [texts, setTexts] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  function shuffleArray(array: any[]) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const handleSelect = (optionText: string) => {
    setSelected(optionText);

    if (optionText === allQuestions[currentQuestion].correct) {
      if (currentQuestion < allQuestions.length - 1) {
        setTimeout(() => {
          const nextQ = currentQuestion + 1;
          setCurrentQuestion(nextQ);
          setTexts(shuffleArray(allQuestions[nextQ].options));
          setSelected(null);
        }, 800);
      } else {
        setTimeout(() => {
          setQuizCompleted(true);
        }, 800);
      }
    } else {
      setTimeout(() => {
        setShowPlayAgain(true);
      }, 1000);
    }
  };

  const handlePlayAgain = () => {
    setTexts(shuffleArray(allQuestions[currentQuestion].options));
    setSelected(null);
    setShowPlayAgain(false);
  };

  const getOptionClass = (optionText: string) => {
    if (!selected) return "bg-white border-primary text-primary";

    if (
      selected === allQuestions[currentQuestion].correct &&
      optionText === allQuestions[currentQuestion].correct
    ) {
      return "bg-lightgreen border-lightgreen text-white";
    }

    if (selected !== allQuestions[currentQuestion].correct) {
      if (optionText === selected) return "bg-red border-red text-white";
      if (optionText === allQuestions[currentQuestion].correct)
        return "bg-lightgreen border-lightgreen text-white";
    }

    return "bg-white border-primary text-primary";
  };

  useEffect(() => {
    if (allQuestions.length > 0) {
      setTexts(shuffleArray(allQuestions[0].options));
    }
  }, [allQuestions]);

  if (quizCompleted) {
    const currentUnlocked = Number(
      localStorage.getItem("unlockedVolcano") || 1
    );
    if (volcanoId >= currentUnlocked) {
      localStorage.setItem("unlockedVolcano", String(volcanoId + 1));
    }
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          🎉 Volcano {volcanoId} Quiz Completed!
        </h1>
        <CustomButton onClick={() => router.push("/amics")}>
          Back to Volcanoes
        </CustomButton>
      </div>
    );
  }

  if (allQuestions.length === 0) {
    return <p className="text-center mt-10">No quiz found for this volcano.</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center pb-[95px] ">
      <div className="bg-white w-full flex h-[242px] items-center justify-center">
        <h1 className="text-4xl font-bold text-primary text-center">
          {allQuestions[currentQuestion].title}
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-[72px] px-4 w-full">
        {labels.map((label, index) => (
          <div
            key={index}
            onClick={() => !selected && handleSelect(texts[index])}
            className={`min-h-[56px] rounded-4xl border-2 px-4 py-3 flex items-center gap-4 cursor-pointer transition-colors duration-300 ${getOptionClass(
              texts[index]
            )}`}
          >
            <div className="font-bold flex items-center justify-center">
              {label}
            </div>
            <h1 className="text-sm">{texts[index]}</h1>
          </div>
        ))}
      </div>
      {showPlayAgain && (
        <CustomButton onClick={handlePlayAgain} className="mt-6">
          Try Again
        </CustomButton>
      )}
    </div>
  );
};

export default Quiz;
