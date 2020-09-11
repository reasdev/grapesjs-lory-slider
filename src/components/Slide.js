import constants from "../constants";
import { elHasClass } from "../utils";

export default (dc, config = {}) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { slideName, slideId, slidesSelector } = constants;

  dc.addType(slideName, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          name: "Slide",
          draggable: slidesSelector,
          style: {},
          ...config.slideProps,
        },
      },
      {
        isComponent(el) {
          if (elHasClass(el, config.classSlide)) return { type: slideName };
        },
      }
    ),

    view: defaultView,
  });
};
