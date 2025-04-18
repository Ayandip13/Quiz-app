import { View, Text, TouchableOpacity, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { questions } from "../config/Question";
import * as Progress from "react-native-progress";

const Question = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIscorrect] = useState(null);
  const [quizProgress, setQuizProgress] = useState(questions.length);

  const progress = (currentQuestionIndex + 1) / quizProgress;

  console.log(score);
  console.log({ isCorrect });

  //Handle next press
  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      navigation.navigate("Score", { score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIscorrect(null);
    }
  };

  const handleOptionPress = (pressedOption) => {
    setSelectedOption(pressedOption);
    const isAnswerCorrect =
      pressedOption === questions[currentQuestionIndex].correctAnswer;

    setIscorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 5);
    }
  };

  return (
    <View style={{ marginTop: 28, padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Progress.Bar
            progress={progress}
            width={null}
            height={20}
            color={"purple"}
          />
        </View>
      </View>

      <Text style={{ fontSize: 20, marginBottom: 18 }}>
        {questions[currentQuestionIndex].question}
      </Text>
      {questions[currentQuestionIndex].options.map((item, index) => (
        <Pressable
          key={index}
          // disabled={selectedOption !== null}
          onPress={() => handleOptionPress(item)}
          style={[
            {
              borderColor: "#AA60C8",
              borderWidth: 0.4,
              padding: 14,
              marginVertical: 5,
              borderRadius: 4,
            },
            selectedOption === item && {
              borderColor: isCorrect ? "#67AE6E" : "#FF6363",
              backgroundColor: isCorrect ? "#E3FBE4" : "#FFE4E4",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 17,
              color: "#000",
            }}
          >
            {item}
          </Text>
        </Pressable>
      ))}
      <TouchableOpacity
        style={{
          backgroundColor: "#D69ADE",
          paddingVertical: 10,
          paddingHorizontal: 50,
          marginTop: 30,
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => handleNext()}
      >
        <Text>
          {currentQuestionIndex === questions.length - 1
            ? "Finish"
            : "Next Question"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;
