/** All shape assets under /assets/shapes/ */
export const SHAPE_PATHS = [
  '/assets/shapes/f-shape1.svg',
  '/assets/shapes/f-shape-2.svg',
  '/assets/shapes/f-shape3.svg',
  '/assets/shapes/f-shape4.svg',
  '/assets/shapes/f-shape5.svg',
  '/assets/shapes/f-shape6.svg',
] as const

export type ShapeIndex = 0 | 1 | 2 | 3 | 4 | 5

export interface PageShapeConfig {
  background: { left: ShapeIndex; right: ShapeIndex }
}

/** Unique left/right shape combos per page (background edges). */
export const PAGE_SHAPES: Record<string, PageShapeConfig> = {
  '/': { background: { left: 1, right: 4 } },
  '/about': { background: { left: 0, right: 2 } },
  '/services': { background: { left: 1, right: 3 } },
  '/team': { background: { left: 2, right: 4 } },
  '/gallery': { background: { left: 3, right: 5 } },
  '/volunteer': { background: { left: 4, right: 0 } },
  '/contact': { background: { left: 5, right: 1 } },
  '/donate': { background: { left: 0, right: 3 } },
}

export function getBackgroundShapes(pathname: string): { left: string; right: string } | null {
  const config = PAGE_SHAPES[pathname]
  if (!config) return null
  return {
    left: SHAPE_PATHS[config.background.left],
    right: SHAPE_PATHS[config.background.right],
  }
}
