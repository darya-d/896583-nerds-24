'use strict';

(function () {
  var form = document.querySelector('.js-form');
  var formTrigger = document.querySelector('.js-form-trigger');
  var formClose = form.querySelector('.js-form-close');


  // Form interactivity

  if (formTrigger) {
    formTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      form.hidden = false;
    });
  }

  if (formClose) {
    formClose.addEventListener('click', function (event) {
      event.preventDefault();
      form.hidden = true;
    });
  }


  // Form validation

  var INVALID_CLASS = 'is-invalid';
  var VALID_CLASS = 'is-valid';
  var wasSubmitted = false;

  (function validateForm(formElem) {
    var requiredFields = formElem.querySelectorAll('[required]');

    var validate = function validate(elem) {
      if (!elem.value || !elem.checkValidity()) {
        elem.classList.add(INVALID_CLASS);
        elem.classList.remove(VALID_CLASS);
        return;
      }

      elem.classList.remove(INVALID_CLASS);
      elem.classList.add(VALID_CLASS);
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = requiredFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var field = _step.value;

        field.onkeyup = function (e) {
          if (wasSubmitted) {
            validate(e.target);
          }
        };
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    formElem.addEventListener('submit', function (event) {
      event.preventDefault();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = requiredFields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;
          validate(field);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      wasSubmitted = true;
    });
  })(document.getElementById('feedback'));
})();
