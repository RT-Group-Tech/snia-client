/***
 * Shake animation when error detected @param [id]
 **/

export default function animatedFailedTask(id) {
  $(`#${id}`).addClass("animated shake");
  setTimeout(() => $(`#${id}`).removeClass("animated shake"), 1000);
}
