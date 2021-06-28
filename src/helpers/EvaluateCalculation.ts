export function evaluateCalculation(form: any, dependencies: string[]) {

  let earned = 0

  dependencies.forEach((depend) => {
    let dependency = form[depend]

    if (dependency instanceof Array)
      if (dependency[0]) {
        dependency = dependency[1]
      } else {
        dependency = 0
      }

    console.log(depend + " > " + dependency)

    earned += parseInt(dependency)
  })

  console.log(earned)

  return earned || 0
}