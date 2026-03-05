interface BackgroundShapesProps {
  leftShape: string
  rightShape: string
}

export function BackgroundShapes({ leftShape, rightShape }: BackgroundShapesProps) {
  return (
    <div className="background-shapes" aria-hidden="true">
      <img src={leftShape} alt="" className="background-shapes__left" />
      <img src={rightShape} alt="" className="background-shapes__right" />
    </div>
  )
}
