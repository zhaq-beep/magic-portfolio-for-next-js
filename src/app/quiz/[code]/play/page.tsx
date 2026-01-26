"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { quizData } from "@/data/quiz"
import { Card, Button } from "@once-ui-system/core"

export default function QuizPlayPage() {
  const { slug } = useParams()
  const router = useRouter()

  const quiz = quizData[slug as keyof typeof quizData]
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const question = quiz.questions[index]

  function handleAnswer(i: number) {
    if (i === question.answer) {
      setScore((s) => s + 1)
    }

    if (index + 1 < quiz.questions.length) {
      setIndex(index + 1)
    } else {
      router.push(`/quiz/${slug}/result?score=${score + 1}`)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <Card>
        <p className="opacity-60 mb-2">
          Soal {index + 1} / {quiz.questions.length}
        </p>

        <h2 className="text-xl font-semibold mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((opt, i) => (
            <Button
              key={i}
              primary="outline"
              className="w-full"
              onClick={() => handleAnswer(i)}
            >
              {opt}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  )
}
