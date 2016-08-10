/**
 * Created by timur on 8/9/16.
 */

export const removeIdea = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
}
