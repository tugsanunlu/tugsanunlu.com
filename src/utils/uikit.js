import UIkit from "uikit"

const offCanvasBeforeShow = () => {
  UIkit.offcanvas('#offcanvas-push').hide();
  UIkit.offcanvas('#offcanvas-push').show();
}

export { offCanvasBeforeShow }