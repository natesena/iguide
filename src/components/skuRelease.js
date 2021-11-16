import React from "react";

function SkuRelease() {
  return (
    <div>
      <h1>Sku Release</h1>
      <p>
        In order to properly display a model on your PDP, it is necessary to
        know the SKU of the product to display. Vertebrae’s Implementation
        Engineers require a method to determine the active SKU on a PDP. The
        active SKU is often determined by a combination of color, size, and
        other preferences that make up an item. For all combinations, the proper
        SKU of the model must be scrapeable.
      </p>
      {/* image 1 */}
      <img
        src="https://vertebrae-axis.s3.us-west-2.amazonaws.com/implementation/guide/assets/inline_sku.png"
        style={{ width: "100%" }}
      />
      <p>
        Highlighted above the SKU of the current product is visible inline in
        the HTML. Vertebrae Implementation Engineers can web scrape this SKU
        inside the current active swatch.
      </p>
      {/* Image 2 */}
      <img
        src="https://vertebrae-axis.s3.us-west-2.amazonaws.com/implementation/guide/assets/axis_lisiting.png"
        style={{ width: "100%" }}
      />
      <p>
        The SKU needs to match 1:1 with the SKU listed within AXIS, so that a
        model is properly loaded.
      </p>
    </div>
  );
}

export default SkuRelease;
