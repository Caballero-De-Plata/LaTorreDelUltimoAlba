/*:
 * @plugindesc Soluciona cancelar en batalla para móviles (versión sin escena de nombre).
 * @author Ruben
 */

(function() {

    // Helper para simular entrada de teclado
    function simulateKeyPress(keyName) {
        Input._currentState[keyName] = true;
        Input._previousState[keyName] = false;
    }

    // --- BOTÓN CANCELAR EN BATALLA ---
    const createBattleCancelButton = Scene_Battle.prototype.createButtons;
    Scene_Battle.prototype.createButtons = function() {
        createBattleCancelButton.call(this);

        if (Utils.isMobileDevice()) {
            const btn = new Sprite_Button();
            btn.bitmap = ImageManager.loadSystem('IconSet');

            // Icono 0,0 del IconSet (puedes cambiarlo si quieres otro)
            btn.setColdFrame(0, 0, ImageManager.iconWidth, ImageManager.iconHeight);
            btn.setHotFrame(0, 0, ImageManager.iconWidth, ImageManager.iconHeight);

            // Posición del botón
            btn.x = Graphics.width - 120;
            btn.y = Graphics.height - 120;

            // Acción: simular Escape
            btn.setClickHandler(() => {
                simulateKeyPress('escape');
            });

            this.addChild(btn);
        }
    };

})();