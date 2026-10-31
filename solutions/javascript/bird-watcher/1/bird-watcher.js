// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let birdCount = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdCount += birdsPerDay[i];
  }
  return birdCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const weeks = [];
  let currentWeek = [];
  let birdCount = 0;
  for (let i = 0; i <= birdsPerDay.length; i++) {
    if (i !== 0 && i % 7 == 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(birdsPerDay[i]);
  }
  for (let i = 0; i < weeks[week - 1].length; i++) {
   birdCount += weeks[week - 1][i];
  }
  return birdCount;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    let fixedBirds = birdsPerDay[i];
    if (i % 2 == 0) {
      birdsPerDay[i] += 1;
    }
  }
}
