// Generated by CoffeeScript 1.6.2
(function() {
  var getCookie;

  getCookie = function(name) {
    var cookie, cookieValue, cookies, i;

    cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      cookies = document.cookie.split(";");
      i = 0;
      while (i < cookies.length) {
        cookie = jQuery.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) === (name + "=")) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
        i++;
      }
    }
    return cookieValue;
  };

  Backbone._sync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
    var csrfToken;

    if (method === "create" || method === "update" || method === "delete") {
      csrfToken = getCookie("csrftoken");
      options.beforeSend = function(xhr) {
        return xhr.setRequestHeader("X-CSRFToken", csrfToken);
      };
    }
    return Backbone._sync(method, model, options);
  };

}).call(this);
