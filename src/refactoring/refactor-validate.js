export function validateTextField(element) {
  if (element.value.length < 6) {
    element.classList.add('is-invalid');
    return false;
  }

  element.classList.remove('is-invalid');
  return true;
}
