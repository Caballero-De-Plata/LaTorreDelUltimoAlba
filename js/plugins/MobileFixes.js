/*:
 * @target MZ MV
 * @plugindesc Añade una tecla de borrar en la entrada de nombre (usa '←' como delete) v1.0
 * @author Ruben+Copilot
 */

(function() {

  // Obtenemos el carácter de la casilla actual
  const _Window_NameInput_character = Window_NameInput.prototype.character;
  Window_NameInput.prototype.character = function() {
    const c = _Window_NameInput_character.call(this);
    return c;
  };

  // Sobrescribimos el OK de la cuadrícula
  const _Window_NameInput_processOk = Window_NameInput.prototype.processOk;
  Window_NameInput.prototype.processOk = function() {
    const c = this.character();

    // Si es la tecla de borrar (←), borramos un carácter
    if (c === '←') {
      this._editWindow.back();
      return;
    }

    // Para cualquier otro caso, comportamiento normal
    _Window_NameInput_processOk.call(this);
  };

})();