export const parse_dice = str => {
  const regex = /(\d+)?d(\d+)\+?(\d+)?/
  let matches = str.match(regex)
  if(!matches) {
    return null
  }
  if(!matches[2]) {
    return null
  }
  const dice_amount = +matches[1]
  const dice = +matches[2]
  const plus = +matches[3]

  let result = 0
  let result_string = ""
  let result_array = []

  if(!dice_amount) {
    let res = Math.floor(Math.random() * dice)
    result += res
    result_string += res
    result_array.push(res)
  }

  for(let i = 0; i < dice_amount; i++) {
    let res = Math.floor(Math.random() * dice)
    result += res
    if(i !== 0) {
      result_string += "+"
    }
    result_string += "["
    result_string += res
    result_string += "]"
    result_array.push(res)
  }

  if(plus) {
    result += plus
    result_string += "+"
    result_string += plus
  }

  // console.log(`--------------\n[PARSE_DICE]: input: ${matches[0]}\ndice_amount: ${dice_amount}\ndice: ${dice}\nplus: ${plus}\nresult: ${result}\nrolls: ${result_array}\n---------------------`);

  return {num: result, plus: plus, string: result_string, nums: result_array}
}
