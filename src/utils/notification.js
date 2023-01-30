export default function notify({ icon, title, msg, type }) {
  $.notify(
    {
      icon: icon,
      title: title,
      message: msg,
    },
    {
      type: type,
      placement: {
        from: "bottom",
        align: "right",
      },
      time: 2000,
    }
  );
}
