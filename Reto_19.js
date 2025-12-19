// Solución 1
function revealSantaRoute(routes) {
  let travel = routes[0]
  routes.forEach((route, index) => {
    routes.forEach((routeAgain, indexAgain) => {
      if (index === indexAgain) {
        return
      }
      
      if (travel[travel.length - 1].includes(routeAgain[0])) {
        travel = [...travel, routeAgain[1]]
      }
      
    })
  })
  
  return travel
}

// Solución 2
function revealSantaRoute(routes) {
  const routeMap = new Map()
  const destinations = new Set()

  for (const [from, to] of routes) {
    routeMap.set(from, to)
    destinations.add(to)
  }

  const start = [...routeMap.keys()].find(
    city => !destinations.has(city)
  )

  const travel = [start]
  let current = start

  while (routeMap.has(current)) {
    const next = routeMap.get(current)
    travel.push(next)
    current = next
  }

  return travel
}