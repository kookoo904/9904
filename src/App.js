
// App.js

import React, { useState } from 'react';

const questions = [
  {
    question: "Q1. 집에서 가장 중요하게 여기는 분위기는?",
    options: [
      { label: "A. 깔끔하고 정돈된 느낌", value: "A" },
      { label: "B. 따뜻하고 감성적인 무드", value: "B" },
      { label: "C. 자연스럽고 편안한 분위기", value: "C" },
      { label: "D. 개성 있고 트렌디한 스타일", value: "D" },
    ],
  },
  {
    question: "Q2. 가장 끌리는 색 조합은?",
    options: [
      { label: "A. 화이트 + 그레이 + 블랙", value: "A" },
      { label: "B. 브라운 + 크림 + 파스텔", value: "B" },
      { label: "C. 베이지 + 아이보리 + 우드톤", value: "C" },
      { label: "D. 머스타드 + 올리브 + 짙은 원목", value: "D" },
    ],
  },
  {
    question: "Q3. 가장 마음에 드는 공간은?",
    options: [
      { label: "A. 심플한 가구와 넓은 여백의 거실", value: "A" },
      { label: "B. 앤틱 거울과 레이스 커튼이 있는 방", value: "B" },
      { label: "C. 햇살 들어오는 원목 식탁과 식물", value: "C" },
      { label: "D. 유니크한 디자인 소파와 조명", value: "D" },
    ],
  },
  {
    question: "Q4. 어떤 소품을 고르고 싶나요?",
    options: [
      { label: "A. 철제 선반, 미니멀한 조명", value: "A" },
      { label: "B. 빈티지 소품, 손뜨개 쿠션", value: "B" },
      { label: "C. 라탄 바구니, 린넨 커튼", value: "C" },
      { label: "D. 디자인 체어, 패턴 러그", value: "D" },
    ],
  },
  {
    question: "Q5. 가장 선호하는 조명 스타일은?",
    options: [
      { label: "A. 깔끔한 매립등이나 심플한 펜던트 조명", value: "A" },
      { label: "B. 스탠드 조명이나 빈티지 무드등", value: "B" },
      { label: "C. 자연광과 어우러지는 따뜻한 간접조명", value: "C" },
      { label: "D. 컬러풀하거나 독특한 디자인 조명", value: "D" },
    ],
  },
  {
    question: "Q6. 당신의 취미는 어떤 분위기에서 잘 어울리나요?",
    options: [
      { label: "A. 정돈된 공간에서 책이나 작업을 할 때", value: "A" },
      { label: "B. 감성적인 음악과 함께 쉴 때", value: "B" },
      { label: "C. 햇살 아래 커피를 마시며 여유를 즐길 때", value: "C" },
      { label: "D. 분위기 있는 인테리어 소품을 꾸밀 때", value: "D" },
    ],
  },
  {
    question: "Q7. SNS에서 자주 저장하는 인테리어 이미지는?",
    options: [
      { label: "A. 심플하고 넓은 미니멀 공간", value: "A" },
      { label: "B. 빈티지 가구와 소품이 가득한 공간", value: "B" },
      { label: "C. 자연 소재와 식물이 있는 공간", value: "C" },
      { label: "D. 레트로 가구나 컬러 포인트가 있는 공간", value: "D" },
    ],
  },
];

const results = {
  A: {
    title: "모던 스타일",
    description: "정돈되고 심플한 공간을 선호하는 당신에게 어울리는 스타일은 모던입니다.",
  },
  B: {
    title: "빈티지 스타일",
    description: "감성적이고 따뜻한 분위기를 좋아하는 당신은 빈티지 스타일에 잘 어울립니다.",
  },
  C: {
    title: "내추럴 스타일",
    description: "자연에서 온 편안함을 사랑하는 당신, 내추럴 인테리어가 제격이에요.",
  },
  D: {
    title: "미드센추리 스타일",
    description: "개성 있고 감각적인 분위기를 원하는 당신에게는 미드센추리 스타일이 어울려요.",
  },
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value) => {
    const updatedAnswers = [...answers, value];
    setAnswers(updatedAnswers);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const count = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((ans) => {
      count[ans]++;
    });
    return Object.keys(count).reduce((a, b) =>
      count[a] >= count[b] ? a : b
    );
  };

  if (showResult) {
    const finalStyle = calculateResult();
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h2>🎉 당신에게 어울리는 인테리어 스타일은?</h2>
        <h1>{results[finalStyle].title}</h1>
        <p>{results[finalStyle].description}</p>
        <button onClick={() => window.location.reload()}>다시 테스트하기</button>
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>{current.question}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {current.options.map((option, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <button onClick={() => handleAnswer(option.value)} style={{ padding: '1rem', width: '100%' }}>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
