/***
 * Shake animation when error detected @param [id]
 **/

export default function animatedFailedTask(id) {
  if (id.includes("btn")) {
    $(`#${id}`).addClass("animated shake btn-danger");
    setTimeout(
      () => $(`#${id}`).removeClass("animated shake btn-danger"),
      1000
    );
  } else {
    $(`#${id}`).addClass("animated shake");
    setTimeout(() => $(`#${id}`).removeClass("animated shake"), 1000);
  }
}
