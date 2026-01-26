"use client"

import { useParams, useRouter } from "next/navigation"
import { quizData } from "@/data/quiz"
import { Card, Button } from "once-ui"

export default function QuizIntroPage() {
  const { slug } = useParams()
  const router = useRouter()

  const quiz = quizData[slug as keyof typeof quizData]
  if (!quiz) return <p>Quiz tidak ditemukan</p>

  return (
    <div className="max-w-xl mx-auto mt-20">
      <Card>
        <h1 className="text-2xl font-bold">{quiz.title}</h1>
        <p className="opacity-70 mt-2">
          Jumlah soal: {quiz.questions.length}
        </p>
        <p className="opacity-70">
          Durasi: {quiz.duration / 60} menit
        </p>

        <Button
          className="mt-6"
          onClick={() => router.push(`/quiz/${slug}/play`)}
        >
          Mulai Quiz
        </Button>
      </Card>
    </div>
  )
}
