import React, { useEffect, useState, useCallback } from 'react'

interface PerformanceMetrics {
  renderCount: number
  lastRenderTime: number
  averageRenderTime: number
  totalRenderTime: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderCount: 0,
    lastRenderTime: 0,
    averageRenderTime: 0,
    totalRenderTime: 0
  })

  const [isVisible, setIsVisible] = useState(false)

  // Track render performance
  useEffect(() => {
    const startTime = performance.now()
    
    setMetrics(prev => {
      const newRenderCount = prev.renderCount + 1
      const newLastRenderTime = performance.now() - startTime
      const newTotalRenderTime = prev.totalRenderTime + newLastRenderTime
      const newAverageRenderTime = newTotalRenderTime / newRenderCount

      return {
        renderCount: newRenderCount,
        lastRenderTime: newLastRenderTime,
        averageRenderTime: newAverageRenderTime,
        totalRenderTime: newTotalRenderTime
      }
    })
  })

  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Reset metrics
  const resetMetrics = useCallback(() => {
    setMetrics({
      renderCount: 0,
      lastRenderTime: 0,
      averageRenderTime: 0,
      totalRenderTime: 0
    })
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm font-mono z-[9999] max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1 text-xs">
        <div>Renders: {metrics.renderCount}</div>
        <div>Last: {metrics.lastRenderTime.toFixed(2)}ms</div>
        <div>Avg: {metrics.averageRenderTime.toFixed(2)}ms</div>
        <div>Total: {metrics.totalRenderTime.toFixed(2)}ms</div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <button
          onClick={resetMetrics}
          className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          Reset
        </button>
        <div className="text-xs text-gray-400 mt-1">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  )
}

export default PerformanceMonitor
