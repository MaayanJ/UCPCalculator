export function _switchInnovation(innovation: number) {
  switch (innovation) {
    case 3:
      return 'Marketing'
    case 2:
      return 'Organizational'
    case 1:
      return 'Process'
    case 0:
    default:
      return 'Product and Service'
  }
}