function customBackgroundColor() {
  $('*[data-background-color="custom"]').each(function () {
    $(this).is("[custom-color]")
      ? ($(this).css("background", $(this).attr("custom-color")),
        $(this).children(".nav-top").length > 0 &&
          $(this)
            .children(".nav-top")
            .css("background", $(this).attr("custom-color")))
      : $(this).is("[custom-background]") &&
        ($(this).css(
          "background-image",
          "url(" + $(this).attr("custom-background") + ")"
        ),
        $(this).children(".nav-top").length > 0 &&
          $(this)
            .children(".nav-top")
            .css(
              "background-image",
              "url(" + $(this).attr("custom-background") + ")"
            ));
  });
}

function fixedMainHeader() {
  var e = 0;
  $(window).bind("scroll", function () {
    var a = $(this).scrollTop(),
      s = $(".main-header").outerHeight() + 150;
    Math.abs(e - a) <= 5 ||
      (a > e && a > s
        ? $(".main-header").removeClass("up")
        : a + $(window).height() < $(document).height() &&
          $(".main-header").addClass("up"),
      $(window).scrollTop() > s
        ? $(".main-header").addClass("fixed")
        : ($(".main-header").removeClass("fixed"),
          $(".main-header").removeClass("up")),
      (e = a));
  });
}

export default {
  /*Vue create state hook*/
  created() {
    this.fixedMainHeader();
    this.customBackgroundColor();
  },

  /*Vue method hook*/
  methods: {
    fixedMainHeader: fixedMainHeader,
    customBackgroundColor: customBackgroundColor,
  },
};
