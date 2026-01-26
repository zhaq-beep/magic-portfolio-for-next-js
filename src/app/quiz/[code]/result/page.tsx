"use client"

import { useSearchParams, useParams } from "next/navigation"
import { quizData } from "@/data/quiz"
import { Card, Button } from "once-ui"
import Link from "next/link"

export default function QuizResultPage() {
  const params = useSearchParams()
  const { slug } = useParams()

  const score = Number(params.get("score") || 0)
  const total = quizData[slug as keyof typeof quizData].questions.length

  return (
    <div className="max-w-xl mx-auto mt-20">
      <Card className="text-center">
        <h1 className="text-2xl font-bold">Hasil Quiz</h1>
        <p className="mt-4 text-lg">
          Skor kamu:
          <span className="font-bold"> {score} / {total}</span>
        </p>

        <Link href="/quiz">
          <Button className="mt-6">Kembali ke Portal</Button>
        </Link>
      </Card>
    </div>
  )
}
